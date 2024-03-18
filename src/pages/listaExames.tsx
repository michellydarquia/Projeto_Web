import { 
    IonContent, 
    IonHeader,
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonCardContent, 
    IonButton 
} from '@ionic/react';
import React, {useEffect, useState} from 'react';
import {useHistory, Redirect} from 'react-router-dom';

import axios from 'axios';

import { keepInfo } from './perfilProfissional';

const listaExames: React.FC = () => {

    const history = useHistory<any>()
    

    const [paciente, setPaciente] = useState<string>()
    const [exames, setExames] = useState<any[]>()
    const [msg, setMsg] = useState<string>('')

    let uid: string

    useEffect(()=>{
        
        if (history.location.state?.paciente){

            try {
                
                uid = history.location.state.paciente.Id
                setPaciente(history.location.state.paciente.nome)
                
            } finally {
                
                axios.get('http://localhost:3000/listexams', {
                params: {
                    id: uid
                }
                })
                .then(response => {
                    if (response.data != 'none'){
                        setExames(response.data)
                    } else {
                        setMsg('Este paciente não possui exames agendados.')
                    }
                })
                .catch(error => console.log(error));
               
            }
        }
            
    }, [])

    return (
        <IonPage>            
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Exames de {paciente}
                    </IonTitle>
                    <IonButton fill="clear" color='success'
                    onClick={()=>{
                        try {
                            history.push({
                                pathname: '/lista-exames',
                                state: {
                                    Dados: history.location.state.Dados,
                                    paciente: paciente,
                                    docId: uid
                                }
                            })
                        } finally {
                            <Redirect to='/criar-exame' />
                        }
                    }}
                    >Adicionar exame</IonButton>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">

                {msg}

                {
                exames?.map((exame) =>(
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>{exame.title}</IonCardTitle>
                        <IonCardSubtitle>dr francisico</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>{exame.desc}</IonCardContent>

                    <IonButton fill="clear" href='/exame'>Ver detalhes</IonButton>
                    <IonButton fill="clear" >Adicionar resultado</IonButton>
                    <IonButton fill="clear" color='danger'>Excluir exame</IonButton>
                </IonCard>))
                }


                <br/>
                <IonButton
                onClick={()=>{
                    try {
                        keepInfo(history, '/lista-pacientes')
                    } finally {
                        <Redirect to='/lista-pacientes' />
                    }
                }}
                >voltar</IonButton>

            </IonContent>
            

        </IonPage>
    );
};

export default listaExames;
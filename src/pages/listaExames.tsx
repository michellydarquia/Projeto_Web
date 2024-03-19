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
        
        //if (history.location.state?.paciente){

            try {
                
                setPaciente(history.location.state.paciente.nome)
                
            } finally {
                
                axios.get('http://localhost:3000/listexams', {
                    params: {
                        id: history.location.state.paciente.Id
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
        //}
            
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
                        console.log(uid)
                        try {
                            history.push({
                                pathname: '/criar-exame',
                                state: {
                                    Dados: history.location.state.Dados,
                                    paciente: {
                                        nome: paciente,
                                        Id: history.location.state.paciente.Id
                                    }
                                }
                            })
                            history.go(0)
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
                exames?.map((info) =>(
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>{info.exame.title}</IonCardTitle>
                        <IonCardSubtitle>Realização: {info.exame.day} {info.exame.hour}</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        Descrição: {info.exame.desc}<br/><br/>
                        Resultado:
                    </IonCardContent>

                    <IonButton fill="clear" >Adicionar resultado</IonButton>
                    <IonButton fill="clear" color='danger'
                    onClick={()=>{
                        axios.get('http://localhost:3000/deleteexam', {
                            params: {
                                id: history.location.state.paciente.Id,
                                index: info.index
                            }
                        })
                        .then(()=>history.go(0))
                        .catch(error => console.log(error));
                    }}
                    >Excluir exame</IonButton>
                </IonCard>))
                }


                <br/>
                <IonButton
                onClick={()=>{
                    try {
                        keepInfo(history, '/lista-pacientes')
                        history.go(0)
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
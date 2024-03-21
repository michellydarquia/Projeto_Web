import { 
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton
} from '@ionic/react';

import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import { keepInfo } from './perfilProfissional';

import '../theme/register_perfil.css';
import '../theme/login.css';

const listaPacientes: React.FC = () => {

    const history = useHistory<any>()

    const [alldocs, setAlldocs] = useState<any[]>([]);

    useEffect(() => {
       
        axios.get('http://localhost:3000/getdocs', {
            params: {
                email: history.location.state.Dados.email
            }
        })
        .then(response => setAlldocs(response.data))
        .catch(error => console.log(error));
    
    },[])

    const seeExams = (name: string, uid: string) => {
        try{
            history.push({
                pathname: '/lista-exames-adm',
                state: {
                    Dados: history.location.state.Dados,
                    id: history.location.state.id,
                    paciente: {
                        nome: name,
                        Id: uid
                    }
                }
            })
            
        } finally {
            return <Redirect to='/lista-exames-adm' />
        }
    }

    const deleteuser = (userId: string) => {
        axios.get('http://localhost:3000/deleteuser',{
            params: {
                uid: userId
            }
        })
        .catch((error)=>console.log(error.data))
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar id='mainTbar'>
                    <IonTitle>PACIENTES</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent id='contentPrinc' className="ion-padding">
          
                {
                alldocs.map((doc, index) => (
                    
                    <IonCard key={doc.info.email}>
                        <IonCardHeader>
                            <IonCardTitle>{index+1} - {doc.info.nome}</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                        Data de criação: {doc.info.data}<br/>
                        E-mail: {doc.info.email}<br/>
                        CPF: {doc.info.CPF}<br/>
                        CEP: {doc.info.CEP}<br/>
                        Endereço: {doc.info.endereco}<br/>
                        Nome da mãe: {doc.info.nomeDaMae}<br/>
                        RG: {doc.info.RG}<br/>
                        Tipo da conta: {doc.info.conta}<br/>
                        </IonCardContent>

                        <IonButton fill="clear" color='dark'
                        onClick={()=>{seeExams(doc.info.nome, doc.uid)}}>Ver exames</IonButton>
                        <IonButton fill="clear" color='danger'
                        onClick={()=>{
                            deleteuser(doc.uid)
                            window.location.reload()
                        }}
                        >Excluir perfil</IonButton>
                    </IonCard>
                ))
                }

                <div id='buttonsContainer' >
                <IonButton
                onClick={()=>{
                    try {
                        keepInfo(history, '/perfil-adm')
                    } finally {
                        <Redirect to='/perfil-adm' />
                    }
                }}
                className='customButton'
                >voltar</IonButton>
                </div>

            </IonContent>
        </IonPage>
    );
};

export default listaPacientes;
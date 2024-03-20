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

const listaExamesPaciente: React.FC = () => {

    const history = useHistory<any>()
    
    const [exames, setExames] = useState<any[]>()
    const [msg, setMsg] = useState<string>('')

    useEffect(()=>{
       
        axios.get('http://localhost:3000/listexams', {
            params: {
                id: history.location.state.id
            }
        })
        .then(response => {
            if (response.data != 'none'){
                setExames(response.data)
            } else {
                setMsg('Você não possui exames agendados.')
            }
        })
        .catch(error => console.log(error));
               
    }, [])

    return (
        <IonPage>            
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Seus exames agendados.
                    </IonTitle>
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

                </IonCard>))
                }

                <br/>
                <IonButton
                onClick={()=>{
                    try {
                        keepInfo(history, '/perfil')
                    } finally {
                        <Redirect to='/perfil' />
                    }
                }}
                >voltar</IonButton>

            </IonContent>
            

        </IonPage>
    );
};

export default listaExamesPaciente;
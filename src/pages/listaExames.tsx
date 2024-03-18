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

import { keepInfo } from './perfilProfissional';

const listaExames: React.FC = () => {

    const history = useHistory<any>()

    const [paciente, setPaciente] = useState<string>()

    useEffect(()=>{
        if (history.location.state?.paciente)
            setPaciente(history.location.state.paciente)
    })

    return (
        <IonPage>            
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Exames de {paciente}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>EXAME 1</IonCardTitle>
                        <IonCardSubtitle>dr francisico</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>exame de sangue tal e tal.</IonCardContent>

                    <IonButton fill="clear" href='/exame'>Ver detalhes</IonButton>
                    <IonButton fill="clear">Action 2</IonButton>
                </IonCard>


                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>EXAME 2</IonCardTitle>
                        <IonCardSubtitle>dr juliana</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>exame de sangue tal e tal.</IonCardContent>

                    <IonButton fill="clear" href='/exame'>Ver detalhes</IonButton>
                    <IonButton fill="clear">Action 2</IonButton>
                </IonCard>

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
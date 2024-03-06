import {
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonAvatar, 
    IonButton 
} from '@ionic/react';

import React, { useState } from 'react';
import { Redirect } from 'react-router';

import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const perfilPaciente: React.FC = () => {

    const [logado, setLogado] = useState<boolean>(true);
    const [msg, setMsg] = useState<any>('a');

    

    const logout = () => {
        signOut(auth).then(() => {
            setLogado(false)
        }).catch((error) => {

        });
    }

    if (!logado){
        return <Redirect from='/perfil' to='/home' />
    }


    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonAvatar>
                            <img alt="Imagem do perfil"
                            src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                        <IonTitle>.................NOME COMPLETO</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    
                    <br/>
                    DADOS: <br/>
                    DADOS: <br/>
                    DADOS: <br/>
                    DADOS: <br/>
                    DADOS: <br/>
                    <IonButton color={'success'} href='/lista-exames'>Exames</IonButton>
                    <IonButton color={'danger'} onClick={logout}>Logout</IonButton>
                    <p>{msg}</p>
                    
                </IonContent>
            </IonPage>
        </>
    );
};

export default perfilPaciente;
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import { Redirect } from 'react-router';

import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const perfilProfissional: React.FC = () => {

    const [logado, setLogado] = useState<boolean>(true);

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
<<<<<<< HEAD
                <IonButton color={'success'}>Pacientes</IonButton>
                <IonButton color={'success'} href='/register'>Registrar Perfil</IonButton>
                <IonButton color={'danger'} onClick={logout}>Logout</IonButton>
=======
>>>>>>> fc34cf902a5c4b76093dfb8caa19d9615d29daf2
                
                <IonButton color={'success'} href='/lista-pacientes' >Pacientes</IonButton>
                <IonButton color={'success'} href='/registrar'>Registrar Perfil</IonButton>
                <IonButton color={'danger'} href='/'>Logout</IonButton>


            </IonContent>
        </IonPage>
    );
};

export default perfilProfissional;
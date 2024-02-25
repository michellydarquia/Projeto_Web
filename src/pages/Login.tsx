import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFooter,
    IonMenu,
    IonMenuButton,
    IonButtons,
    IonIcon,
    IonButton,
    IonTextarea
} from '@ionic/react';

import React, { useState } from 'react';

const Login: React.FC = () => {

    return (
        <>
            <IonPage id="main-content">

                <IonHeader>
                    <IonToolbar color={'success'}>
                        <IonTitle>Login</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent className="ion-padding">
                    <div
                        style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        }}
                    >
                        <IonTextarea
                            label="CPF"
                            labelPlacement="floating"
                            fill="outline"
                            placeholder="Enter text"
                            color={'success'}
                        ></IonTextarea>
                        <IonTextarea
                            label="Senha"
                            labelPlacement="floating"
                            fill="outline"
                            placeholder="Enter text"
                            color={'success'}
                        ></IonTextarea>
                        <IonButton>Login</IonButton>
                    </div>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Login;
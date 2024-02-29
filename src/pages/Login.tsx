import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonButton,
    IonInput
} from '@ionic/react';

import React, { useState, useEffect } from 'react';

const Login: React.FC = () => {
    
    const [CPF, setCPF] = useState<any>('');
    const [senha, setSenha] = useState<any>('');

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
                        <form>
                            <IonInput

                                type='text'
                                label="CPF"
                                labelPlacement="floating"
                                fill="outline"
                                placeholder="Enter text"
                                onIonChange={(e) => setCPF(e.target.value)}
                                color={'success'}
                                
                            ></IonInput>

                            <IonInput

                                type='password'
                                label="Senha"
                                labelPlacement="floating"
                                fill="outline"
                                placeholder="Enter text"
                                onIonChange={(e) => setSenha(e.target.value)}
                                color={'success'}

                            ></IonInput>
                            <IonButton>Login</IonButton>
                        </form>
                    </div>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Login;
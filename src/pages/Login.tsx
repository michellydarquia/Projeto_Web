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

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Redirect } from 'react-router';

const Login: React.FC = () => {
    
    const [email, setEmail] = useState<any>('');
    const [senha, setSenha] = useState<any>('');
    const [logado, setLogado] = useState<boolean>(true);

    const login = () => {
        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            const user = userCredential.user;
            setLogado(true);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMsg = error.message;
            console.log('ERRO:', errorCode, errorMsg)
        });
    }

    if (logado){
        return <Redirect from='/login' to='/perfil' />
    }

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
                            <IonInput class=""

                                type='text'
                                label="CPF"
                                labelPlacement="floating"
                                fill="outline"
                                placeholder="Digite seu CPF"
                                onIonChange={(e) => setEmail(e.target.value)}
                                color={'success'}
                                
                            ></IonInput>
                           
                           

                            <IonInput

                                type='password'
                                label="Senha"
                                labelPlacement="floating"
                                fill="outline"
                                placeholder="Digite sua senha"
                                onIonChange={(e) => setSenha(e.target.value)}
                                color={'success'}

                            ></IonInput>
                            <IonButton onClick={login}>Entrar</IonButton>
                        </form>
                    </div>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Login;
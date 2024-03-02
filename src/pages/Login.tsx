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

import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Redirect } from 'react-router';

const Login: React.FC = () => {
    
    const [email, setEmail] = useState<any>('');
    const [senha, setSenha] = useState<any>('');
    const [logado, setLogado] = useState<boolean>(false);
    const [msg, setMsg] = useState<any>('');

    const login = () => {
        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredencial) => {
            const user = userCredencial.user;
            setLogado(true);
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            setMsg('algo deu errado')
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
                            <IonInput

                                type='text'
                                label="CPF"
                                labelPlacement="floating"
                                fill="outline"
                                placeholder="Enter text"
                                onIonChange={(e) => setEmail(e.target.value)}
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
                            <IonButton onClick={login}>Login</IonButton>
                            <p>{msg}</p>
                        </form>
                    </div>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Login;
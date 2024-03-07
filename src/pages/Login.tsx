import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonInput,
    IonText,

} from '@ionic/react';

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Redirect } from 'react-router';
const Login: React.FC = () => {
    
    const [email, setEmail] = useState<any>('');
    const [senha, setSenha] = useState<any>('');
    const [logado, setLogado] = useState<boolean>(false);

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
            <IonPage id="main-content1">

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
                                className='ion-margin-top'
                                type='password'
                                label="Senha"
                                labelPlacement="floating"
                                fill="outline"
                                placeholder="Digite sua senha"
                                onIonChange={(e) => setSenha(e.target.value)}
                                color={'success'}
                                

                            ></IonInput>
                            <IonButton type="submit" expand='block' onClick={login} className='ion-padding-top'>Entrar</IonButton>
                            

                        </form>
                    </div>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Login;
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonInput,
    IonText,
    IonCard,
} from '@ionic/react';

import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';

import axios from 'axios'

import '../theme/login.css'

const Login: React.FC = () => {

    const history = useHistory<any>()
    
    const [email, setEmail] = useState<any>('');
    const [senha, setSenha] = useState<any>('');
    const [logado, setLogado] = useState<boolean>(true);

    useEffect(()=>{
        if (history.location.state.prof){
            setRedirect('/perfil-adm')
        }
    }, [])

    const login = () => {
        axios.get('http://localhost:3000/login',{
            params: { 
                email: email,
                senha: senha,
            }
        })
        .then(response => {

        try {
            setLogado(response.data.log)
            history.push({
                pathname: redirect,
                state: {
                    Dados: response.data.id
                }
            })
        } finally {
            return <Redirect to={redirect} />
        }
        
        })
        .catch(error => console.log(error))
    }

    return (
        <>
            <IonPage id="main-content">
            
                
                <IonHeader class='teste'>
                    <IonToolbar  id='loginTbar'>
                        <IonTitle id='titleTbar'>Acesso ao Resultado de Exames</IonTitle>
                    </IonToolbar>
                </IonHeader>                                 
              
                <IonContent id='contentLogin' className="ion-padding">
                    
                    <div
                        style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        }}
                    >
                        <IonCard id='loginCard'>
                        <IonText id='loginText'>
                            <h3 id='hLogin'>Login</h3>
                        </IonText>
                        <form>
                            <IonInput id='emailBtt'

                                type='text'
                                label="Email"
                                labelPlacement="floating"
                                fill="outline"
                                placeholder="Digite seu email"
                                onIonChange={(e) => setEmail(e.target.value)}
                                color={'success'}
                                
                            ></IonInput>
                           
                           

                            <IonInput id='senhaBtt'
                                className='ion-margin-top'
                                type='password'
                                label="Senha"
                                labelPlacement="floating"
                                fill="outline"
                                placeholder="Digite sua senha"
                                onIonChange={(e) => setSenha(e.target.value)}
                                color={'success'}
                                

                            ></IonInput>
                            <IonButton id='entrarBtt'
                            // type="submit" 
                            expand='block' 
                            shape='round'
                            onClick={login}
                            className='ion-padding-top'
                            >Entrar</IonButton>

                            <IonText className='ion-padding-top'>
                            <IonButton id='esqueciBtt'
                            fill="clear" 
                            href='/'
                            expand='block'
                            className='ion-padding-center'
                            >Esqueci minha senha</IonButton> 
                            </IonText>

                        </form>
                        </IonCard>
                        
                    </div>
                </IonContent>
           
            </IonPage>
        </>
    );
};

export default Login;
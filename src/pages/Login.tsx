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
    IonToast
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
    const [redirect, setRedirect] = useState<any>('/perfil');
    const [conta, setConta] = useState<any>('Paciente');
    const [msg, setMsg] = useState<any>('');

    const [undef, setUndef] = useState<boolean>(false);

    useEffect(()=>{
        if (history.location.state?.prof != undefined){
            if (history.location.state.prof){
                setRedirect('/perfil-adm')
                setConta('Profissional')
            }
        } else {
            setUndef(true)
        }
    }, [])

    if (undef) {
        return <Redirect to='/home' />
    }

    const login = () => {
        axios.get('http://localhost:3000/login',{
            params: { 
                email: email,
                senha: senha,
            }
        })
        .then(response => {

            if (typeof response.data === 'string'){
                setMsg('Usuário não identificado. ' + response.data)
                const a = document.getElementById('open-toast')
                a?.click()
                return
            }

            history.push({
                pathname: redirect,
                state: {
                    Dados: response.data.uData,
                    id: response.data.id
                }
            })

        })
        .catch(error => console.log(error))
    }

    return (
        <>
            <IonPage id="main-content">
            
                
                <IonHeader class='teste'>
                    <IonToolbar  id='loginTbar'>
                        {/* Acesso ao Resultado de Exames */}
                        <IonTitle id='titleTbar'>Login como {conta}</IonTitle>
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
                            
                            expand='block' 
                            shape='round'
                            onClick={login}
                            className='ion-padding-top'
                            >Entrar</IonButton>

                            <IonButton 
                            id='open-toast'
                            style={{ display: "none" }}
                            ></IonButton>
                            <IonToast trigger="open-toast" message={msg} duration={5000}></IonToast>

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
import {
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonAvatar, 
    IonButton,
    IonFooter
} from '@ionic/react'

import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router'
import { useHistory } from 'react-router-dom'

import axios from 'axios'

import '../theme/register_perfil.css'

const perfilPaciente: React.FC = () => {

    const history = useHistory<any>()

    const [logado, setLogado] = useState<boolean>(true)
    const [dados, setDados] = useState<any>({})

    setDados(history.location.state.data)

    useEffect(()=>{
        axios.get('http://localhost:3000/getinfo')
        .then(response => {
            setDados(response.data.Data)
        })
        .catch(error => console.log(error))

    }, [])

    const logout = () => {
        axios.get('http://localhost:3000/logout')
        .then(response => setLogado(response.data))
        .catch(error => console.log(error))
    }

    if (!logado){
        return <Redirect to='/home' />
    }

    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar id= 'perfilTbar'>
                        <IonAvatar>
                            <img alt="Imagem do perfil"
                            src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                        <IonTitle style={{ fontWeight: 'bold', fontFamily: 'Arial' }} className="ion-text-end">PERFIL PACIENTE</IonTitle>
                        <IonTitle>{dados.nome}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent  className="ion-padding">
                    <div className="dados-paciente">
                    <div id='dado'>
                        <h2>Dados  Pessoais</h2>
                    </div>
                    <br/>
                    Data de criação: {dados.data}<br/><br/>
                    E-mail: {dados.email}<br/><br/>
                    CPF: {dados.CPF}<br/><br/>
                    CEP: {dados.CEP}<br/><br/>
                    Endereço: {dados.endereco}<br/><br/>
                    Nome da mãe: {dados.nomeDaMae}<br/><br/>
                    RG: {dados.RG}<br/><br/>
                    Tipo da conta: {dados.conta}<br/><br/>
                    </div>
                </IonContent>
                <IonFooter className='ion-text-center'>
                    <IonButton color={'success'} href='/lista-exames'>Exames</IonButton>
                    <IonButton color={'danger'} onClick={logout}>Logout</IonButton>
                </IonFooter>

            </IonPage>
        </>
    );
};

export default perfilPaciente;





import {
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonAvatar, 
    IonButton, 
    IonIcon, 
    IonCardContent, 
    IonInput 
} from '@ionic/react'

import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router'
import { useHistory } from 'react-router-dom'

import axios from 'axios'

import { keepInfo } from './perfilProfissional'

import '../theme/register_perfil.css'

const perfilPaciente: React.FC = () => {

    const history = useHistory<any>()

    const [logado, setLogado] = useState<boolean>(true)
    const [dados, setDados] = useState<any>({})

    useEffect(()=>{
       
        setDados(history.location.state.Dados)

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
                        <IonTitle id ='titleTbar' slot="start" >PERFIL DO PACIENTE</IonTitle>
                        <IonButton slot="end" color="#8C1C13" onClick={logout}>SAIR</IonButton>
                        <IonTitle>{dados.nome}</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent  className="ion-padding">
                    <div className="dados-paciente">
                    <div id='dado'>
                        <h2>Dados  Pessoais</h2>
                    </div>
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
                <IonCardContent className="botao-container">
                <div className="ion-text-center button-container">
                <IonButton className='buttonPaciente' expand='block' shape='round'
                onClick={()=>keepInfo(history, '/lista-exames')}
                >Exames</IonButton>
                <IonButton className='buttonPaciente' expand='block' shape='round'>Marcar exames</IonButton>
                </div>
                </IonCardContent>

            </IonPage>
        </>
    );
};

export default perfilPaciente;





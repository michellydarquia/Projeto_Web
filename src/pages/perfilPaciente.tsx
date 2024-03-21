import {
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonAvatar, 
    IonButton, 
    IonCol,
    IonRow,
    IonGrid
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
        .then(() => setLogado(false))
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
                    </IonToolbar>
                </IonHeader>

                <IonContent id='contentPrinc' className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol size="4">
                            <div id="avatarContainer">
                            <IonAvatar style={{ width: '100px', height: '100px' }}
                            >
                                <img alt="Imagem do perfil" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                            </IonAvatar>
                            </div>
                        </IonCol>
                        <IonCol size="8">
                        {/* <div id="infoContainer"> */}
                            <div className="infoItemContainer">
                                <p className="infoItem"><strong>Nome completo:</strong> {dados.nome}</p>
                            </div>
                            <div className="infoItemContainer">
                                <p className="infoItem"><strong>Nome da mãe:</strong> {dados.nomeDaMae}</p>
                            </div>
                            <div className="infoItemContainer">
                                <p className="infoItem"><strong>E-mail:</strong> {dados.email}</p>
                            </div>
                            <div className="infoItemContainer">
                                <p className="infoItem"><strong>CPF:</strong> {dados.CPF}</p>
                            </div>
                            <div className="infoItemContainer">
                                <p className="infoItem"><strong>CEP:</strong> {dados.CEP}</p>
                            </div>
                            <div className="infoItemContainer">
                                <p className="infoItem"><strong>Endereço:</strong> {dados.endereco}</p>
                            </div>
                            <div className="infoItemContainer">
                                <p className="infoItem"><strong>RG:</strong> {dados.RG}</p>
                            </div>
                        {/* </div> */}
                        <IonRow>
                            <IonCol size="15">

                            <div id="buttonsContainer">
                            <IonButton className='customButton2' expand='block'
                            onClick={()=>keepInfo(history, '/lista-exames')}
                            >Exames</IonButton>
                            </div>

                            </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>              
                
            </IonPage>
        </>
    );
};

export default perfilPaciente;





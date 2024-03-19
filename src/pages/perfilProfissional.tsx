import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonAvatar, 
    IonButton, 
    IonGrid, 
    IonRow, 
    IonCol 
} from '@ionic/react';

import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import axios from 'axios';

import '../theme/PerfilProfissional.css';


export const keepInfo = (history: any, path: string) => {
    history.push({
        pathname: path,
        state: {
            Dados: history.location.state.Dados,
            id: history.location.state.id
        }
    })
}

const perfilProfissional: React.FC = () => {
    const history = useHistory<any>();
    const [logged, setLogged] = useState<boolean>(true);
    const [dados, setDados] = useState<any>({});

    useEffect(() => {
        if (history.location.state?.Dados != undefined){
            setDados(history.location.state.Dados);
        } else {
            setLogged(false)
        }
    }, []);

    const logout = () => {
        axios.get('http://localhost:3000/logout')
            .then(response => setLogged(false))
            .catch(error => console.log(error));
    }

    if (!logged) {
        return <Redirect to='/home' />;
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar id='loginTbar'>
                    <IonTitle id ='titleTbar'>{dados.nome}</IonTitle>
                    <IonTitle id ='titleTbar' slot="start" >PERFIL DO PROFISSIONAL</IonTitle>
                    <IonButton slot="end" color="#8C1C13" onClick={logout}>SAIR</IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent id='contentPrinc' className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol size="4">
                            <div id="avatarContainer">
                            <IonAvatar style={{ width: '200px', height: '200px' }}>
                                <img alt="Imagem do perfil" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                            </IonAvatar>
                            </div>
                        </IonCol>
                        <IonCol size="8">
                        <div id="infoContainer">
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
                        </div>
                        <IonRow>
                            <IonCol size="15">
                            <div id="buttonsContainer">
                                <IonButton className="customButton" 
                                    onClick={() => keepInfo(history, '/lista-pacientes')}
                                >Pacientes</IonButton>
                                <IonButton className="customButton" 
                                    onClick={() => keepInfo(history, '/registrar')}
                                >Registrar Perfil</IonButton>
                            </div>
                            </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default perfilProfissional;



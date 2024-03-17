import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import axios from 'axios';

import '../theme/PerfilProfissional.css'

const PerfilProfissional: React.FC = () => {
    const history = useHistory<any>();
    const [logado, setLogado] = useState<boolean>(true);
    const [dados, setDados] = useState<any>({});

    useEffect(() => {
        if (history.location.state.Dados) {
            setDados(history.location.state.Dados);
        }
    }, [history.location.state.Dados]);

    const logout = () => {
        axios.get('http://localhost:3000/logout')
            .then(response => setLogado(response.data))
            .catch(error => console.log(error));
    }

    if (!logado) {
        return <Redirect to='/home' />;
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{dados.nome}</IonTitle>
                    <IonButton slot="end" color="danger" onClick={logout}>Logout</IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol size="4">
                            <div id="avatarContainer">
                                <IonAvatar>
                                    <img alt="Imagem do perfil" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                                </IonAvatar>
                            </div>
                        </IonCol>
                        <IonCol size="8">
                            <div id="infoContainer">
                                <p className="infoItem"><strong>Nome da mãe:</strong> {dados.nomeDaMae}</p>
                                <p className="infoItem"><strong>E-mail:</strong> {dados.email}</p>
                                <p className="infoItem"><strong>CPF:</strong> {dados.CPF}</p>
                                <p className="infoItem"><strong>CEP:</strong> {dados.CEP}</p>
                                <p className="infoItem"><strong>Endereço:</strong> {dados.endereco}</p>
                                <p className="infoItem"><strong>RG:</strong> {dados.RG}</p>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                            <div id="buttonsContainer">
                                <IonButton color="success" href='/lista-pacientes'>Pacientes</IonButton>
                                <IonButton color="success" href='/registrar'>Registrar Perfil</IonButton>
                                <IonButton color="danger" onClick={() => {
                                    axios.get('http://localhost:3000/getdocs')
                                        .then(response => console.log('foi'))
                                        .catch(error => console.log(error));
                                }}>aaaaaa</IonButton>
                            </div>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default PerfilProfissional;

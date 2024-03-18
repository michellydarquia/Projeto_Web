import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import axios from 'axios';

import '../theme/PerfilProfissional.css';

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

                            <div id="descriptionContainer">
            <h2>    Descrição</h2>
            <p>Com anos de prática clínica e constante atualização em minha área de atuação, suporte necessário para a recuperação e manutenção da saúde.</p>
            <p>Especialidade: {dados.especialidade}</p>
            <p>Dias de Trabalho: {dados.diasDeTrabalho}</p>
            <p>Profissão: Médico</p>

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
                                <IonButton className="customButton" href='/lista-pacientes'>Pacientes</IonButton>
                                <IonButton className="customButton" href='/registrar'>Registrar Perfil</IonButton>
                                <IonButton className="customButton" onClick={() => {
                                axios.get('http://localhost:3000/getdocs').then(response => console.log('foi')).catch(error => console.log(error));
                                }}>aaaaaa</IonButton>
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

export default PerfilProfissional;

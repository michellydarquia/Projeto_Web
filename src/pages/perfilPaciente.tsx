import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonButton } from '@ionic/react';
import React from 'react';

const perfilPaciente: React.FC = () => {

    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonAvatar>
                            <img alt="Imagem do perfil"
                            src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                        <IonTitle>.................NOME COMPLETO</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    
                    <br/>
                    DADOS: <br/>
                    DADOS: <br/>
                    DADOS: <br/>
                    DADOS: <br/>
                    DADOS: <br/>
                    <IonButton color={'success'} href='/listaexames'>Exames</IonButton>
                    <IonButton color={'danger'} href='/'>Logout</IonButton>
                </IonContent>
            </IonPage>
        </>
    );
};

export default perfilPaciente;
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonButton,
} from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {

    return (
        <>

            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar color={'success'}>
                        <IonTitle>HOME</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonButton href='/login'>Login como paciente</IonButton>
                    <IonButton href='/login'>Login como profissional</IonButton>
                </IonContent>

            </IonPage>
        </>
    );
};

export default Home;
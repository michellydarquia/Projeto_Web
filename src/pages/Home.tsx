import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
} from '@ionic/react';
import React from 'react';
import '../theme/home_login.css';
import { Link } from 'react-router-dom'; 

const Home: React.FC = () => {


    return (
        <>
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar class="toolBar" color={'teste'}>
                        <IonTitle class="homeTitle">HOME</IonTitle>
          
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
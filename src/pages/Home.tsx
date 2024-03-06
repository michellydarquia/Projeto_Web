import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonButton,
    IonImg,
} from '@ionic/react';
import React from 'react';
import '../theme/home_login.css';
import schImg from '../imagens/sch.png';

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
                
                    <IonImg src={schImg}/>
                    <IonButton href='/login'>Login como paciente</IonButton>
                    <IonButton href='/login'>Login como profissional</IonButton>

                    <IonButton href='/registrar'>/registrar</IonButton>
                    <IonButton href='/lista-pacientes'>/lista-pacientes</IonButton>
                    <IonButton href='/lista-exames'>/lista-exames</IonButton>
                    <IonButton href='/exame'>/exame</IonButton>
                    <IonButton href='/perfil'>/perfil</IonButton>
                    <IonButton href='/perfil-adm'>/perfil-adm</IonButton>
                    <IonButton href='/paciente'>/paciente</IonButton>


                </IonContent>
               
               
                

            </IonPage>
        </>
    );
};

export default Home;
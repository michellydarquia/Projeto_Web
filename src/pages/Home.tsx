import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonButton,
    IonImg,
    IonTextarea,
    IonGrid,
    IonRow,
    IonCol,
} from '@ionic/react';
import React from 'react';
import '../theme/home_login.css';
import schImg from '../imagens/sch.png';

const Home: React.FC = () => {

    return (
        <>
        
            <IonPage id="main-content">
                <IonHeader>
                
                </IonHeader>
               

                <IonContent id='ImgBtt' className='ion-padding'>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <div className="container">
                                    <IonTitle>Acompanhe o resultado dos exames feitos</IonTitle>
                                    <div className='image-container'>
                                        <IonImg src={schImg} id="imagem" class='ion-float-right'/>

                                    </div>
                                </div>
               
                            </IonCol>
                            <IonCol>
                                 <div className='ion-text-right'>
                                        <IonButton href='/login' id="bttPac" className='button'>Login como paciente</IonButton>
                                        <IonButton href='/login' id="bttMed" className='button' >Login como profissional</IonButton>
                                
                                        <IonButton href='/registrar'>/registrar</IonButton>
                                        <IonButton href='/lista-pacientes'>/lista-pacientes</IonButton>
                                        <IonButton href='/lista-exames'>/lista-exames</IonButton>
                                        <IonButton href='/exame'>/exame</IonButton>
                                        <IonButton href='/perfil'>/perfil</IonButton>
                                        <IonButton href='/perfil-adm'>/perfil-adm</IonButton>
                                        <IonButton href='/paciente'>/paciente</IonButton>
                                        <IonButton href='/criar-exame'>/criar-exame</IonButton>

                                </div>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Home;
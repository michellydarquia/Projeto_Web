import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
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


import * as shared from '../shared'

const Home: React.FC = () => {


    return (
        <>
            <IonPage id="main-content">

                <IonContent id='ImgBtt' className='ion-padding'>
                    <IonGrid className='grid-container'>
                        <IonRow>
                            <IonCol class='colImg'>
                                <div className="container">
                                    <IonTitle id='introText'>Acompanhe o resultado dos exames feitos</IonTitle>
                                    <div className='image-container'>
                                        <IonImg src={schImg} id="imagem" class='ion-float-left'/>

                                    </div>
                                </div>
               
                            </IonCol>
                            <IonCol class='colBtt'>
                                <div id='buttons' className='ion-text-right'>
                                    <IonRow>
                                    <IonButton href='/login' id="bttPac" className='button'>Login como paciente</IonButton>

                                    </IonRow>
                                    <IonRow>
                                    <IonButton href='/login' id="bttMed" className='button' >Login como profissional</IonButton>

                                    </IonRow>
                                
                                   
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
/* <IonButton href='/registrar'>/registrar</IonButton> 
                                    <IonButton href='/lista-pacientes'>/lista-pacientes</IonButton>
                                    <IonButton href='/lista-exames'>/lista-exames</IonButton>
                                    <IonButton href='/exame'>/exame</IonButton>
                                    <IonButton href='/perfil'>/perfil</IonButton>
                                    <IonButton href='/perfil-adm'>/perfil-adm</IonButton>
                                    <IonButton href='/paciente'>/paciente</IonButton>
                                    <IonButton href='/criar-exame'>/criar-exame</IonButton> 
*/ 
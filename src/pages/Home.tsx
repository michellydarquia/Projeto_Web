import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFooter,
    IonMenu,
    IonMenuButton,
    IonButtons,
    IonIcon,
    IonButton,
    IonMenuToggle
} from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {

    return (
        <>
            <IonMenu type='reveal' contentId="main-content">
                <IonHeader>
                    <IonToolbar color={'success'}>
                        <IonTitle>Menu Content</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonButton color={'success'} expand='full' fill='clear' href='/login'>Login</IonButton>
                    <IonButton color={'success'} expand='full' fill='clear' href='/register'>Register</IonButton>
                </IonContent>
            </IonMenu>

            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar color={'success'}>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Page Title</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <div
                        style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        }}
                    >
                        HOME PAGE
                    </div>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Home;
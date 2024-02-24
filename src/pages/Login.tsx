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
    IonIcon
} from '@ionic/react';

import React, { useState } from 'react';

const Login: React.FC = () => {

    return (
        <>
            <IonMenu type='reveal' contentId="main-content">
                <IonHeader>
                    <IonToolbar color={'success'}>
                        <IonTitle>Menu Content</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    This is the menu content.
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
                        Login content.
                    </div>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Login;
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";

const listaPacientes: React.FC = () => {

    const getDocIDs = async () => {
        const alldocs = await getDocs(collection(firestore, "users"));
        alldocs.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Page Title</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                UI goes here...
            </IonContent>
        </IonPage>
    );
};

export default listaPacientes;
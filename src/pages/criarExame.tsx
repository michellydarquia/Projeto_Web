import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput } from '@ionic/react';
import React from 'react';

const criarExame: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Page Title</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">


            <IonInput

            label="Título"
            labelPlacement="floating"
            fill="outline"
            placeholder="Digite o título"
            // onIonChange={}
            color={'success'}

            ></IonInput>

            <IonInput

            label="Descrição"
            labelPlacement="floating"
            fill="outline"
            placeholder="Digite a Descrição"
            // onIonChange={}
            color={'success'}

            ></IonInput>




            </IonContent>
        </IonPage>
    );
};

export default criarExame;
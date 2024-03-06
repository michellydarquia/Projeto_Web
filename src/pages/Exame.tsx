import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React from 'react';

const Exames: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Page Title</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">

                <IonButton fill="clear" >BAIXAR RESULTADO DO EXAME</IonButton>

            </IonContent>
        </IonPage>
    );
};

export default Exames;
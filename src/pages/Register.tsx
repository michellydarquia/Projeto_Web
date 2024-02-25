import {
     
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonTextarea,
    IonButton,
    IonRadioGroup,
    IonRadio,
    IonItem
} from '@ionic/react';

import React from 'react';

const Register: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonTitle>Registrar</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonTextarea
                    label="Nome"
                    labelPlacement="floating"
                    fill="outline"
                    placeholder="Enter text"
                    color={'success'}
                ></IonTextarea>
                <IonTextarea
                    label="CPF"
                    labelPlacement="floating"
                    fill="outline"
                    placeholder="Enter text"
                    color={'success'}
                ></IonTextarea>
                <IonTextarea
                    label="CEP"
                    labelPlacement="floating"
                    fill="outline"
                    placeholder="Enter text"
                    color={'success'}
                ></IonTextarea>
                <IonTextarea
                    label="Endereço"
                    labelPlacement="floating"
                    fill="outline"
                    placeholder="Enter text"
                    color={'success'}
                ></IonTextarea>
                <IonTextarea
                    label="E-mail"
                    labelPlacement="floating"
                    fill="outline"
                    placeholder="Enter text"
                    color={'success'}
                ></IonTextarea>
                <IonTextarea
                    label="Nome da mãe"
                    labelPlacement="floating"
                    fill="outline"
                    placeholder="Enter text"
                    color={'success'}
                ></IonTextarea>
                <IonTextarea
                    label="RG"
                    labelPlacement="floating"
                    fill="outline"
                    placeholder="Enter text"
                    color={'success'}
                ></IonTextarea>
                <IonTextarea
                    label="Senha"
                    labelPlacement="floating"
                    fill="outline"
                    placeholder="Enter text"
                    color={'success'}
                ></IonTextarea>

                <IonRadioGroup>
                    <IonItem>
                        <IonRadio value="paciente">
                            <code>Paciente</code>
                        </IonRadio>
                    </IonItem>
                    <IonItem>
                        <IonRadio value="profissional">
                            <code>Profissional</code>
                        </IonRadio>
                    </IonItem>
                </IonRadioGroup>

                <IonButton>Registrar</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Register;
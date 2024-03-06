import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonButton } from '@ionic/react';
import React, {useState} from 'react';

const perfilPacienteProfissional: React.FC = () => {

    const [novoExame, setNovoExame] = useState<any>([]);
    
    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonAvatar>
                            <img alt="Imagem do perfil"
                            src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                        <IonTitle>.................NOME COMPLETO</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <br/>
                    DADOS: <br/>
                    DADOS: <br/>
                    DADOS: <br/>
                    DADOS: <br/>
                    DADOS: <br/>
                    <IonButton color={'success'}>Exames</IonButton>
                    <IonButton color={'success'}>Marcar exames</IonButton>
                </IonContent>
            </IonPage>
        </>
    );
};

export default perfilPacienteProfissional;
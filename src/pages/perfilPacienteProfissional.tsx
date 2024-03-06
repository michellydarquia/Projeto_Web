import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonButton, IonIcon, IonCardContent, IonInput } from '@ionic/react';
import { cloudUploadOutline } from 'ionicons/icons';

const PerfilPacienteProfissional: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setSelectedFile(files[0]);
        }
    }; // abrindo os meu arquivos opara escolher o arquivo a ser enviado

    const handleUpload = () => {
        // Lógica
        if (selectedFile) {
            // Lógica para onde o uploud vai
            console.log("Arquivo selecionado:", selectedFile.name);

        } else {
            console.log("Nenhum arquivo selecionado.");
        }
    };

    const [novoExame, setNovoExame] = useState<any>([]);
    
    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonAvatar>
                            <img alt="Imagem do perfil" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                        <IonTitle>.................NOME COMPLETO</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <br />
                    DADOS: <br />
                    DADOS: <br />
                    DADOS: <br />
                    DADOS: <br />
                    DADOS: <br />
                    <IonButton color={'success'}>Exames</IonButton>
                    <IonButton color={'success'}>Marcar exames</IonButton>

                    <IonCardContent>
                        <IonIcon icon={cloudUploadOutline} size="large" />
                        <IonInput type="file" onInput={handleFileChange} />
                        <IonButton onClick={handleUpload}>Enviar Arquivo</IonButton>
                    </IonCardContent>
                </IonContent>
            </IonPage>
        </>
    );
};

export default PerfilPacienteProfissional;


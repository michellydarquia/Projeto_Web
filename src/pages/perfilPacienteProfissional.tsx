import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonAvatar, 
    IonButton, 
    IonIcon, 
    IonCardContent, 
    IonInput 
} from '@ionic/react';
import React, { useState } from 'react';
import { cloudUploadOutline } from 'ionicons/icons';
import { storage } from "../firebase" 
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const PerfilPacienteProfissional: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: any) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setSelectedFile(files[0]);
        }
    };

    const handleUpload = async () => {
        if (selectedFile) {
            const storageRef = ref(storage, 'caminho/para/o/diretorio/' + selectedFile.name);
// local de armazenamento no firebase com caminho para o diretório junto ao nome do arquivo
           
            try {// tenta realizar o up do arv usando uploadBytes
                // uplo do arquivo
                await uploadBytes(storageRef, selectedFile);

                //  ter URL do arquivo após o upload (opcional)
                const downloadURL = await getDownloadURL(storageRef);

                console.log('Arquivo enviado com sucesso. URL:', downloadURL);
            } catch (error) {
                console.error('Erro ao enviar o arquivo:', error);
            }
        } else {
            console.log('Nenhum arquivo selecionado.');
        }
    };

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
<<<<<<< HEAD
                        <IonInput type='file' onInput={handleFileChange} />
=======
                        <input type="file" onChange={handleFileChange} />
>>>>>>> bf828daf91cb107f8d9792a3f6f4cb48bbfbf970
                        <IonButton onClick={handleUpload}>Enviar Arquivo</IonButton>
                    </IonCardContent>
                </IonContent>
            </IonPage>
        </>
    );
};

export default PerfilPacienteProfissional;

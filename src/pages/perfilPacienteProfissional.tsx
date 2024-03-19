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
import { storage, auth, firestore } from "../firebase" 
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import '../theme/register_perfil.css';

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

            try {
                await uploadBytes(storageRef, selectedFile);

                const downloadURL = await getDownloadURL(storageRef)

                onAuthStateChanged(auth, async (user) => {



                    if (user){
                        const dados = doc(firestore, "users", user.uid)
                        const info = await getDoc(dados);


                        if (info.exists()){

                        //OBS: lembrar de fazer copia do info.data().exame para 
                        //     alterar o url de um exame específico e não criar um novo
                            await updateDoc(doc(firestore, "users", user.uid), {

                                exames: {
                                    titulo: 'teste2',
                                    descricao: 'teste2',
                                    url: downloadURL
                                }
                            });
                        }
                    }
                });
                
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
                    <IonToolbar id='perfilTbar'>
                        <IonAvatar>
                            <img alt="Imagem do perfil" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                        <IonTitle className="ion-text-end">PERFIL</IonTitle>

                    </IonToolbar>
                </IonHeader>

                <IonContent className="ion-padding">
                    <div className="container-perfilpp">

                    <div className='dadosPP'>
                    <div id='dado'>
                    <h4>Dados  Pessoais</h4></div>
                    NOME: <br />
                    NOME DA MÃE: <br />
                    CPF: <br />
                    RG: <br />
                    CEP: <br />
                    ENDEREÇO: <br />
                    E-MAIL: <br />
                    </div>

                    <IonCardContent style={{ marginTop: '100px' }}>
                    <div className="ion-text-center" >

                    <IonButton href='/lista-exames' className='buttonExamePP' expand='block' shape='round'>Exames</IonButton>

                    <IonButton className='buttonExamePP' expand='block' shape='round'>Marcar exames</IonButton>

                    <div className="upload-container">
                    <IonIcon icon={cloudUploadOutline} size="large" />
                    <IonInput type='file' onInput={handleFileChange} />
                    </div>

                    <IonButton className='buttonExamePP' expand='block' shape='round' onClick={handleUpload}>Enviar Arquivo</IonButton>

                    </div>
                    </IonCardContent>
                    </div>
                </IonContent>
            </IonPage>
        </>
    );
};

export default PerfilPacienteProfissional;

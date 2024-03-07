import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { storage, auth, firestore } from "../firebase" 
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const Exames: React.FC = () => {


  const handleDownloadClick = async () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {

          const dados = doc(firestore, "users", user.uid)
          const info = await getDoc(dados);

          if (info.exists()) {


            // lógica
            const urlDoExame = info.data().exames[0].url;

            // Iniciar o download
            const link = document.createElement('a');
            link.href = urlDoExame;
            link.target = '_blank';
            link.download = 'nome_do_arquivo_do_exame';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

    
              info.data().exames
              console.log("DADOS:", info.data());

          }
      }
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
        <IonButton fill="clear" onClick={handleDownloadClick}>
          BAIXAR RESULTADO DO EXAME
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Exames;

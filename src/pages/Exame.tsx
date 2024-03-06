import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

const Exames: React.FC = () => {
  const handleDownloadClick = () => {
    // lógica
    const urlDoExame = 'URL_DO_EXAME_AQUI';

    // Iniciar o download
    const link = document.createElement('a');
    link.href = urlDoExame;
    link.target = '_blank';
    link.download = 'nome_do_arquivo_do_exame';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

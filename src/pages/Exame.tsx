import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

const Exames: React.FC = () => {
  const handleDownloadClick = async () => {
    try {
      const urlDoExame = 'https://firebasestorage.googleapis.com/v0/b/exames-9598c.appspot.com/o/caminho%2Fpara%2Fo%2Fdiretorio%2F2019%201%20BM%202EE%20VG%20RUAS%20-%20RESPOSTA.pdf?alt=media&token=31cd7515-8146-4940-8f77-d151f9341d93';

      const link: HTMLAnchorElement = document.createElement('a');
      link.href = urlDoExame;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.type = 'application/pdf'

      // Verificar se o navegador suporta o atributo 'download'
      if ('download' in link) {
        link.download = 'nome_do_arquivo_do_exame';
      } else {
        // Se não suporta, abra o link em uma nova janela
        link.target = '_blank';
      }

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Erro ao fazer o download:', error.message);
    }
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

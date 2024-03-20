import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonButton,
    IonInput,
    IonText,
    IonNavLink,
    IonNav
} from '@ionic/react';
import { useState } from 'react';

const AddExamePage: React.FC = () => {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [tipo, setTipo] = useState('');
  
    const handleSubmit = () => {
        if (nome !== undefined && nome !== null) {
        
          console.log('Dados do exame:', { nome, data, tipo });
        }
      };
      
  
    return (
      <IonPage>
        <IonContent>
          <IonInput
            placeholder="Nome do exame"
            value={nome}
            onIonChange={(e: CustomEvent) => {
                const value = e.detail.value;
                if (typeof value === 'string') {
                  setNome(value);
                }
              }}
              
          />
          <IonInput
            type="date"
            placeholder="Data do exame"
            value={data}
            onIonChange={(e: CustomEvent) => {
                const value = e.detail.value;
                if (typeof value === 'string') {
                  setData(value);
                }
              }}
              
          />
          <IonInput
            placeholder="Tipo do exame"
            value={tipo}
            onIonChange={(e: CustomEvent) => {
                const value = e.detail.value;
                if (typeof value === 'string') {
                  setTipo(value);
                }
              }}
              
          />
          <IonButton onClick={handleSubmit}>Adicionar Exame</IonButton>
        </IonContent>
      </IonPage>
    );
  };
  
  export default AddExamePage;
import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton, IonHeader, IonToolbar, IonTitle, IonText } from '@ionic/react';

const AddExamePage = () => {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [tipo, setTipo] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = () => {
    const errors: { [key: string]: string } = {};
    if (!nome.trim()) {
      errors.nome = 'O nome do exame é obrigatório';
    }
    if (!data.trim()) {
      errors.data = 'A data do exame é obrigatória';
    }
    if (!tipo.trim()) {
      errors.tipo = 'O tipo do exame é obrigatório';
    }

   
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    
    console.log('Dados do exame:', { nome, data, tipo });

    
    setNome('');
    setData('');
    setTipo('');
    setErrors({});
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Adicionar Exame</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {Object.keys(errors).length > 0 && (
          <IonText color="danger">
            {Object.values(errors).map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </IonText>
        )}
        <IonInput
          placeholder="Nome do exame"
          value={nome}
          onIonChange={(e) => setNome(e.detail.value || '')}
        />
        <IonInput
          type="date"
          placeholder="Data do exame"
          value={data}
          onIonChange={(e) => setData(e.detail.value || '')}
        />
        <IonInput
          placeholder="Tipo do exame"
          value={tipo}
          onIonChange={(e) => setTipo(e.detail.value || '')}
        />
        <IonButton onClick={handleSubmit}>Adicionar Exame</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AddExamePage;

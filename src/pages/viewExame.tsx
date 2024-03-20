import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';

// Defina a interface Exame aqui
interface Exame {
  id: number;
  nome: string;
  data: Date;
  tipo: string;
}

const VisualizarExamesPage = () => {
    const [exames, setExames] = useState<Exame[]>([]);
  
    useEffect(() => {
      // Simulação de uma chamada para o servidor para obter os exames
      const fetchExames = async () => {
        // Aqui você faria a chamada real para o backend para obter os exames
        // Por enquanto, vamos simular alguns dados de exemplo
        const response = await fetch('https://api.example.com/exames');
        const data = await response.json();
        setExames(data);
      };
  
      fetchExames();
    }, []);
  
    return (
      <IonPage>
        <IonContent>
          {exames.length === 0 ? (
            <p>Nenhum exame disponível.</p>
          ) : (
            <IonList>
              {exames.map((exame) => (
                <IonItem key={exame.id}>
                  <IonLabel>
                    <h2>{exame.nome}</h2>
                    <p>Data: {exame.data.toLocaleDateString()}</p>
                    <p>Tipo: {exame.tipo}</p>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
          )}
          <IonButton onClick={() => window.location.reload()}>Recarregar</IonButton>
        </IonContent>
      </IonPage>
    );
  };
  
  export default VisualizarExamesPage;

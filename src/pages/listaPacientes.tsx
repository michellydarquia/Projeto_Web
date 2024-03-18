import { 
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton
} from '@ionic/react';

import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import { keepInfo } from './perfilProfissional';

const listaPacientes: React.FC = () => {

    const history = useHistory<any>()

    const [alldocs, setAlldocs] = useState<any[]>([]);

    useEffect(() => {
       
        axios.get('http://localhost:3000/getdocs', {
            params: {
                email: history.location.state.Dados.email
            }
        })
        .then(response => setAlldocs(response.data))
        .catch(error => console.log(error));
    
    },[])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Pacientes</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
          
                {
                alldocs.map((doc, index) => (
                    
                    <IonCard key={doc.email}>
                        <IonCardHeader>
                            <IonCardTitle>{index+1} - {doc.nome}</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                        Data de criação: {doc.data}<br/>
                        E-mail: {doc.email}<br/>
                        CPF: {doc.CPF}<br/>
                        CEP: {doc.CEP}<br/>
                        Endereço: {doc.endereco}<br/>
                        Nome da mãe: {doc.nomeDaMae}<br/>
                        RG: {doc.RG}<br/>
                        Tipo da conta: {doc.conta}<br/>
                        </IonCardContent>

                        <IonButton fill="clear" 
                        onClick={()=>{
                            try{
                                history.push({
                                pathname: '/lista-exames',
                                state: {
                                    Dados: history.location.state.Dados,
                                    paciente: doc.nome
                                }
                                })
                            } finally {
                                <Redirect to='/lista-exames' />
                            }
                        }}>Ver exames</IonButton>
                        <IonButton fill="clear" color='danger'>Excluir perfil</IonButton>
                    </IonCard>
                ))
                }

                <IonButton
                onClick={()=>{
                    try {
                        keepInfo(history, '/perfil-adm')
                    } finally {
                        <Redirect to='/perfil-adm' />
                    }
                }}
                >voltar</IonButton>

            </IonContent>
        </IonPage>
    );
};

export default listaPacientes;
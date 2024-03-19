import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonInput, 
    IonButton,
    IonDatetime
} from '@ionic/react';

import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import axios from 'axios';

const criarExame: React.FC = () => {

    const history = useHistory<any>()

    const [title, setTitle] = useState<string | number | null | undefined>()
    const [desc, setDesc] = useState<string | number | null | undefined>()
    const [dia, setDia] = useState<string | number | null | undefined>()
    const [hour, setHour] = useState<string | number | null | undefined>()
    const [paciente, setPaciente] = useState<string>(history.location.state.paciente.nome)


    const createExam = () => {

        const day = new Date()

        try {
            axios.get('http://localhost:3000/createexam', {
                params: {
                    id: history.location.state.paciente.Id,
                    exam: {
                        title: title,
                        desc: desc,
                        created: day.toLocaleDateString('pt-br'),
                        day: dia,
                        hour: hour
                    }
                }
            })
            .then(response => {
                console.log(response.data)
                history.push({
                    pathname: '/lista-exames-adm',
                    state: {
                        Dados: history.location.state.Dados,
                        id: history.location.state.id,
                        paciente: {
                            nome: paciente,
                            Id: history.location.state.paciente.Id
                        }
                    }
                })
            })
            .catch(error => console.log(error));
        } finally {
            return <Redirect to='/lista-exames-adm' />
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Adicionar exame para {paciente}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">


            <IonInput

            label="Título"
            labelPlacement="floating"
            fill="outline"
            placeholder="Título do exame"
            onIonChange={(e) => setTitle(e.target.value)}
            color={'success'}

            ></IonInput>

            <IonInput

            label="Descrição"
            labelPlacement="floating"
            fill="outline"
            placeholder="Descrição do exame"
            onIonChange={(e) => setDesc(e.target.value)}
            color={'success'}

            ></IonInput>

            <IonDatetime
                onIonChange={(e) => {
                    if (typeof e.target.value === 'string'){
                        setDia(e.target.value
                                .split('T')[0]
                                .split('-')
                                .reverse()
                                .join('/'))

                        setHour(e.target.value
                                .split('T')[1]
                                .split(':')
                                .splice(0,2)
                                .join(':'))
                    }
                }}
                >
                <span slot="title">Data e horário de realização do exame</span>
            </IonDatetime>

            <IonButton
            onClick={createExam}
            >Criar</IonButton>


            </IonContent>
        </IonPage>
    );
};

export default criarExame;
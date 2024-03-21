import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonInput, 
    IonButton,
    IonDatetime,
    IonGrid,
    IonRow,
    IonCol,
    IonToast
} from '@ionic/react';

import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import axios from 'axios';

import '../theme/register_perfil.css';
import '../theme/login.css';

const criarExame: React.FC = () => {

    const history = useHistory<any>()

    const [title, setTitle] = useState<any>('')
    const [desc, setDesc] = useState<any>('')
    const [dia, setDia] = useState<any>('')
    const [hour, setHour] = useState<any>('')
    const [paciente, setPaciente] = useState<string>(history.location.state.paciente.nome)
    const [msg, setMsg] = useState<string>('')

    const toast = document.getElementById('open-toast')

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
            .then(() => {
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

    const checkAllInputs = () => {
        if (title != '' &&
            desc != '' &&
            dia != '' &&
            hour != '')
            {
                createExam()
            } else {
                setMsg('Preencha todos os campos.')
                toast?.click()  
            }
        return
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar id='mainTbar'>
                    <IonTitle>Adicionar exame para {paciente}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent id='contentPrinc' className="ion-padding">

            <div>
            <IonGrid className='grid-container'>
            <IonRow>
                <IonCol className="ion-align-items-center">
                <div className='ion-text-center'>
                    <div className='dados-register'>

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

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <IonDatetime
                        style={{ borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.34)' }}
                        color='tertiary'
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
                        </div>

                        <IonButton 
                        id='open-toast'
                        style={{ display: "none" }}
                        ></IonButton>
                        <IonToast trigger="open-toast" message={msg} duration={5000}></IonToast>

                        <IonButton
                        color='tertiary'
                        onClick={checkAllInputs}
                        >Criar</IonButton>

                        <IonButton
                        color='tertiary'
                        onClick={()=>{
                            history.push({
                                pathname: '/lista-exames-adm',
                                state: {
                                    Dados: history.location.state.Dados,
                                    paciente: {
                                        nome: paciente,
                                        Id: history.location.state.paciente.Id
                                    }
                                }
                            })
                            history.go(0)
                        }}
                        >Voltar</IonButton>
                    </div>
                </div>
                </IonCol>
                </IonRow>
            </IonGrid>
            </div>
            </IonContent>
        </IonPage>
    );
};

export default criarExame;
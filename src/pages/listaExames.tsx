import { 
    IonContent, 
    IonHeader,
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonCardContent, 
    IonButton,
    IonInput
} from '@ionic/react';
import React, {useEffect, useState} from 'react';
import {useHistory, Redirect} from 'react-router-dom';

import axios from 'axios';

import { keepInfo } from './perfilProfissional';

const listaExames: React.FC = () => {

    const history = useHistory<any>()
    
    const [paciente, setPaciente] = useState<string>()
    const [exames, setExames] = useState<any[]>()
    const [resultado, setResultado] = useState<any[]>()
    const [msg, setMsg] = useState<string>('')

    let indexParaInput: number

    useEffect(()=>{
        
            try {
                
                setPaciente(history.location.state.paciente.nome)
                
            } finally {
                
                axios.get('http://localhost:3000/listexams', {
                    params: {
                        id: history.location.state.paciente.Id
                    }
                })
                .then(response => {
                    if (response.data[0][0] != 'none'){
                        setExames(response.data[0])
                        setResultado(response.data[1])
                    } else {
                        setMsg('Este paciente não possui exames agendados.')
                    }
                })
                .catch(error => console.log(error));
               
            }
            
    }, [])

    const uploadFile = () => {
        (document as any).getElementById("file-upload").click();
    };

    const addResult = async (file: any, id: string, index: number) => {

        const formData = new FormData();
        formData.append("file", file);
        console.log(file);
    
        const result = await axios.post(
          "http://localhost:3000/addresult",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
            params: {id: id, index: index}
          }
        );
        console.log(result.data)
    }

    const isAvailable = (index: number) => {
        if(resultado && resultado[index] == 'Disponível'){
            return true
        }else{
            return false
        }
    }

    
    return (
        <IonPage>            
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Exames de {paciente}
                    </IonTitle>
                    <IonButton fill="clear" color='success'
                    onClick={()=>{
                        history.push({
                            pathname: '/criar-exame',
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
                    >Adicionar exame</IonButton>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">

                {msg}

                {
                exames?.map((info, index) =>(
                <IonCard key={indexParaInput = index}>
                    <IonCardHeader>
                        <IonCardTitle>{info.exame.title}</IonCardTitle>
                        <IonCardSubtitle>Realização: {info.exame.day} {info.exame.hour}</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        Descrição: {info.exame.desc}<br/><br/>
                        Resultado: {resultado ? resultado[index] : ''}
                    </IonCardContent>

                    <input
                    type="file"
                    id="file-upload"
                    onChange={(e) => {

                        if (e.target.files){
                            addResult(e.target.files[0], history.location.state.paciente.Id, indexParaInput+1)
                        }

                    }}
                    style={{ display: "none" }}
                    />

                    <IonButton type='submit' fill="clear"
                    disabled={isAvailable(index)}
                    onClick={uploadFile}
                    >Inserir pdf do resultado</IonButton>

                    <IonButton fill="clear" color='danger'
                    onClick={()=>{
                        axios.get('http://localhost:3000/deleteexam', {
                            params: {
                                id: history.location.state.paciente.Id,
                                index: info.index
                            }
                        })
                        .then(()=>history.go(0))
                        .catch(error => console.log(error));
                    }}
                    >Excluir exame</IonButton>

                </IonCard>))
                }


                <br/>
                <IonButton
                onClick={()=>{
                    try {
                        keepInfo(history, '/lista-pacientes')
                        history.go(0)
                    } finally {
                        <Redirect to='/lista-pacientes' />
                    }
                }}
                >voltar</IonButton>

            </IonContent>
            

        </IonPage>
    );
};

export default listaExames;
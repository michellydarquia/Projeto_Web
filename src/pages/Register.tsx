import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonRadio,
    IonRadioGroup,
    IonLabel,
    IonInput,
    IonItem,
} from '@ionic/react';

import { useState } from 'react';
import { Redirect } from 'react-router'
import { useHistory } from 'react-router-dom'

import '../theme/register_perfil.css';

import axios from 'axios';

import { keepInfo } from './perfilProfissional';

const Register: React.FC = () => {

    const history = useHistory<any>()

    const [CPF, setCPF] = useState<any>('');
    const [senha, setSenha] = useState<any>('');
    const [nome, setNome] = useState<any>('');
    const [CEP, setCEP] = useState<any>('');
    const [endereco, setEndereco] = useState<any>('');
    const [email, setEmail] = useState<any>('');
    const [nomemae, setNomeMae] = useState<any>('');
    const [RG, setRG] = useState<any>('');
    const [conta, setConta] = useState<any>('paciente');
 
    const registrar = () => {

        const data = new Date()

        axios.get('http://localhost:3000/registrar',{
            params: {
                uData: {
                    nome: nome,
                    CPF: CPF,
                    CEP: CEP,
                    endereco: endereco,
                    nomeDaMae: nomemae,
                    RG: RG,
                    email: email,
                    conta: conta,
                    data: data.toLocaleDateString('pt-br')
                },
                senha: senha
            }
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    return (
        <>
            <IonPage id="main-content">
                <IonHeader>
                <div className="container-title">
                <IonRow>
                <IonCol>
                    <IonTitle> Cadastro </IonTitle>
               </IonCol>
               </IonRow>
               </div>

                </IonHeader>
               
                <IonContent className='ion-padding'>
                    
                    <div className="form-container">

                    <IonGrid className='grid-container'>
                    <IonRow>
                        <IonCol className="ion-align-items-center">
                        <div className='ion-text-center'>
                            <div className='dados-register'>

                            <div id='txt-register'><IonLabel position="floating">Informe os dados:</IonLabel></div>
                            <br />

                            <IonLabel position="floating">Nome</IonLabel>
                            <IonInput
                                type="text"
                                color='success'
                                value={nome}
                                onIonChange={(e) => setNome(e.target.value)}
                                placeholder="Digite aqui"
                                fill="outline"
                            />

                            <IonLabel position="floating">CPF</IonLabel>
                            <IonInput
                                type="text"
                                color='success'
                                value={CPF}
                                onIonChange={(e) => setCPF(e.target.value)}
                                placeholder="Digite aqui"
                                fill="outline"
                            />
                            
                            <IonLabel position="floating">CEP</IonLabel>
                            <IonInput
                                type="text"
                                color='success'
                                value={CEP}
                                onIonChange={(e) => setCEP(e.target.value)}
                                placeholder="Digite aqui"
                                fill="outline"
                            />

                            <IonLabel position="floating">Endereço</IonLabel>
                            <IonInput
                                type="text"
                                color='success'
                                value={endereco}
                                onIonChange={(e) => setEndereco(e.target.value)}
                                placeholder="Digite aqui"
                                fill="outline"
                            />

                            <IonLabel position="floating">E-mail</IonLabel>
                            <IonInput
                                type="email"
                                color='success'
                                value={email}
                                onIonChange={(e) => setEmail(e.target.value)}
                                placeholder="Digite aqui"
                                fill="outline"
                            />

                            <IonLabel position="floating">Nome da Mãe</IonLabel>
                            <IonInput
                                type="text"
                                color='success'
                                value={nomemae}
                                onIonChange={(e) => setNomeMae(e.target.value)}
                                placeholder="Digite aqui"
                                fill="outline"
                            />

                            <IonLabel position="floating">RG</IonLabel>
                            <IonInput
                                type="text"
                                color='success'
                                value={RG}
                                onIonChange={(e) => setRG(e.target.value)}
                                placeholder="Digite aqui"
                                fill="outline"
                            />
                            <IonLabel position="floating">Senha</IonLabel>
                            <IonInput
                                type="password"
                                color='success'
                                value={senha}
                                onIonChange={(e) => setSenha(e.target.value)}
                                placeholder="Digite aqui"
                                fill="outline"
                            /> 

                            <IonRadioGroup value={conta} onIonChange={(e) => setConta(e.detail.value)}>
                                <IonItem>
                                    <IonRadio value='paciente'>
                                        <code>Paciente</code>
                                    </IonRadio>
                                </IonItem>
                                <IonItem>
                                    <IonRadio value='profissional'>
                                        <code>Profissional</code>
                                    </IonRadio>
                                </IonItem>
                            </IonRadioGroup>

       
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <IonButton
                            className='buttonRegister' 
                            expand='block' 
                            shape='round'
                            onClick={registrar}>Registrar</IonButton>

                            <IonButton 
                            className='buttonRegister' 
                            expand='block' 
                            shape='round'
                            onClick={()=>{                 
                                try{
                                    keepInfo(history, '/perfil-adm')
                                }finally{
                                    <Redirect to='/perfil-adm' />
                                }
                            }}>Voltar
                            </IonButton>
                            </div>
                            </div>

                        </div>
                        </IonCol>
                        </IonRow>
                    </IonGrid>
                    </div>
            </IonContent>
        </IonPage>
    </>
);
};
export default Register;
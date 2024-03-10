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

import { useState, useEffect } from 'react';

import '../theme/register_perfil.css';

import axios from 'axios';

const Register: React.FC = () => {

    const [CPF, setCPF] = useState<any>('');
    const [senha, setSenha] = useState<any>('');
    const [nome, setNome] = useState<any>('');
    const [CEP, setCEP] = useState<any>('');
    const [endereco, setEndereco] = useState<any>('');
    const [email, setEmail] = useState<any>('');
    const [nomemae, setNomeMae] = useState<any>('');
    const [RG, setRG] = useState<any>('');
    const [conta, setConta] = useState<any>('paciente');
    const [lightDark, setLightDark] = useState<any>('')

    useEffect(() => {

        if (window.matchMedia('(prefers-color-scheme: dark)').matches){
            setLightDark('light')
        } else {
            setLightDark('dark')
        }
        
    }, []);
 
    const registrar = () => {
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
                    senha: senha
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
                <IonRow>
                <IonCol>
                <div className="container">
                    <IonTitle> Cadastro </IonTitle>
                </div>
               </IonCol>
               </IonRow>

                </IonHeader>
               
                <IonContent className='ion-padding'>
                    <div className="form-container">
                    <IonGrid className='grid-container'>
                    <IonRow>
                        <IonCol size="12" size-md="3" offsetMd="5" className="ion-align-items-center">
                        <div className='ion-text-center'>


                            <IonLabel color={lightDark} position="floating">Nome</IonLabel>
                            <IonInput
                                type="text"
                                value={nome}
                                onIonChange={(e) => setNome(e.target.value)}
                                placeholder="Digite aqui"
                                color="success"
                                fill="outline"
                            />

                            <IonLabel color={lightDark} position="floating">CPF</IonLabel>
                            <IonInput
                                type="text"
                                value={CPF}
                                onIonChange={(e) => setCPF(e.target.value)}
                                placeholder="Digite aqui"
                                color="success"
                                fill="outline"
                            />
                            
                            <IonLabel color={lightDark} position="floating">CEP</IonLabel>
                            <IonInput
                                type="text"
                                value={CEP}
                                onIonChange={(e) => setCEP(e.target.value)}
                                placeholder="Digite aqui"
                                color="success"
                                fill="outline"
                            />

                            <IonLabel color={lightDark} position="floating">Endereço</IonLabel>
                            <IonInput
                                type="text"
                                value={endereco}
                                onIonChange={(e) => setEndereco(e.target.value)}
                                placeholder="Digite aqui"
                                color="success"
                                fill="outline"
                            />

                            <IonLabel color={lightDark} position="floating">E-mail</IonLabel>
                            <IonInput
                                type="email"
                                value={email}
                                onIonChange={(e) => setEmail(e.target.value)}
                                placeholder="Digite aqui"
                                color="success"
                                fill="outline"
                            />

                            <IonLabel color={lightDark} position="floating">Nome da Mãe</IonLabel>
                            <IonInput
                                type="text"
                                value={nomemae}
                                onIonChange={(e) => setNomeMae(e.target.value)}
                                placeholder="Digite aqui"
                                color="success"
                                fill="outline"
                            />

                            <IonLabel color={lightDark} position="floating">RG</IonLabel>
                            <IonInput
                                type="text"
                                value={RG}
                                onIonChange={(e) => setRG(e.target.value)}
                                placeholder="Digite aqui"
                                color="success"
                                fill="outline"
                            />
                            <IonLabel color={lightDark} position="floating">Senha</IonLabel>
                            <IonInput
                                type="password"
                                value={senha}
                                onIonChange={(e) => setSenha(e.target.value)}
                                placeholder="Digite aqui"
                                color="success"
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

                            <IonButton onClick={registrar}>Registrar</IonButton>

                            <IonButton color={'danger'} href='/perfil-adm'>Voltar</IonButton>
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
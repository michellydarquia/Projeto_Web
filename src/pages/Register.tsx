import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton,
    IonRadioGroup,
    IonRadio,
    IonItem
} from '@ionic/react';

import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register: React.FC = () => {

    const [CPF, setCPF] = useState<any>('');
    const [senha, setSenha] = useState<any>('');
    const [nome, setNome] = useState<any>('');
    const [CEP, setCEP] = useState<any>('');
    const [endereco, setEndereco] = useState<any>('');
    const [email, setEmail] = useState<any>('');
    const [nomemae, setNomeMae] = useState<any>('');
    const [RG, setRG] = useState<any>('');

    const [msg, setMsg] = useState<any>('a');

    

    const registrar = () => {

        createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredencial) => {
            const user = userCredencial.user;
            setMsg('Registrado')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setMsg('erro')
        });

    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonTitle>Registrar</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <div
                    style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    }}
                >
                    <form>

                    {/* <IonInput
                        label="CPF"
                        labelPlacement="floating"
                        fill="outline"
                        placeholder="Enter text"
                        color={'success'}
                        onIonChange={(e) => setCPF(e.target.value)}

                    ></IonInput>

                    <IonInput
                        label="Nome"
                        labelPlacement="floating"
                        fill="outline"
                        placeholder="Enter text"
                        color={'success'}
                        onIonChange={(e) => setNome(e.target.value)}

                    ></IonInput>

                    <IonInput
                        label="CEP"
                        labelPlacement="floating"
                        fill="outline"
                        placeholder="Enter text"
                        color={'success'}
                        onIonChange={(e) => setCEP(e.target.value)}

                    ></IonInput>

                    <IonInput
                        label="Endereço"
                        labelPlacement="floating"
                        fill="outline"
                        placeholder="Enter text"
                        color={'success'}
                        onIonChange={(e) => setEndereco(e.target.value)}

                    ></IonInput> */}

                    <IonInput
                        label="E-mail"
                        labelPlacement="floating"
                        fill="outline"
                        placeholder="Enter text"
                        color={'success'}
                        onIonChange={(e) => setEmail(e.target.value)}

                    ></IonInput>

                    {/* <IonInput
                        label="Nome da mãe"
                        labelPlacement="floating"
                        fill="outline"
                        placeholder="Enter text"
                        color={'success'}
                        onIonChange={(e) => setNomeMae(e.target.value)}
                        
                    ></IonInput>

                    <IonInput
                        label="RG"
                        labelPlacement="floating"
                        fill="outline"
                        placeholder="Enter text"
                        color={'success'}
                        onIonChange={(e) => setRG(e.target.value)}
                    ></IonInput> */}

                    <IonInput
                        type='password'
                        label="Senha"
                        labelPlacement="floating"
                        fill="outline"
                        placeholder="Enter text"
                        color={'success'}
                        onIonChange={(e) => setSenha(e.target.value)}
                    ></IonInput>

                    <IonRadioGroup>
                        <IonItem>
                            <IonRadio value="paciente">
                                <code>Paciente</code>
                            </IonRadio>
                        </IonItem>
                        <IonItem>
                            <IonRadio value="profissional">
                                <code>Profissional</code>
                            </IonRadio>
                        </IonItem>
                    </IonRadioGroup>

                    <IonButton onClick={registrar}>Registrar</IonButton>
                    <p>{msg}</p>
                    </form>
                </div>


                
            </IonContent>
        </IonPage>
    );
};

export default Register;
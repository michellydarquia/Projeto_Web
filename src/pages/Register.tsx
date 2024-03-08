import { useState } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonImg,
    IonTextarea,
    IonGrid,
    IonRow,
    IonCol,
    IonRadio,
    IonRadioGroup,
    IonLabel,
    IonInput,
    IonItem,
} from '@ionic/react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../firebase";
import { setDoc, doc } from 'firebase/firestore';
import '../theme/register_perfil.css';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

//<{ onUserRegistered: (userData: any) => void }>
//{ onUserRegistered }

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
    const [redirect, setRedirect] = useState<boolean>(false);

    const addDados = async (user: any) => {
        try {
            const docRef = {
              nome: nome,
              CPF: CPF,
              CEP: CEP,
              endereco: endereco,
              nomeDaMae: nomemae,
              RG: RG,
              email: email,
              conta: conta,
              exames: []
            };
            await setDoc(doc(firestore, "users", user.uid), docRef);
            //onUserRegistered(docRef);

        } catch (e) {
            console.error("Erro: ", e);
        }
    }
 
    const registrar = () => {

        createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            const user = userCredential.user;
            addDados(user)
            console.log('Registrado')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMsg = error.message;
            console.log('Erro: ', errorCode, errorMsg)
        });
    }



    // const handleRegistrarClick = () => {
    //     registrar()
    //         .then((user) => {
    //             onUserRegistered(user);
  
    //             setRedirect(true);
    //         })
    //         .catch((error) => {
    //             console.error("Erro ao registrar:", error);

    //         });
    // };

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


                            <IonLabel position="floating">Nome</IonLabel>
                            <IonInput
                                type="text"
                                value={nome}
                                onIonChange={(e) => setNome(e.target.value)}
                                placeholder="Digite aqui"
                                color="success"
                                fill="outline"
                            />

                            <IonLabel position="floating">CPF</IonLabel>
                            <IonInput
                                type="text"
                                value={CPF}
                                onIonChange={(e) => setCPF(e.target.value)}
                                placeholder="Digite aqui"
                                color="success"
                                fill="outline"
                            />
                            
                            <IonLabel position="floating">CEP</IonLabel>
                            <IonInput
                                type="text"
                                value={CEP}
                                onIonChange={(e) => setCEP(e.target.value)}
                                placeholder="Digite aqui"
                                color="success"
                                fill="outline"
                            />

                            <IonLabel position="floating">Endereço</IonLabel>
                            <IonInput
                                type="text"
                                value={endereco}
                                onIonChange={(e) => setEndereco(e.target.value)}
                                placeholder="Digite aqui"
                                color="success"
                                fill="outline"
                            />

                            <IonLabel position="floating">E-mail</IonLabel>
                            <IonInput
                                type="email"
                                value={email}
                                onIonChange={(e) => setEmail(e.target.value)}
                                placeholder="Digite aqui"
                                color="success"
                                fill="outline"
                            />

                            <IonLabel position="floating">Nome da Mãe</IonLabel>
                            <IonInput
                                type="text"
                                value={nomemae}
                                onIonChange={(e) => setNomeMae(e.target.value)}
                                placeholder="Digite aqui"
                                color="success"
                                fill="outline"
                            />

                            <IonLabel position="floating">RG</IonLabel>
                            <IonInput
                                type="text"
                                value={RG}
                                onIonChange={(e) => setRG(e.target.value)}
                                placeholder="Digite aqui"
                                color="success"
                                fill="outline"
                            />
                            <IonLabel position="floating">Senha</IonLabel>
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
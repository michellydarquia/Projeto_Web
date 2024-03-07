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
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';


const Register: React.FC<{ onUserRegistered: (userData: any) => void }> = ({ onUserRegistered }) => {

    const [CPF, setCPF] = useState<any>('');
    const [senha, setSenha] = useState<any>('');
    const [nome, setNome] = useState<any>('');
    const [CEP, setCEP] = useState<any>('');
    const [endereco, setEndereco] = useState<any>('');
    const [email, setEmail] = useState<any>('');
    const [nomemae, setNomeMae] = useState<any>('');
    const [RG, setRG] = useState<any>('');
    const [conta, setConta] = useState<any>('paciente');


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
            onUserRegistered(docRef);

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

    const [redirect, setRedirect] = useState<boolean>(false);

    const handleRegistrarClick = () => {
        registrar()
            .then((user) => {
                onUserRegistered(user);
  
                setRedirect(true);
            })
            .catch((error) => {
                console.error("Erro ao registrar:", error);

            });
    };

    if (redirect) {
        return <Redirect to="/perfil" />;
    }

    return (
        <>
            <IonPage id="main-content">
                <IonHeader>
                
                </IonHeader>
               

                <IonContent className='ion-padding'>
                    <IonGrid className='grid-container'>
                        <IonRow>
                        <IonCol>
                           <div className="container">
                           <IonTitle> Registro </IonTitle>
                           </div>
                        </IonCol>

                        </IonRow>


                    <IonCol className="ion-align-items-center">
                      <div className='ion-text-center'>
                      <IonLabel position="floating">Nome</IonLabel>
                      <IonInput
                        type="text"
                        value={nome}
                        onIonChange={(e) => setNome(e.target.value)}
                        placeholder="Enter text"
                        color="success"
                        fill="outline"
                     />

                      <IonLabel position="floating">CPF</IonLabel>
                      <IonInput
                        type="text"
                        value={CPF}
                        onIonChange={(e) => setCPF(e.target.value)}
                        placeholder="Enter text"
                        color="success"
                        fill="outline"
                    />
                    
                      <IonLabel position="floating">CEP</IonLabel>
                      <IonInput
                        type="text"
                        value={CEP}
                        onIonChange={(e) => setCEP(e.target.value)}
                        placeholder="Enter text"
                        color="success"
                        fill="outline"
                    />

                      <IonLabel position="floating">Endereço</IonLabel>
                      <IonInput
                        type="text"
                        value={endereco}
                        onIonChange={(e) => setEndereco(e.target.value)}
                        placeholder="Enter text"
                        color="success"
                        fill="outline"
                    />

                      <IonLabel position="floating">E-mail</IonLabel>
                      <IonInput
                        type="email"
                        value={email}
                        onIonChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter text"
                        color="success"
                        fill="outline"
                    />

                      <IonLabel position="floating">Nome da Mãe</IonLabel>
                      <IonInput
                        type="text"
                        value={nomemae}
                        onIonChange={(e) => setNomeMae(e.target.value)}
                        placeholder="Enter text"
                        color="success"
                        fill="outline"
                    />

                      <IonLabel position="floating">RG</IonLabel>
                      <IonInput
                        type="text"
                        value={RG}
                        onIonChange={(e) => setRG(e.target.value)}
                        placeholder="Enter text"
                        color="success"
                        fill="outline"
                    />
                      <IonLabel position="floating">Senha</IonLabel>
                      <IonInput
                        type="password"
                        value={senha}
                        onIonChange={(e) => setSenha(e.target.value)}
                        placeholder="Enter text"
                        color="success"
                        fill="outline"
                    /> 

                      <IonRadioGroup value={conta} onIonChange={(e: CustomEvent) => setConta(e.detail)}>
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
              </IonGrid>
            </IonContent>
        </IonPage>

        </>
    );
};
export default Register;
import {
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonAvatar, 
    IonButton,
    IonFooter
} from '@ionic/react';

import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';

import axios from 'axios'

import '../theme/register_perfil.css';

const perfilPaciente: React.FC = () => {

    const [logado, setLogado] = useState<boolean>(true);
    const [dados, setDados] = useState<any>({})

   useEffect(()=>{
        axios.get('http://localhost:3000/getinfo')
        .then(response => {
            setDados(response.data)
            if (dados.nullOrNotLogged){
                return <Redirect to='/home' />
            }
        })
        .catch(error => console.log(error))
    }, [])

    const logout = () => {
        axios.get('http://localhost:3000/logout')
        .then(response => setLogado(response.data))
        .catch(error => console.log(error))
    }

    if (!logado){
        return <Redirect to='/home' />
    }

    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonAvatar>
                            <img alt="Imagem do perfil"
                            src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                        <IonTitle style={{ fontWeight: 'bold', fontFamily: 'Arial' }} className="ion-text-end">Perfil Paciente</IonTitle>
                        <IonTitle>{dados.nome}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    
                    <br/>
                    E-mail: {dados.email}<br/><br/>
                    CPF: {dados.CPF}<br/><br/>
                    CEP: {dados.CEP}<br/><br/>
                    Endereço: {dados.endereco}<br/><br/>
                    Nome da mãe: {dados.nomeMae}<br/><br/>
                    RG: {dados.RG}<br/><br/>
                    Tipo da conta: {dados.conta}<br/><br/>
                    
                    {/* <div className="ion-text-center" style={{ marginTop: '200px' }}>
                    
                    </div> */}
                </IonContent>

                <IonFooter className='ion-text-center'>
                    <IonButton color={'success'} href='/lista-exames'>Exames</IonButton>
                    <IonButton color={'danger'} onClick={logout}>Logout</IonButton>
                </IonFooter>
            </IonPage>
        </>
    );
};

export default perfilPaciente;




// const PerfilPaciente: React.FC<{ dados: any }> = ({ dados }) => {
//     return (
//         <IonPage>
//             <IonHeader>
//                 <IonToolbar>
//                 <IonAvatar>
//                          <img alt="Imagem do perfil" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
//                 </IonAvatar>
//                     <IonTitle>{dados.nomeCompleto}</IonTitle>
//                 </IonToolbar>
//             </IonHeader>
//             <IonContent className="ion-padding">
//                 {/* Exibe os outros dados inseridos pelo paciente */}
//                 <p>Endereço: {dados.nome}</p>
//                 <p>CPF: {dados.CPF}</p>
//                 <p>CEP: {dados.CEP}</p>
//                 <p>Endereço: {dados.endereco}</p>
//                 <p>Endereço: {dados.email}</p>
//                 <p>Endereço: {dados.endereco}</p>
//                 <p>Endereço: {dados.nomemae}</p>
//                 <p>Endereço: {dados.RG}</p>
//                 <IonButton color={'success'} href='/listaexames'>Exames</IonButton>
//                 <IonButton color={'danger'} onClick={logout}>Logout</IonButton>
//             </IonContent>
//         </IonPage>
//     );
// };
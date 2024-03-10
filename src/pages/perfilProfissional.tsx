import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonButton } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';

import axios from 'axios';


const perfilProfissional: React.FC = () => {

    const [logado, setLogado] = useState<boolean>(true);
    const [dados, setDados] = useState<any>({});

    
    useEffect(()=>{
        axios.get('http://localhost:3000/getinfo')
        .then(response => {
            setDados(response.data);
            if (dados.conta != 'profissional'){
                return <Redirect to='/perfil' />
            }
        })
        .catch(error => console.log(error))
    }, [])

    const logout = () => {
        axios.get('http://localhost:3000/logout')
        .then(response => setLogado(response.data))
        .catch(error => console.log(error));
    }

    if (!logado || dados.nullOrNotLogged){
        return <Redirect to='/home' />
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonAvatar>
                        <img alt="Imagem do perfil"
                        src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                    </IonAvatar>
                    <IonTitle style={{ fontWeight: 'bold', fontFamily: 'Arial' }} className="ion-text-end">Perfil Administrativo</IonTitle>
                    
                    <IonTitle>{dados.nome}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">

                <br/>
                E-mail: {dados.email}<br/><br/>
                CPF: {dados.CPF}<br/><br/>
                CEP: {dados.CEP}<br/><br/>
                Endereço: {dados.endereco}<br/><br/>
                Nome da mãe: {dados.nomeDaMae}<br/><br/>
                RG: {dados.RG}<br/><br/>
                Tipo da conta: {dados.conta}<br/><br/>
                
                <div className="ion-text-center">
                <IonButton color={'success'} href='/lista-pacientes' >Pacientes</IonButton>
                <IonButton color={'success'} href='/registrar'>Registrar Perfil</IonButton>
                <IonButton color={'danger'} onClick={logout}>Logout</IonButton>
                {/* <IonButton color={'light'} onClick={addExames}>aDD</IonButton> */}
                </div>

            </IonContent>
        </IonPage>
    );
};

export default perfilProfissional;
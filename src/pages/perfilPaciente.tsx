import {
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonAvatar, 
    IonButton 
} from '@ionic/react';

import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';

import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const perfilPaciente: React.FC = () => {

    const [logado, setLogado] = useState<boolean>(true);
    const [msg, setMsg] = useState<any>('a');

    const [CPF, setCPF] = useState<any>('');
    const [nome, setNome] = useState<any>('');
    const [CEP, setCEP] = useState<any>('');
    const [endereco, setEndereco] = useState<any>('');
    const [email, setEmail] = useState<any>('');
    const [nomemae, setNomeMae] = useState<any>('');
    const [RG, setRG] = useState<any>('');
    const [conta, setConta] = useState<any>('');

    useEffect(()=>{

        onAuthStateChanged(auth, async (user) => {
            if (user) {

                const dados = doc(firestore, "users", user.uid)
                const info = await getDoc(dados);

                if (info.exists()) {

                    setCPF(info.data().CPF)
                    setNome(info.data().nome)
                    setCEP(info.data().CEP)
                    setEndereco(info.data().endereco)
                    setEmail(info.data().email)
                    setNomeMae(info.data().nomeDaMae)
                    setRG(info.data().RG)
                    setConta(info.data().conta)
                    //setExames(info.data().exames)
                    console.log("DADOS:", info.data());

                } else {

                console.log("Não exitem dados!");

                }

            } else {
                return <Redirect from='/perfil' to='/home' />
            }
        });
    }, [])

    



    const logout = () => {
        signOut(auth).then(() => {
            setLogado(false)
        }).catch((error) => {

        });
    }

    if (!logado){
        return <Redirect from='/perfil' to='/home' />
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
                        <IonTitle>.................{nome}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    
                    <br/>
                    E-mail: {email}<br/><br/>
                    CPF: {CPF}<br/><br/>
                    CEP: {CEP}<br/><br/>
                    Endereço: {endereco}<br/><br/>
                    Nome da mãe: {nomemae}<br/><br/>
                    RG: {RG}<br/><br/>
                    Tipo da conta: {conta}<br/><br/>

                    <IonButton color={'success'} href='/lista-exames'>Exames</IonButton>
                    <IonButton color={'danger'} onClick={logout}>Logout</IonButton>
                    
                    <p>{msg}</p>
                    
                </IonContent>
            </IonPage>
        </>
    );
};

export default perfilPaciente;
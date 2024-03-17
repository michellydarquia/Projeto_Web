import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonButton } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';

import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import '../theme/register_perfil.css';


const perfilProfissional: React.FC = () => {

    const [logado, setLogado] = useState<boolean>(true);


    const [CPF, setCPF] = useState<any>('');
    const [nome, setNome] = useState<any>('');
    const [CEP, setCEP] = useState<any>('');
    const [endereco, setEndereco] = useState<any>('');
    const [email, setEmail] = useState<any>('');
    const [nomemae, setNomeMae] = useState<any>('');
    const [RG, setRG] = useState<any>('');
    const [conta, setConta] = useState<any>('');
    const [exames, setExames] = useState<any>([]);

    const [novo, setNovo] = useState<any>({
        titulo: 'asdf',
        descricao: 'qwer',
        url: 'zxcv'
    });

    const [update, setUpdate] = useState<any>(0);

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
                    setExames(info.data().exames)
                    console.log("DADOS:", info.data());
                    console.log("id:", dados.id);

                } else {

                console.log("Não exitem dados!");

                }

            } else {
                return <Redirect to='/home' />
            }
        });
    }, [update])

    const addExames = async () => {
            onAuthStateChanged(auth, async (user) => {
                if (user){
                await updateDoc(doc(firestore, "users", user.uid), {
                    exames: []
                });
            }
        });
        setUpdate(update+1);
    }




    const logout = () => {
        signOut(auth).then(() => {
            setLogado(false)
        }).catch((error) => {

        });
    }

    if (conta == 'paciente'){
        return <Redirect to='/perfil' />
    }

    if (!logado){
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
                    
                    <IonTitle>{nome}</IonTitle>
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
                
                <div className="ion-text-center">
                <IonButton color={'success'} href='/lista-pacientes' >Pacientes</IonButton>
                <IonButton color={'success'} href='/registrar'>Registrar Perfil</IonButton>
                <IonButton color={'danger'} onClick={logout}>Logout</IonButton>
                <IonButton color={'light'} onClick={addExames}>aDD</IonButton>
                </div>

            </IonContent>
        </IonPage>
    );
};

export default perfilProfissional;
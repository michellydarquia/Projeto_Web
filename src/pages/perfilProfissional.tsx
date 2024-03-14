import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonButton } from '@ionic/react';
import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom'


import axios from 'axios';


const perfilProfissional: React.FC = () => {

    const history = useHistory<any>()

    const [logado, setLogado] = useState<boolean>(true);
    const [dados, setDados] = useState<any>({});
    const change = false;

    useEffect(()=>{
        
        if (history.location.state.Dados)
            setDados(history.location.state.Dados);

    }, [change])

    const logout = () => {
        axios.get('http://localhost:3000/logout')
        .then(response => setLogado(response.data))
        .catch(error => console.log(error));
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
                    
                    <IonTitle>{dados.nome}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">

                <br/>
                Data de criação: {dados.data}<br/><br/>
                E-mail: {dados.email}<br/><br/>
                CPF: {dados.CPF}<br/><br/>
                CEP: {dados.CEP}<br/><br/>
                Endereço: {dados.endereco}<br/><br/>
                Nome da mãe: {dados.nomeDaMae}<br/><br/>
                RG: {dados.RG}<br/><br/>
                Tipo da conta: {dados.conta}<br/><br/>
                
                <div className="ion-text-center">
                <IonButton color={'success'} href='/lista-pacientes' >Pacientes</IonButton>
                <IonButton color={'success'} href='/registrar'
                onClick={()=>{
                    try{
                        history.push({
                        pathname: '/registrar',
                        state: {
                            Dados: dados
                        }
                    })
                    }finally{
                        <Redirect to='/registrar' />
                    }
                }}
                >Registrar Perfil</IonButton>
                <IonButton color={'danger'} onClick={logout}>Logout</IonButton>
                <IonButton color={'danger'} onClick={()=>{

                    axios.get('http://localhost:3000/getdocs')
                    .then(response => console.log('foi'))
                    .catch(error => console.log(error));

                }
                    }>aaaaaa</IonButton>
                {/* <IonButton color={'light'} onClick={addExames}>aDD</IonButton> */}
                
                </div>

            </IonContent>
        </IonPage>
    );
};

export default perfilProfissional;
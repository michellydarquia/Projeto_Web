import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import listaPacientes from './pages/listaPacientes';
import listaExames from './pages/listaExames';
import Exame from './pages/Exame';
import perfilPaciente from './pages/perfilPaciente';
import perfilProfissional from './pages/perfilProfissional';
import perfilPacienteProfissional from './pages/perfilPacienteProfissional';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route component={Home} path="/" exact />
        <Route component={Login} path="/login" exact />
        <Route component={Register} path="/register" exact />
        <Route component={listaPacientes} path="/listaPacientes" exact />
        <Route component={listaExames} path="/listaExames" exact />
        <Route component={Exame} path="/Exame" exact />
        <Route component={perfilPaciente} path="/perfilPaciente" exact />
        <Route component={perfilProfissional} path="/perfilProfissional" exact />
        <Route component={perfilPacienteProfissional} path="/perfilPacienteProfissional" exact />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

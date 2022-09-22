
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 
import './App.css';
import Suporte from "./pages/suporte";
import FaqComponent from "./components/findr-faq-component";
import FindrLogin from "./pages/login-findr";
import Cadastro from "./pages/cadastro";
import Perfil from "./pages/perfil";
import Match from "./pages/match"
import Rotas from "./routes";

function App() {
  return (
    <>
    <Rotas/>
    </>
     );
}

export default App;

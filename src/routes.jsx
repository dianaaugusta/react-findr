import {BrowserRouter, Route, Routes} from "react-router-dom";
import FindrLogin from "./pages/login-findr";
import Suporte from "./pages/suporte";
import Cadastro from "./pages/cadastro";


function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<FindrLogin/>}/>
                <Route path="/suporte" element={<Suporte/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
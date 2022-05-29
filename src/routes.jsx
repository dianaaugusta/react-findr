import {BrowserRouter, Route, Routes} from "react-router-dom";
import FindrLogin from "./pages/login-findr";
import Suporte from "./pages/suporte";


function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<FindrLogin/>}/>
                <Route path="/suporte" element={<Suporte/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
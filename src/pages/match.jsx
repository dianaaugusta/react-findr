import FindrAutocomplete from "../components/findr-autocomplete";
import FaqComponent from "../components/findr-faq-component";
import FindrMenu from "../components/findr-menu"
import '../styles/findr-match-style.css'
import FindrBox from "../components/findr-box"
import Fade from '@mui/material/Fade';
function FindrMatch() {
    const userAtivo = sessionStorage.getItem("user");
    console.log("user")
    console.log(userAtivo)
    
    return (
        <>
            <FindrMenu/>
            <div class="card-match">
                <FindrBox/>
                 
            </div>

        </>
    );
}

export default FindrMatch;
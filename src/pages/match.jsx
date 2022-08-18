import FindrAutocomplete from "../components/findr-autocomplete";
import FaqComponent from "../components/findr-faq-component";
import FindrMenu from "../components/findr-menu"
import '../styles/findr-match-style.css'
import FindrBox from "../components/findr-box"

function FindrMatch() {
    return (
        <>
            <FindrMenu/>
            <div class="card-match">
                   <FindrBox title="Teste" imgLink="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Leo_Stronda_Solo_WBFF.jpg/220px-Leo_Stronda_Solo_WBFF.jpg"
                   text="ALGUEM ME MATA" paragraph="HABILIDADES: JAVA, VSCODE"
                   iconAbilityOne="https://cdn-icons-png.flaticon.com/512/226/226777.png" 
                   iconAbilityTwo="https://cdn-icons-png.flaticon.com/512/226/226777.png" 
                   iconAbilityThree="https://cdn-icons-png.flaticon.com/512/226/226777.png"/>
            </div>

        </>
    );
}

export default FindrMatch;
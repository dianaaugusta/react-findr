import FindrAutocomplete from "../components/findr-autocomplete";
import FaqComponent from "../components/findr-faq-component";
import FindrMenu from "../components/findr-menu"
import '../styles/findr-match-style.css'
import { useEffect } from "react";
import { useState } from "react";
import FindrBox from "../components/findr-box"
import api from "../api";
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Fade from '@mui/material/Fade';
// import Carousel from 'react-material-ui-carousel'
function FindrMatch() {
  const [userList, setUserList] = useState([]);
  const [userTestList, setUserTestList] = useState([]);

  useEffect(() => {
    api.get("/freelancer").then((res) => {
      setUserList(res.data);
      console.log("dentro do use effect" + userTestList)
    }).catch((err) => {
      console.log(err);
    })
  }, [])




  function awaitMatchUser(fkFreelancer){
    api.post("/match/freelancer/" + {fkFreelancer}).then(res => {
      if (res.status === 200) {
        alert("Its a match!");
    }
    }).catch(erro => {
      alert("Deu ruim!");
      console.log(erro);
    })
    
  }
  console.log("dps do user effetc" + userTestList)
  return (
        <div class="container-match">
            <FindrMenu />

            <div class="content-match">

                <div class="match-refused">
                    <i class="pi pi-fw pi-times"></i>
                </div>

                <div class="match-information">

                </div>

                <div class="match-accepted">

                </div>

            </div>

        </div>
  );
}

export default FindrMatch;
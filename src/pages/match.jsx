// import FindrAutocomplete from "../components/findr-autocomplete";
// import FaqComponent from "../components/findr-faq-component";
// import FindrMenu from "../components/findr-menu"
// import '../styles/findr-match-style.css'
// import { useEffect } from "react";
// import { useState } from "react";
// import FindrBox from "../components/findr-box"
// import api from "../api";
// import CloseIcon from '@mui/icons-material/Close';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import Fade from '@mui/material/Fade';
// // import Carousel from 'react-material-ui-carousel'
// function FindrMatch() {
//   const [userList, setUserList] = useState([]);
//   const [userTestList, setUserTestList] = useState([]);

//   useEffect(() => {
//     api.get("/freelancer").then((res) => {
//       setUserList(res.data);
//       console.log("dentro do use effect" + userTestList)
//     }).catch((err) => {
//       console.log(err);
//     })
//   }, [])




//   function awaitMatchUser(fkFreelancer){
//     api.post("/match/freelancer/" + {fkFreelancer}).then(res => {
//       if (res.status === 200) {
//         alert("Its a match!");
//     }
//     }).catch(erro => {
//       alert("Deu ruim!");
//       console.log(erro);
//     })
    
//   }
//   console.log("dps do user effetc" + userTestList)
//   return (
//     <>
//       <FindrMenu />

//       <Carousel
//         autoPlay={false}
//         animation="slide"
//         strictIndexing={false}
//         navButtonsAlwaysVisible={true}
//         next={() => {
//           // api.post("/freelancer/", { idFreelancer }, "/1/true").then(res => {
//           api.post("like/freelancer/1/1/true").then(res => {
//             alert("Like enviado com sucesso!");
//             awaitMatchUser(2)
//           }).catch(erro => {
//             alert("Deu ruim!");
//             console.log(erro);
//           })
//         }}
//         NextIcon={<FavoriteIcon id="favorite-button-icon" /> }
//         PrevIcon={<CloseIcon id="not-interested-icon" />}

//       >
//         {
//           userList.map(u => (
//             <FindrBox
//               title={u.name}
//               firstSkill = ""
//               secondSkill = ""
//               thirdSkill = ""
//               idUserFreelancer={u.idUserFreelancer}
//               avaliableTime={u.avaliableTime}
//             />
//           ))
//           // items.map( (item, i) => <Item key={i} item={item} /> )
//         }
//       </Carousel>

//     </>
//   );
// }

// export default FindrMatch;
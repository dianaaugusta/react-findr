import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/findr-box-style.css'
import { Icon } from '@mui/material';
import Fade from '@mui/material/Fade';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

let items = [
  {
    name: "Joao",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Amagi_class_battlecruiser_sketch.svg/335px-Amagi_class_battlecruiser_sketch.svg.png",
    firstSkill: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
    secondSkill: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/260px-Python_logo_and_wordmark.svg.png",
    thirdSkill: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/200px-C_Sharp_wordmark.svg.png",
    likedYou: true,
    userParagraph: "Gosto de java"
  },
  {
    name: "Lucas",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Yokosuka_Naval_Arsenal_after_Great_Kanto_earthquake_of_1923.jpg/240px-Yokosuka_Naval_Arsenal_after_Great_Kanto_earthquake_of_1923.jpg",
    firstSkill: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
    secondSkill: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/260px-Python_logo_and_wordmark.svg.png",
    thirdSkill: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/200px-C_Sharp_wordmark.svg.png",
    likedYou: false,
    userParagraph: "Gosto de Pyhon"
  },
  {
    name: "Miranda",
    img: "https://thumbs.dreamstime.com/b/floresta-tropical-bonita-na-fuga-de-natureza-do-ka-do-ang-36703721.jpg",
    firstSkill: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/260px-Python_logo_and_wordmark.svg.png",
    secondSkill: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/260px-Python_logo_and_wordmark.svg.png",
    thirdSkill: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/200px-C_Sharp_wordmark.svg.png",
    likedYou: true,
    userParagraph: "Gosto de Panqueca"
  },
  {
    name: "Marina",
    img: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg",
    firstSkill: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
    secondSkill: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/260px-Python_logo_and_wordmark.svg.png",
    thirdSkill: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/260px-Python_logo_and_wordmark.svg.png",
    likedYou: false,
    userParagraph: "Gosto de Carros"
  },
  {
    name: "Joao Vitor",
    img: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80",
    firstSkill: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
    secondSkill: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/260px-Python_logo_and_wordmark.svg.png",
    thirdSkill: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/200px-C_Sharp_wordmark.svg.png",
    likedYou: true,
    userParagraph: "Gosto de lol"
  },
]

let position = 0


export default function FindrBox(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [firstSkill, setFirstSkill] = React.useState("");
  const [secondSkill, setSecondSkill] = React.useState("");
  const [thirdSkill, setThirdSkill] = React.useState("");
  const [userParagraph, setUserParagraph] = React.useState("");
  const [userMatch, setUserMatch] = React.useState(false);


  const handleFavoriteClick = (event, message) => {
    position = position + 1
    setName(event.target.value = items[position].name)
    setImage(event.target.value = items[position].img)
    setFirstSkill(event.target.value = items[position].firstSkill)
    setSecondSkill(event.target.value = items[position].secondSkill)
    setThirdSkill(event.target.value = items[position].thirdSkill)
    setUserMatch(event.target.value = items[position].likedYou)
    setUserParagraph(event.target.value = items[position].userParagraph)


    if (userMatch) {
      alert("Its a Match!")
    }

    
    var element = document.getElementById("full-card");
      element.classList.remove("run-like-animation");
      void element.offsetWidth;
      element.classList.add("run-like-animation");

  };

  const handleRejectClick = (event, message) => {
    position = position + 1
    setName(event.target.value = items[position].name)
    setImage(event.target.value = items[position].img)
    setFirstSkill(event.target.value = items[position].firstSkill)
    setSecondSkill(event.target.value = items[position].secondSkill)
    setThirdSkill(event.target.value = items[position].thirdSkill)
    setUserParagraph(event.target.value = items[position].userParagraph)

    var element = document.getElementById("full-card");
      element.classList.remove("run-reject-animation");
      void element.offsetWidth;
      element.classList.add("run-reject-animation");

  };



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  return (<>
    <Card id="full-card" sx={{ maxWidth: 1000 }}>
      <CardHeader class="header" sx={{ p: 0 }}
        avatar={<>
          <Avatar aria-label="recipe" class="avatar-user">
          </Avatar>
        </>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={props.subheader}
      />
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt="Paella dish"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary" class="user-paragraph">
          Principais linguagens:
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Recusar" onClick={(event) => handleRejectClick(event, 'hello')}>
          <CloseIcon id="not-interested-icon" />
        </IconButton>
        <CardMedia
          component="img"
          height="100"
          image={firstSkill}
          alt="Paella dish"
        />
        <CardMedia
          component="img"
          height="100"
          image={secondSkill}
          alt="Paella dish"
        />
        <CardMedia
          component="img"
          height="100"
          image={thirdSkill}
          alt="Paella dish"
        />
        <IconButton aria-label="Favoritar" onClick={(event) => handleFavoriteClick(event, 'hello')}>
          <FavoriteIcon id="favorite-button-icon" />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {userParagraph}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  </>
  );
}
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
import Modal from '@material-ui/core/Modal';

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
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Amagi_class_battlecruiser_sketch.svg/335px-Amagi_class_battlecruiser_sketch.svg.png"
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Yokosuka_Naval_Arsenal_after_Great_Kanto_earthquake_of_1923.jpg/240px-Yokosuka_Naval_Arsenal_after_Great_Kanto_earthquake_of_1923.jpg"
  }
]

let position = 0
let currentPerson = items[position];

export default function FindrBox(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [userLiked, setUserLiked] = React.useState(false);



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteClick = () => {   
    console.log("cheguei aqui") 
    currentPerson = items[position+ 1];
  };


  return (<>
    <Card sx={{ maxWidth: 1000 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.subheader}
      />
       <CardMedia
        component="img"
        height="300"
        image = {currentPerson.img}
        alt="Paella dish"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary"> //colocar um id
        {props.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="Recusar">
          <ShareIcon />
        </IconButton>
      <CardMedia
        component="img"
        height="100"
        image={props.iconAbilityOne}
        alt="Paella dish"
      />
      <CardMedia
        component="img"
        height="100"
        image={props.iconAbilityTwo}
        alt="Paella dish"
      />
      <CardMedia
        component="img"
        height="100"
        image={props.iconAbilityThree}
        alt="Paella dish"
      />
        <IconButton aria-label="Favoritar" onClick={handleFavoriteClick} >
          <FavoriteIcon/>
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
          {props.paragraph}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  </>
  );
}
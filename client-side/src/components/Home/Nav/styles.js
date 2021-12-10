import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding : theme.spacing(2),
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration : "none"
  },
  image: {
    marginLeft: '15px',
  },
  Toolbar:{
    marginLeft: 'auto',
    marginRight: "14px",
    gap:"1rem",
  },
  avatar:{
    backgroundColor : theme.palette.secondary.main

  }
}));

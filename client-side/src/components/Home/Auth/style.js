import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme)=>({
    Paper:{
        display : 'flex',
flexDirection: "column",
        alignItems :"center", 
    },
    // root:{
    //     '& .MuiTextField-root' : {
    //         marigin: theme.spacing(1)
    //     },
        
    // },
    Avatar: {
        // margin: theme.spacing(1),
        backgroundColor : "red"
    },
    form:{
        width: '100%',
        // marginTop: theme.spacing(3)

    },
    // submit :{
    //     margin: theme.spacing(3, 0, 2),
    // },
    // googleButton:{
        
    // }
}))
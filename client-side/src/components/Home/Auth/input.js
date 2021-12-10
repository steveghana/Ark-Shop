import React from 'react'
import { Container,Avatar, Grid, Typography, TextField, Paper, InputAdornment, IconButton } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

function Input({half, name, placeholder, label, autoFocus, type, handleChange, handlePassword}) {
    return (
        <Grid xs={12} md={half ? 6 : 12} item>
          <TextField label={label} 
          name={name} 
          placeholder={placeholder} 
          variant="outlined" 
          fullWidth 
          required
          autoFocus={autoFocus}
          type={type}
          onChange={handleChange}
        //   inputProps={name === "password" && {
        //     endadornment:(
        //           <InputAdornment position ="end" >
        //               <IconButton onClick={handlePassword}>
        //                   {type === "password" ? <Visibility/> : <VisibilityOff/>}

        //               </IconButton>
        //           </InputAdornment>
        //       )
        //   }
        // }
          />

        </Grid>
    )
}

export default Input

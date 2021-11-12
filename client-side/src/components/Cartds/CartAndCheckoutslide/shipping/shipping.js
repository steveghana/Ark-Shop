import React from 'react';
import {TextField, Grid} from "@material-ui/core"
import "./shipping.css"
function Shipping() {
    return (
        <div className="shipping-container">
        <div className="name">
            <Grid lg={6} md={12} className="first-name">
                <div className="first-name-description"> First Name </div>
                <TextField name= 'first name' variant="outlined" label= "first name" fullWidth />
            </Grid>
            <Grid lg={6} md={12} className="second-name">
                <div className="second-name-description"> Second Name </div>
                <TextField name= 'second name' variant="outlined" label= "second name" fullWidth />
            </Grid>
        </div>


        <div className="email-phone">
            <Grid lg={6} md={12}  className="email">
                <div className="email-name-description"> Your Email </div>
                <TextField  name= 'Email' variant="outlined" label= "Email" fullWidth />
            </Grid>
            <Grid lg={6} md={12} className="phone">
                <div className="phone-description"> Your Phone </div>
                <TextField name= 'phone' variant="outlined" label= "Phone Number" fullWidth />
            </Grid>
        </div>

        <div className="country-city-zip">
            <Grid lg={6} md={12} className="country">
                <div className="country-name-description"> Country </div>
                <TextField name= 'country' variant="outlined" label= "country" fullWidth />
                
            </Grid>
            <Grid lg={6} md={12} className="city">
                <div className="city-description"> City </div>
                <TextField name= 'City' variant="outlined" label= "City" fullWidth />
                
            </Grid>
            <Grid lg={6} md={12} className="zip-code">
                <div className="zip-description"> Zip Code </div>
                <TextField name= 'Zip' variant="outlined" label= "Zip" fullWidth />
                
            </Grid>
        </div>

        <div className="state-address">
            <Grid lg={6} md={12} className="state">
                <div className="state-name-description"> State </div>
                <TextField name= 'State' variant="outlined" label= "State" fullWidth />
                
            </Grid>
            <Grid lg={6} md={12} className="address">
                <div className="address-description"> Address </div>
                <TextField name= 'Address' variant="outlined" label= "Address" fullWidth />
                
            </Grid>
        </div>



    </div>
    )
}

export default Shipping

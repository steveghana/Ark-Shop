import React, { useState, useEffect } from "react";
import {
  Container,
  Avatar,
  Grid,
  Typography,
  TextField,
  Paper,
  Button,
  Icon,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import "./style.css";
import GoogleLogin from "react-google-login";
import Input from "./input";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signinAth, signupAuth } from "../../../Redux/actions/auth";
function Auth() {
  const data = useSelector((state) => state.User);
  // const isSignedup = false
  const [isSignedup, setisSignedup] = useState(false);
  const [showpassword, setshowpassword] = useState(false);
  const [errorhandle, seterrorhandle] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const initialState = {
    firstName: "",
    secondName: "",
    email: "",
    signInemail: "",
    password: "",
    confirmpassword: "",
  };
  const [user, setuser] = useState(initialState);
  const signupAuthConfig = (err) => {};
  const handleSubmit = (e) => {
    console.log(user);

    e.preventDefault();

    const emailValidity = new RegExp(/^[\w*.-_+]+@[\w-]+(\.\w{2,4})+$/);
    if (isSignedup) {
      if (user.firstName === "") {
        seterrorhandle("Enter your firtname");
      } else if (user.password.length === 0 || user.password.length > 10) {
        seterrorhandle("Enter a vaild password");
      } else if (user.confirmpassword.length === 0) {
        seterrorhandle("Confirm your password");
      } else if (user.password !== user.confirmpassword) {
        seterrorhandle("Passwords dont match");
      } else if (user.email === "" || !emailValidity.test(user.email)) {
        seterrorhandle("Enter valid email for example johndoe@ecme.com");
      } else {
        dispatch(signupAuth(user, history, seterrorhandle));
      }
    } else {
      if (user.signupemail === "" || !emailValidity.test(user.signInemail)) {
        seterrorhandle("Enter valid email for example johndoe@ecme.com");
      } else if (user.password.length === 0 || user.password.length > 10) {
        seterrorhandle("Enter a vaild password");
      } else {
        dispatch(signinAth(user, history, seterrorhandle));
        if (errorhandle?.err) return;
        setuser(initialState);
      }
    }
  };
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const switchmode = () => {
    setisSignedup((preveisSignedup) => !preveisSignedup);
    setshowpassword(false);
    seterrorhandle(null);
    setuser(initialState);
  };
  const googleSucess = (res) => {
    // console.log(res)
  };
  const googleFailure = () => {
    // console.log('failed to login, please try again later')
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <Container className="container" component="main" maxWidth="xs">
      <div className="patterns">
        <svg className="svg_wrapper-intro" width="100%" height="100%">
          <text
            className="svg_text"
            stroke="tomato"
            x="50%"
            y="60%"
            textAnchor="middle"
          >
            ARK
          </text>
        </svg>
      </div>
      <Paper
        className="Paper"
        elevation={3}
        style={{ marginTop: "2rem", padding: "2rem" }}
      >
        <Avatar className="Avatar">
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">
          {isSignedup ? "Sign up" : "Sign in"}
        </Typography>
        <form
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
          className="form"
        >
          <Grid container spacing={2} style={{ marginTop: "1rem" }}>
            {isSignedup && (
              <>
                <Input
                  label="First name"
                  name="firstName"
                  placeholder="First name"
                  autoFocus
                  half
                  handleChange={handleChange}
                />
                <Input
                  label="Second name"
                  name="secondName"
                  placeholder="Second name"
                  half
                  handleChange={handleChange}
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  handleChange={handleChange}
                />
              </>
            )}
            {!isSignedup && (
              <Input
                label="Email"
                name="signInemail"
                type="email"
                placeholder="Email"
                handleChange={handleChange}
              />
            )}
            <Input
              label="Password"
              type={showpassword ? "text" : "password"}
              name="password"
              placeholder="password"
              handleChange={handleChange}
            />
            {isSignedup && (
              <>
                <Input
                  label="Confirm Password"
                  name="confirmpassword"
                  type="password"
                  placeholder="Confirm password"
                  handleChange={handleChange}
                />
              </>
            )}
            {errorhandle && (
              <Typography color="secondary" variant="subtitle1">
                {errorhandle}
              </Typography>
            )}
            <Button
              style={{ marginTop: "1rem" }}
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
            >
              {isSignedup ? "Sign up" : "Sign in"}
            </Button>
            <GoogleLogin
              clientId="Google id"
              render={(renderprops) => (
                <Button
                  className="googleButton"
                  fullWidth
                  color="primary"
                  variant="contained"
                  onClick={renderprops.onClick}
                  disabled={renderprops.disabled}
                  startIcon={<Icon />}
                >
                  Goggle Sign In
                </Button>
              )}
              onSuccess={googleSucess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
            <Grid container>
              <Grid item>
                <Button onClick={switchmode}>
                  {isSignedup
                    ? "Already have an account? Sign in"
                    : "Dont have an account? Sign up"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Auth;

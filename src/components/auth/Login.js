import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { Avatar, Container, Grid, Typography, Paper, Button } from '@material-ui/core'
import {auth} from '../../assets/firebase'

import Input from './input'
import useStyles from './styles'
import {user} from '../../assets/dummyData'
import { login } from '../../features/userSlice'


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', job: '' };

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const classes = useStyles()
    const dispatch = useDispatch()
    // const isSignUp = false

   

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isSignUp) {
            
            auth.createUserWithEmailAndPassword(formData.email, formData.password )
                .then(userAuth => {
                    userAuth.user.updateProfile({
                        name: `${formData.firstName} ${formData.lastName} `,
                        photoURL: user.profile,
                        job:formData.job
                    })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,    
                            name: `${formData.firstName} ${formData.lastName} `,
                            photoURL: user.profile,
                            job:formData.job
                        }))
                    })
                }).catch(error => console.log(error))
        } else {
            // auth
            auth.signInWithEmailAndPassword(formData.email, formData.password)
                .then(userAuth => {
                    console.log(userAuth.user.profileURL)
                    dispatch(login({
                        name: userAuth.user.name,
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        profile: userAuth.user.profileURL,
                    }))
                }).catch(e => console.log(e))

        }
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const switchMode = () => setIsSignUp((prevIsSignUp) => !prevIsSignUp)

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3} >
                <Avatar className={classes.avatar} >
                    <LockOutlinedIcon />
                </Avatar>

                <Typography variant="h5"> {isSignUp ? 'Sign Up' : 'Sign In'} </Typography>

                <form className={classes.form} onSubmit={handleSubmit} >
                    <Grid container spacing={2} >
                        {
                            isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )
                        }

                        <Input name="email" type="email" label="Email Address" handleChange={handleChange} />
                        <Input name="password" label="Password" type={showPassword ? 'text' : 'password'} handleChange={handleChange} handleShowPassword={handleShowPassword} />
                        {
                            isSignUp &&
                            <>
                            <Input name="confirmPassword" label="Re-Enter Password" type="password" handleChange={handleChange} />
                            <Input name="job" label="Enter Job Description" type="text" handleChange={handleChange} />
                            </>
                        }
                    </Grid>
                    <Button variant="contained" color="primary" type="submit" className={classes.submit} fullWidth >
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>

                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode} >
                                {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up "}
                            </Button>
                        </Grid>
                    </Grid>

                </form>
            </Paper>
        </Container>
    )
}

export default Login

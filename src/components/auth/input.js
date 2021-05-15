import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core'
import React from 'react'

import Visibility from '@material-ui/icons/VisibilityOutlined'
import VisibilityOff from '@material-ui/icons/VisibilityOffOutlined'

const Input = ({ name, label, autoFocus, handleChange, handleShowPassword, type, half  }) => {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                name={name}
                label={label}
                onChange={handleChange}
                autoFocus={autoFocus}
                type={type}
                variant="outlined"
                required
                fullWidth
                InputProps={name === 'password' ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                          {type === 'password' ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  } : null}
            />
        </Grid> 
    )
}

export default Input
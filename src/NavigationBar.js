import { Box, Container, Toolbar, Typography , Link} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    menuOption: {
        padding: theme.spacing(1)
    },
    menuBox: {
        display: 'flex',
        flexDirection: 'column',    // small screens
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row' //full screen, md=midpoint
        }
    }
}))
export const NavigationBar = () => {
    const classes = useStyles()

    return (
        <div>
           <Container>
               <Toolbar>
                <Typography>
                    Gravity Well Products
                </Typography>
                <Box className={classes.menuBox}>
                    {['home','courses','sign-up'].map((menuoption)=>(
                        <Link component='button' variant='body1'
                        className={classes.menuOption}>
                            {menuoption.toUpperCase()}
                        </Link>
                    ))}
                </Box>
               </Toolbar>
           </Container>
        </div>
    )
}

import { Box, Container, Toolbar, Typography , Link} from '@material-ui/core'
import React from 'react'


export const NavigationBar = () => {
    return (
        <div>
           <Container>
               <Toolbar>
                <Typography>
                    Gravity Well Products
                </Typography>
                <Box>
                    {['home','courses','sign-up'].map((menuoption)=>(
                        <Link component='button' variant='body1'>
                            {menuoption.toUpperCase()}
                        </Link>
                    ))}
                </Box>
               </Toolbar>
           </Container>
        </div>
    )
}

import { AppBar, Badge, Box, Button, Container, Grid, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartComponent } from './Cart'
import { useAppSelector } from '../redux/hooks'
import { ShoppingCartOutlined } from '@mui/icons-material'

export const NavBar: FC<{}> = () => {
    const navigate = useNavigate()
    const items = useAppSelector((state) => state.cartReducer);
    const [open, setOpen] = useState<boolean>(false);

    const handleStateViewDrawer = () => {
        setOpen((state) => !state);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='sticky'>
                <Toolbar>
                    <Container maxWidth='xl'>
                        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                            <Grid item>
                                <Typography>Rick And Morty</Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction='row' spacing={2}>
                                    <IconButton
                                        color="primary"
                                        onClick={() => handleStateViewDrawer()}
                                    >
                                        <Badge color="error" badgeContent={items.length}>
                                            <ShoppingCartOutlined />
                                        </Badge>
                                    </IconButton>
                                    <Button variant='contained' onClick={() => navigate('Login')}>Login</Button>
                                    <Button variant='outlined'>Register</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
            <CartComponent open={open} handleStateViewDrawer={handleStateViewDrawer} />
        </Box>
    )
}

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor: "black" }} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, flexGrow: 1 }}
                        style={{ justifyContent: "flex-start" }}
                    >
                        {/* <MenuIcon /> */}

                        <Button color="inherit">Login</Button>

                    </IconButton>
                    {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography> */}
                    {/* <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
                        News
                    </Typography> */}
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
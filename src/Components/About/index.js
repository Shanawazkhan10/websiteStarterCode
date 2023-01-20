import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
    return (
        <Box marginTop={10} sx={{ flexGrow: 1 }}>
            <p style={{ textAlign: 'center' }}>ABOUT ME</p>
            <p style={{ textAlign: 'center' }}>My Introduction</p>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <Item>xs=6 md=4</Item>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Item>Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a
                        <Grid container spacing={2} marginTop={8}>
                            <Grid item xs={2} md={2}>
                                <Item>xs=6 md=4</Item>
                            </Grid>
                            <Grid item xs={2} md={2}>
                                <Item>xs=6 md=4</Item>
                            </Grid>
                            <Grid item xs={2} md={2}>
                                <Item>xs=6 md=4</Item>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} marginTop={1}>
                            <Grid item xs={2} md={2}>
                                <button>DOWNLOAD RESUME</button>
                            </Grid>
                        </Grid>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}

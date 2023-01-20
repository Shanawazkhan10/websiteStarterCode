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
            <Grid container spacing={2}>
                <Grid item xs={1} md={2}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Item>xs=6 md=8</Item>
                        <Item style={{ marginTop: 5 }}>xs=6 md=8</Item>
                        <Item style={{ marginTop: 5 }}>xs=6 md=8</Item>
                    </Box>
                </Grid>
                <Grid item xs={6} md={5}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Item style={{ textAlign: 'start' }}>
                            <p>HI, I AM ALEX</p>
                            <p>Froentend Developer</p>
                            <p>Lorem Ipsum is simply dummy text of
                                the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen book. It has survived
                                not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the
                                release of Letraset sheets </p>
                            <button>Contact Me</button>
                        </Item>
                    </Box>
                </Grid>
                <Grid item xs={5} md={5}>
                    <Item>xs=6 md=4</Item>
                </Grid>
            </Grid>
        </Box>
    );
}

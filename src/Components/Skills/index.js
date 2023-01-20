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
            <p style={{ textAlign: 'center' }}>SKILLS</p>
            {/* <p style={{ textAlign: 'center' }}>My Introduction</p> */}
            <Grid container spacing={2}>
                <Grid item xs={2} md={2}>
                    <Item>xs=6 md=4</Item>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Item>xs=6 md=4</Item>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Item>xs=6 md=4</Item>
                </Grid>
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
            <p style={{ textAlign: 'center' }}>The world's best product teams trust MUI to deliver an unrivaled experience for both developers and users.</p>
        </Box>
    );
}

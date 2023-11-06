import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress'; // Import a loading component from MUI

const LoadingScreen = ({message}) => {
    return (
        <Box sx={{ my: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", height: "100%", width: "100%" }} className="bg-transparent">
                <Card sx={{ maxWidth: 900, width: "50%",margin: "40px"}}>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Loading...
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {message ? message : " "}
                    </Typography>
                    <br />
                    <LinearProgress color="secondary" />
                </CardContent>
                </Card>
            </Box>
    )
};

export default LoadingScreen;
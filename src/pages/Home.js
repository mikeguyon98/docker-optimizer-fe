import { Box, Button } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CodingImage from '../imgs/CodingImage.png';
import AnalyzeImage from '../imgs/AnalyzeImage.png';
import { Link } from 'react-router-dom';
// import tailwind from 'tailwindcss';

function Home() {
    return (
        <Box sx={{ my: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }} className="bg-transparent">
            <Typography variant="h4" component="div" sx={{color: "white", fontWeight: "bold", textAlign: "center", paddingBottom: 1, marginTop: 10 }}>
                Welcome to DIA – Docker Image Analyzer
            </Typography>
            <Typography variant="p" component="div" sx={{color: "white", textAlign: "center" }}>
                Simplify. Optimize. Revolutionize your Docker experience.
            </Typography>
            <img src={CodingImage} />
            <Card sx={{ maxWidth: 600, margin: "40px", backgroundColor: "#2f2f2f"}}>
            <CardActionArea sx={{}}>
                <CardContent>
                <Typography variant="p" component="div" sx={{color: "white", textAlign: "center", padding: 3}}>
                {"At DIA, we're committed to providing developers with state-of-the-art tools to streamline their development process. Harnessing the power of advanced Language Learning Models (LLMs), DIA offers a unique platform that meticulously analyzes your Docker images, identifying opportunities to trim down size without compromising functionality."}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            <div style={{width: "100%", borderBottom: "2px solid #2f2f2f"}}>
            </div>
            <Card sx={{ maxWidth: "55%", margin: "20px", backgroundColor: "#2f2f2f"}}>
                <CardContent sx={{ maxWidth: "100%", display: "flex", justifyContent: "space-between", padding: 5, marginBottom: 10}}>
                <Typography variant="h4" component="div" sx={{color: "white", fontWeight: "bold", textAlign: "left", paddingTop: 8, width: "35%", maxWidth: "35%", display: "flex", flexDirection:"column"}}>
                    {"Start Analyzing your Docker Images today!"}
                    <Button component={Link} to="/optimizer" variant='contained' color='secondary' sx={{marginLeft: 2, marginTop: 5}}>Get Started</Button>
                </Typography>
                <CardMedia component="img" image={AnalyzeImage} sx={{width: "35%"}}/>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Home;
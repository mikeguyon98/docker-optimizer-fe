import React, { useRef } from 'react';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

// import tailwind from 'tailwindcss';

function Docs() {
    const gettingStartedRef = useRef(null);
    const uploadingDockerfileRef = useRef(null);
    const analyzingDockerImage = useRef(null);
    const understandingDockerfile = useRef(null);
    const applyingOptimizations = useRef(null);

    const scrollToRef = (ref) => (event) => {
        event.preventDefault();
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <Box sx={{ my: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", height: "100%" }} className="bg-transparent">
            <Paper sx={{ maxWidth: 800, margin: "10px", minWidth: "70%", backgroundColor: "#2f2f2f", padding: "10px"}}>
                <Typography variant="h4" component="div" sx={{color: "white", fontWeight: "bold", textAlign: "left", paddingBottom: 1, marginTop: 2, paddingLeft: 2 }}>
                    Documentation
                </Typography>
                <br />
                <Typography variant="h6" component="div" sx={{color: "white", fontWeight: "bold", textAlign: "left", paddingBottom: 1, paddingLeft: 4}}>
                    Table of Contents
                </Typography>
                <Box sx={{paddingLeft: 4}}>
                <List sx={{ color: "#1976d2", maxWidth: "400px" }}>
                    <ListItem button component="a" href="#gettingStarted" onClick={scrollToRef(gettingStartedRef)} sx={{ '&:hover': { textDecoration: 'underline' } }}>
                        1. Getting Started
                    </ListItem>
                    <ListItem button component="a" href="#gettingStarted" onClick={scrollToRef(uploadingDockerfileRef)} sx={{ '&:hover': { textDecoration: 'underline' } }}>
                        2. Providing Your Docker Image and Dockerfile Details
                    </ListItem>
                    <ListItem button component="a" href="#gettingStarted" onClick={scrollToRef(gettingStartedRef)} sx={{ '&:hover': { textDecoration: 'underline' } }}>
                        4. Analysis and Recommendations
                    </ListItem>
                    <ListItem button component="a" href="#gettingStarted" onClick={scrollToRef(gettingStartedRef)} sx={{ '&:hover': { textDecoration: 'underline' } }}>
                        5. Understanding Your Optimized Dockerfile
                    </ListItem>
                    <ListItem button component="a" href="#gettingStarted" onClick={scrollToRef(gettingStartedRef)} sx={{ '&:hover': { textDecoration: 'underline' } }}>
                        6. Applying Optimizations
                    </ListItem>
                </List>
                </Box>
                <br></br>
                <Box sx={{paddingLeft: 2, paddingRight: 2, marginBottom: 2}} ref={gettingStartedRef} id="gettingStarted">
                    <Typography variant="h6" component="div" sx={{color: "white", fontWeight: "bold", textAlign: "left", paddingBottom: 1, marginTop: 2, paddingLeft: 2}}>
                        Getting Started
                    </Typography>
                    <Typography variant="h7" component="div" sx={{color: "white", textAlign: "left", paddingLeft: 2, paddingRight: 2, marginBottom: 1}}>
                        {"Before diving into DIA\'s functionalities, ensure that you have the following prerequisites:"}
                    </Typography>
                    {/* Add bullet points */}
                    <Typography variant="p" component="div" sx={{color: "white", textAlign: "left", paddingLeft: 2, paddingRight: 2}}>
                        <ol style={{listStyle: "decimal", padding: "10px", marginLeft: "5px"}}>
                            <li>
                                {"A public Docker image hosted on a registry (e.g., Docker Hub)."}
                            </li>
                            <li>
                                {"The associated Dockerfile for the above Docker image."}
                            </li>
                            <li>
                                {"Access to the internet to use DIA's web application."}
                            </li>
                        </ol>
                    </Typography>
                </Box>
                <br></br>
                <Box sx={{paddingLeft: 2, paddingRight: 2, marginBottom: 2}} ref={uploadingDockerfileRef} id="uploadingDockerfile">
                    <Typography variant="h6" component="div" sx={{color: "white", fontWeight: "bold", textAlign: "left", paddingBottom: 1, marginTop: 2, paddingLeft: 2, marginBottom: 1}}>
                        Providing Your Docker Image and Dockerfile Details
                    </Typography>
                    <Typography variant="h7" component="div" sx={{color: "white", textAlign: "left", paddingLeft: 2, paddingRight: 2, marginBottom: 1}}>
                        {"To begin the analysis, you need to provide your Dockerfile and Docker image to DIA:"}
                    </Typography>
                    {/* Add bullet points */}
                    <Typography variant="p" component="div" sx={{color: "white", textAlign: "left", paddingLeft: 2, paddingRight: 2}}>
                        <ol style={{listStyle: "decimal", padding: "10px", marginLeft: "5px"}}> 
                            <li>
                                {"Provide Your Docker Image Name:"}
                                <ul style={{listStyle: "disc", padding: "10px", marginLeft: "5px"}}>
                                    <li>
                                        {"Navigate to the Optimize page by clicking the Optimize button in the Menu."}
                                    </li>
                                    <li>
                                        {"At the top of the page you will find a field to enter the name of your Docker image."}
                                    </li>
                                    <li>
                                        {"Type in the full name of your image in the format"} <b>{"\'repository/name:tag\'"}</b> {". For instance, if your image is hosted on Docker Hub, it might look something like "} <b>{"username/myapp:latest"}</b>{"."}
                                    </li>
                                </ul>
                            </li>
                            <li>
                                {"Provide Your Dockerfile:"}
                                <ul style={{listStyle: "disc", padding: "10px", marginLeft: "5px"}}>
                                    <li>
                                        {"Copy and paste the text from your Dockerfile in the "} <b>{"Dockerfile"}</b> {" field."}
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </Typography>
                </Box>
                <br></br>
                <Box sx={{paddingLeft: 2, paddingRight: 2, marginBottom: 2}} ref={analyzingDockerImage} id="analyzingDockerImage">
                    <Typography variant="h6" component="div" sx={{color: "white", fontWeight: "bold", textAlign: "left", paddingBottom: 1, marginTop: 2, paddingLeft: 2}}>
                        Analysis and Recommendations
                    </Typography>
                    <Typography variant="h7" component="div" sx={{color: "white", textAlign: "left", paddingLeft: 2, paddingRight: 2, marginBottom: 1}}>
                        {"Once you have provided the Dockerfile and image name:"}
                    </Typography>
                    <Typography variant="p" component="div" sx={{color: "white", textAlign: "left", paddingLeft: 2, paddingRight: 2}}>
                        <ol style={{listStyle: "decimal", padding: "10px", marginLeft: "5px"}}> 
                            <li>
                                {"Click the "} <b>{"Optimize"}</b> {" button to start the analysis process."}
                            </li>
                            <li>
                                {"The analysis can take a few minutes. During this time, DIA’s LLMs assess layer-by-layer details, checks for best practices, and identifies potential optimizations."}
                            </li>
                            <li>
                                {"After the analysis is complete, DIA will display a set of recommendations and an optimized Dockerfile for review."}
                            </li>
                        </ol>
                    </Typography>
                </Box>
                <br></br>
                <Box sx={{paddingLeft: 2, paddingRight: 2, marginBottom: 2}} ref={understandingDockerfile} id="understandingDockerfile">
                    <Typography variant="h6" component="div" sx={{color: "white", fontWeight: "bold", textAlign: "left", paddingBottom: 1, marginTop: 2, paddingLeft: 2}}>
                        Understanding You Optimized Dockerfile
                    </Typography>
                    <Typography variant="h7" component="div" sx={{color: "white", textAlign: "left", paddingLeft: 2, paddingRight: 2, marginBottom: 1}}>
                        {"The optimized Dockerfile will be presented with annotations explaining each change::"}
                    </Typography>
                    <Typography variant="p" component="div" sx={{color: "white", textAlign: "left", paddingLeft: 2, paddingRight: 2}}>
                        <ul style={{listStyle: "sphere", padding: "10px", marginLeft: "5px"}}> 
                            <li>
                                <b>{"Base Image Optimization:"}</b> {" Suggesting a more efficient base image if applicable."}
                            </li>
                            <li>
                                <b>{"Layer Reduction:"}</b> {" Consolidating commands to reduce the number of layers."}
                            </li>
                            <li>
                                <b>{"Caching Enhancements:"}</b> {" Implementing best practices for utilizing Docker’s build cache."}
                            </li>
                        </ul>
                    </Typography>
                </Box>
                <br></br>
                <Box sx={{paddingLeft: 2, paddingRight: 2, marginBottom: 2}} ref={applyingOptimizations} id="applyingOptimizations">
                    <Typography variant="h6" component="div" sx={{color: "white", fontWeight: "bold", textAlign: "left", paddingBottom: 1, marginTop: 2, paddingLeft: 2}}>
                        Applying Optimizations
                    </Typography>
                    <Typography variant="h7" component="div" sx={{color: "white", textAlign: "left", paddingLeft: 2, paddingRight: 2, marginBottom: 1}}>
                        {"You can apply the suggested optimizations by:"}
                    </Typography>
                    <Typography variant="p" component="div" sx={{color: "white", textAlign: "left", paddingLeft: 2, paddingRight: 2}}>
                        <ol style={{listStyle: "decimal", padding: "10px", marginLeft: "5px"}}> 
                            <li>
                                {" Reviewing each change to ensure they align with your project's requirements."}
                            </li>
                            <li>
                                {"Manually editing your existing Dockerfile."}
                            </li>
                            <li>
                                {"Copy and pasting provided Dockerfile into your project."}
                            </li>
                        </ol>
                    </Typography>                
                </Box>
            </Paper>
        </Box>
    )
}

export default Docs;
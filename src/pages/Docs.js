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
    const providingDockerImage = useRef(null);
    const analyzingDockerImage = useRef(null);
    const understandingDockerfile = useRef(null);
    const applyingOptimizations = useRef(null);
    const exampleDockerfile = useRef(null);
    const FAQ = useRef(null);
    const contactUs = useRef(null);

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
                        2. Uploading Your Dockerfile
                    </ListItem>
                    <ListItem button component="a" href="#gettingStarted" onClick={scrollToRef(providingDockerImage)} sx={{ '&:hover': { textDecoration: 'underline' } }}>
                        3. Providing Your Docker Image
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
                    <ListItem button component="a" href="#gettingStarted" onClick={scrollToRef(gettingStartedRef)} sx={{ '&:hover': { textDecoration: 'underline' } }}>
                        7. Example: Optimizing a Sample Project
                    </ListItem>
                    <ListItem button component="a" href="#gettingStarted" onClick={scrollToRef(gettingStartedRef)} sx={{ '&:hover': { textDecoration: 'underline' } }}>
                        8. FAQ
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
                                {"Provide Your Docker Image Name:"}
                                <ul style={{listStyle: "disc", padding: "10px", marginLeft: "5px"}}>
                                    <li>
                                        {"Beneath the Dockerfile textbox, you will find a field to enter the name of your Docker image."}
                                    </li>
                                    <li>
                                        {"The Docker image name must be a valid Docker image name."}
                                    </li>
                                </ul>
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
                        Uploading Your Docker Image and Dockerfile Details
                    </Typography>
                    <Typography variant="h7" component="div" sx={{color: "white", textAlign: "left", paddingLeft: 2, paddingRight: 2, marginBottom: 1}}>
                        {"After uploading your Dockerfile, you need to provide details of your Docker image:"}
                    </Typography>
                    {/* Add bullet points */}
                    <Typography variant="p" component="div" sx={{color: "white", textAlign: "left", paddingLeft: 2, paddingRight: 2}}>
                        <ol style={{listStyle: "decimal", padding: "10px"}}> 
                            <li>
                                    {"Click on the "}
                                    <b>{"OPTIMIZE "}</b>
                                    {"button in the Navigation bar."}
                                </li>
                            <li>
                                {"Copy the contents of the Dockerfile associated with your Docker image."}
                            </li>
                            <li>
                                {""}
                            </li>
                        </ol>
                    </Typography>
                </Box>
                <br></br>
                <Box sx={{paddingLeft: 2, paddingRight: 2, marginBottom: 2}} ref={providingDockerImage} id="providingDockerImage">
                    <Typography variant="h6" component="div" sx={{color: "white", fontWeight: "bold", textAlign: "left", paddingBottom: 1, marginTop: 2, paddingLeft: 2}}>
                        Providing Your Docker Image
                    </Typography>
                    <Typography variant="p" component="div" sx={{color: "white", textAlign: "left", paddingLeft: 2, paddingRight: 2}}>
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                    </Typography>
                </Box>
                <br></br>
                <Box sx={{paddingLeft: 2, paddingRight: 2, marginBottom: 2}} ref={analyzingDockerImage} id="analyzingDockerImage">
                    <Typography variant="h6" component="div" sx={{color: "white", fontWeight: "bold", textAlign: "left", paddingBottom: 1, marginTop: 2, paddingLeft: 2}}>
                        Analysis and Recommendations
                    </Typography>
                    <Typography variant="p" component="div" sx={{color: "white", textAlign: "left", paddingLeft: 2, paddingRight: 2}}>
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                    </Typography>
                </Box>
                <br></br>
                <Box sx={{paddingLeft: 2, paddingRight: 2, marginBottom: 2}} ref={understandingDockerfile} id="understandingDockerfile">
                    <Typography variant="h6" component="div" sx={{color: "white", fontWeight: "bold", textAlign: "left", paddingBottom: 1, marginTop: 2, paddingLeft: 2}}>
                        Understanding You Optimized Dockerfile
                    </Typography>
                    <Typography variant="p" component="div" sx={{color: "white", textAlign: "left", paddingLeft: 2, paddingRight: 2}}>
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                    </Typography>
                </Box>
                <br></br>
                <Box sx={{paddingLeft: 2, paddingRight: 2, marginBottom: 2}} ref={applyingOptimizations} id="applyingOptimizations">
                    <Typography variant="h6" component="div" sx={{color: "white", fontWeight: "bold", textAlign: "left", paddingBottom: 1, marginTop: 2, paddingLeft: 2}}>
                        Applying Optimizations
                    </Typography>
                    <Typography variant="p" component="div" sx={{color: "white", textAlign: "left", paddingLeft: 2, paddingRight: 2}}>
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                    </Typography>
                </Box>
                <br></br>
                <Box sx={{paddingLeft: 2, paddingRight: 2, marginBottom: 2}} ref={exampleDockerfile} id="exampleDockerfile">
                    <Typography variant="h6" component="div" sx={{color: "white", fontWeight: "bold", textAlign: "left", paddingBottom: 1, marginTop: 2, paddingLeft: 2}}>
                        Example: Optimizing a Sample Project
                    </Typography>
                    <Typography variant="p" component="div" sx={{color: "white", textAlign: "left", paddingLeft: 2, paddingRight: 2}}>
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, sit amet ultricies nis"}
                    </Typography>
                </Box>
            </Paper>
        </Box>
    )
}

export default Docs;
import React, { useState } from 'react';
import { analyzePost } from '../api/apiCalls';
import TextField from '@mui/material/TextField';
import MButton from '../components/Buttons/MediumButton';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LoadingScreen from '../components/LoadingScreen';


function Optimizer() {
    const [imageName, setImageName] = useState('');
    const [dockerFile, setDockerFile] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [apiFeedback, setApiFeedback] = useState(null);

    const handleOptimize = async () => {
        if (imageName.trim() && dockerFile.trim()) {
            setIsLoading(true);
            try {
                const response = await analyzePost(imageName, dockerFile);
                setApiFeedback(response); // Assuming the API sends back some feedback
                console.log(response);
            } catch (error) {
                console.error('There was an error sending the data to the API', error);
                setApiFeedback("Error: Couldn't optimize the Docker image. Please try again later.");
            }
            setIsLoading(false);
        } else {
            alert('Please fill in both fields.');
        }
    };

    if (isLoading) {
        // Render loading animation
        return (
            <LoadingScreen message={"Please wait while we optimize your Dockerfile. This may take up to 5 minutes...."}/>
        );
    }

    if (apiFeedback) {
        // Render feedback
        return (
            <div className="min-h-screen h-auto w-full bg-primarydark flex items-center justify-content-center overscroll-y-auto">
            <div className="p-10 max-w-2xl mx-auto w-1/2 bg-secondarydark rounded-xl shadow-lg flex flex-col items-center justify-content-center space-y-6">
                {apiFeedback.analysis}
            </div>
            </div>
        );
    }

    // Render the form
    return (
        <Box sx={{ my: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", height: "100%", width: "100%" }} className="bg-transparent">
            <Card sx={{ maxWidth: 900, width: "50%",margin: "40px"}}>
                <CardContent>
                <TextField
                    required
                    id="outlined-required"
                    label="Image Name"
                    fullWidth
                    value={imageName}
                    onChange={(e) => setImageName(e.target.value)}
                    sx={{
                        '& label.Mui-focused': {
                            color: '#4f46e5', // Label color when focused
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#cbd5e1', // Border color
                            },
                            '&:hover fieldset': {
                                borderColor: '#cbd5e1', // Border color when hovered (optional)
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#4f46e5', // Border color when focused
                            },
                        },
                    }}
                />
                <TextField
                    required
                    id="outlined-multiline-static"
                    label="Dockerfile"
                    multiline
                    rows={12}
                    fullWidth
                    value={dockerFile}
                    onChange={(e) => setDockerFile(e.target.value)}
                    sx={{
                        margin: '1rem 0',
                        '& label.Mui-focused': {
                            color: '#4f46e5', // Label color when focused
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#cbd5e1', // Border color
                            },
                            '&:hover fieldset': {
                                borderColor: '#cbd5e1', // Border color when hovered (optional)
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#4f46e5', // Border color when focused
                            },
                        },
                    }}
                />
                <MButton text={"Optimize"} onClick={handleOptimize} />
                </CardContent>
            </Card>
        </Box>
    );
}

export default Optimizer;

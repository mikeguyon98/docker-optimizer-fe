import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MButton from '../components/Buttons/MediumButton';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress'; // Import a loading component from MUI

function Optimizer() {
    const [imageName, setImageName] = useState('');
    const [dockerFile, setDockerFile] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [apiFeedback, setApiFeedback] = useState(null);

    const handleOptimize = async () => {
        if (imageName.trim() && dockerFile.trim()) {
            setIsLoading(true);
            try {
                const response = await axios.post('YOUR_API_ENDPOINT', {
                    imageName,
                    dockerFile
                });
                setApiFeedback(response.data); // Assuming the API sends back some feedback
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
            <div className="flex justify-center items-center h-screen">
                <CircularProgress color="inherit" />
            </div>
        );
    }

    if (apiFeedback) {
        // Render feedback
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-white">
                    {apiFeedback}
                </div>
            </div>
        );
    }

    // Render the form
    return (
        <div className="h-screen w-full bg-primarydark flex items-center justify-content-center">
            <div className="p-10 max-w-2xl mx-auto w-1/2 bg-secondarydark rounded-xl shadow-lg flex flex-col items-center justify-content-center space-y-6">
                <TextField
                    required
                    id="outlined-required"
                    label="Image Name"
                    fullWidth
                    value={imageName}
                    onChange={(e) => setImageName(e.target.value)}
                    sx={{
                        input: {
                            color: '#cbd5e1', // Text color
                        },
                        label: {
                            color: '#cbd5e1', // Label color
                        },
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
                        '& .MuiInputBase-input': { // Increased specificity for the input base
                            color: '#cbd5e1', // Text color
                        },
                        input: {
                            color: '#cbd5e1', // Text color
                        },
                        label: {
                            color: '#cbd5e1', // Label color
                        },
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
            </div>
        </div>
    );
}

export default Optimizer;

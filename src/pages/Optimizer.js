import React from 'react';
import TextField from '@mui/material/TextField';
import MButton from '../components/Buttons/MediumButton';

function Optimizer() {


    return (
        <div className="h-screen w-full bg-primarydark flex items-center justify-content-center">
            <div className="p-10 max-w-2xl mx-auto w-1/2 bg-secondarydark rounded-xl shadow-lg flex flex-col items-center justify-content-center space-y-6">  {/* Adjusted classes here */}
                <div className="text-xl font-sans font-medium text-slate-300">Docker Image Optimizer</div>
                <TextField
                    required
                    id="outlined-required"
                    label="Image Name"
                    fullWidth
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
                <MButton text={"Optimize"}></MButton>
            </div>
        </div>
    )
}

export default Optimizer;

import React from 'react';
import TextField from '@mui/material/TextField';

function Optimizer() {
    return (
        <div className="h-screen w-full bg-primarydark flex items-center justify-content-center">
            <div className="p-20 max-w-md mx-auto bg-secondarydark rounded-xl shadow-lg flex flex-col items-center justify-content-center space-y-6">  {/* Adjusted classes here */}
                <div className="text-xl font-sans font-medium text-white">Docker Image Optimizer</div>
                <TextField
                    required
                    id="outlined-required"
                    label="Image Name"
                    sx={{
                        input: {
                            color: 'white', // Text color
                        },
                        label: {
                            color: 'white', // Label color
                        },
                        '& label.Mui-focused': {
                            color: '#4f46e5', // Label color when focused
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white', // Border color
                            },
                            '&:hover fieldset': {
                                borderColor: 'white', // Border color when hovered (optional)
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#4f46e5', // Border color when focused
                            },
                        },
                    }}
                />
            </div>
        </div>
    )
}

export default Optimizer;

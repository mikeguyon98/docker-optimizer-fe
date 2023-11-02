import React from "react";
import { TextField } from "@mui/material";


function SRTextField(props) {
    const { label, placeholder } = props;
    return (
        <div className="p-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"> {/* Gradient Border */}
            <TextField
                required
                id="outlined-required"
                label={label}
                defaultValue={placeholder}
                sx={{
                    background: '#2f2f2f', // Remove the background color
                    width: '100%', // Match the parent's width
                    input: {
                        color: 'white', // Text color
                    },
                    label: {
                        color: 'white', // Label color
                    },
                    '& label.Mui-focused': {
                        color: 'white', // Label color when focused
                    },
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 'inherit', // Inherit border radius from parent
                        '& fieldset': {
                            borderColor: '#2f2f2f', // Border color
                        },
                        '&:hover fieldset': {
                            borderColor: '#2f2f2f', // Border color when hovered (optional)
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'transparent', // Make border transparent when focused
                        },
                    },
                }}
            />
        </div>
    )
}

export default SRTextField;
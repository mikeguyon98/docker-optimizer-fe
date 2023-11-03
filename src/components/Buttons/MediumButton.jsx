import React from "react";
import { motion } from "framer-motion";


const MButton = ({
    text,
    onClick
  }) => {
    return (
        <button
            onClick={onClick}
            className="px-3 py-1 rounded-md relative text-slate-300 transition-colors
            hover:bg-gradient-to-r hover:from-violet-800 hover:to-indigo-800
            bg-gradient-to-r from-violet-600 to-indigo-600 hover:shadow-lg hover:text-white"
            >
            <span>
                {text}
            </span>
        </button>
    );
  };

export default MButton;
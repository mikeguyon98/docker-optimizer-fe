import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const tabs = ["Home", "Docs", "Optimizer", "FAQ"];

const ChipTabs = () => {
  const location = useLocation(); // Get the current location
  const currentPath = location.pathname.slice(1); // Remove the leading slash
  
  // Find the matching tab based on the current path or default to the first tab
  const defaultTab = tabs.find(tab => tab.toLowerCase() === currentPath) || tabs[0];
  const [selected, setSelected] = useState(defaultTab);

  return (
    <div className="px-4 py-3 bg-secondarydark flex items-center flex-wrap gap-2">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
}) => {
  return (
    <Link to={`/${text.toLowerCase()}`} key={text}>
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-600"
      } text-bold font-sans transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </button>
    </Link>
  );
};

export default ChipTabs;
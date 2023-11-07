import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  BrowserRouter,
  Link,
} from "react-router-dom";
import * as React from 'react';

import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Navbar from "./components/NavBar";
import Optimizer from "./pages/Optimizer";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import { Button } from "@mui/material";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function App() {
  return (
    <BrowserRouter>
    <React.Fragment>
      <HideOnScroll >
        <AppBar sx={{ bgcolor: '#2f2f2f' }}>
          <Toolbar >
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            DIA
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '1rem', justifyContent: 'space-evenly', p: '1rem'}}>
            <Button variant="text">
            <Link to="/home">
              <Typography variant="h6" noWrap component="div" sx={{ color: "white" }}>
                Home
              </Typography>
            </Link>
            </Button>
            <Button variant="text">
            <Link to="/optimizer">
              <Typography variant="h6" noWrap component="div" sx={{ color: "white" }}>
                Optimizer
              </Typography>
            </Link>
            </Button>
            <Button variant="text">
            <Link to="/docs">
              <Typography variant="h6" noWrap component="div" sx={{ color: "white" }}>
                Docs
              </Typography>
            </Link>
            </Button>
          </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container 
        sx={{ 
          bgcolor: '#161616', 
          padding: 0, 
          margin: 0, 
          justifyContent: "center", 
          alignItems: "center", 
          width: "100vw", // Sets the width to 100% of the viewport width
          maxWidth: "100vw", // Allows the Container to stretch fully
          minWidth: "100vw", // Allows the Container to stretch fully
          border: "1px solid #161616",
          overscrollBehavior: "none",
        }}
      >
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/optimizer" element={<Optimizer />} />
        </Routes>
    </Container>
    </React.Fragment>
    </BrowserRouter>
  )
}

export default App;

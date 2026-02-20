import { Button, CssBaseline } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Footer from '@/components/footer';
import Home from './home';
import About from './about';
import styles from "./MainPage.module.css";
import Contact from './contact';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    })
    : null;
}

ElevationScroll.propTypes = {
  children: PropTypes.element,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const mainPage = (props) => {
  const [active, setActive] = useState('home')

  const sections = ["home", "About", "contact"]

 useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id)
        }
      })
    },
    {
      threshold: 0.3,
      rootMargin: "-80px 0px -40% 0px"
    }
  )

  sections.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })

  return () => observer.disconnect()
}, [])


  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="fixed" className={styles.appbar}>
          <Toolbar className={styles.toolbar}>

            <div className={styles.navContainer}>
              {sections.map((sec) => {
                const isActive = active === sec;

                return (
                  <Button
                    key={sec}
                    href={`#${sec}`}
                    className={`${styles.navBtn} ${isActive ? styles.active : ""}`}
                  >
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </Button>
                );
              })}
            </div>

          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <Toolbar />
      <Container>
        {/* {sections.map((sec) => (
          <Box
            id={sec}
            key={sec}
            sx={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor:
                home
                  ? "#f0f0f0"
                  : sec === "about"
                    ? "#e8f5e9"
                    : sec === "services"
                      ? "#e3f2fd"
                      : "#fce4ec",
            }}
          >
            <Typography variant="h4">{sec.toUpperCase()} SECTION</Typography>
            {sec === "home" && <Home/>}
          </Box>
        ))} */}
        <Home />
        <About />
        <Contact/>
        {/* <Footer/> */}
      </Container>
    </React.Fragment>
  )
}

export default mainPage
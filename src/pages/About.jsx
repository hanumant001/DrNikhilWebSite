import { Container, Grid, Typography, Chip, Paper } from "@mui/material";
import React from "react";
import Image from "next/image";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="About" className={styles.section}>
      <Container>
        <Grid container spacing={6} alignItems="center" justifyContent='center'>

          <Grid item xs={12} md={5} className={styles.imageGrid}>
            <div className={styles.imageWrapper}>
              <Image
                src="/doctorAboutAvatar.png"
                alt="Doctor"
                width={400}
                height={400}
                className={styles.image}
              />
            </div>
          </Grid>

          <Grid item xs={12} md={7}>

            <Typography variant="h4" fontWeight={800} mb={2}>
              Dr. Nikhil Tiwari
            </Typography>

            <div className={styles.chipContainer}>
              <Chip label="Surgical Oncologist" color="primary" />
              <Chip label="Cancer Specialist" color="success" />
              <Chip label="Robotic Surgery Expert" color="secondary" />
            </div>

            <Paper elevation={2} className={styles.paperSmall}>
              <Typography fontWeight={600}>
                🏆 10+ Years Clinical Experience
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Successfully treated 5000+ patients with advanced surgical procedures.
              </Typography>
            </Paper>

            <Typography variant="h6" fontWeight={700} mb={2}>
              Qualifications
            </Typography>

            <div className={styles.qualifications}>
              <Chip label="MBBS — AIIMS Delhi (2008)" variant="outlined" />
              <Chip label="MS Surgery — PGIMER (2013)" variant="outlined" />
              <Chip label="MCh Oncology — Tata Memorial (2017)" variant="outlined" />
            </div>

            <Paper elevation={3} className={styles.paperCard}>
              <Typography fontWeight={700}>
                Current Position
              </Typography>

              <Typography color="text.secondary">
                Consultant Surgical Oncologist
              </Typography>

              <Chip label="Radon Cancer Hospital" className={styles.mt2} color="info" />
            </Paper>

          </Grid>

        </Grid>
      </Container>
    </section>
  );
};

export default About;

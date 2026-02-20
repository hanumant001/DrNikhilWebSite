import React from "react";
import Image from "next/image";
import { Grid, Button, Container } from "@mui/material";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section id="home" className={styles.section}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={5} className={styles.imageGrid}>
            <div className={styles.imageWrapper}>
              <Image
                src="/doctor.png"
                alt="Doctor"
                width={400}
                height={400}
                className={styles.image}
              />
            </div>
          </Grid>

          <Grid item xs={12} md={7}>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>Dr. Nikhil Tiwari</h1>
              <p className={styles.degree}>MBBS, MS, MCh</p>
              <p className={styles.specialist}>Surgical Oncologist</p>
              <p className={styles.description}>
                Compassionate cancer care with advanced treatment and
                patient-focused healing.
              </p>

              <Button variant="contained" size="large" onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth"
                });
              }} className={styles.button}>
                Book Appointment
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Home;

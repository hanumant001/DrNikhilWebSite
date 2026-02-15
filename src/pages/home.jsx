import React from "react";
import Image from "next/image";
import { Grid, Button, Container } from "@mui/material";

const Home = () => {
  return (
    <section className="bg-slate-100 min-h-screen flex items-center">
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          {/* Image Section */}
          <Grid item xs={12} md={5} className="flex justify-center">
            {/* <div className="w-44 h-44 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl border-4 border-white"> */}
              <div className="relative w-44 h-44 md:w-72 md:h-72 rounded-full overflow-hidden">
              <Image
                src="/doctor.png"
                alt="Doctor"
                width={300}
                height={300}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </Grid>



          {/* Content Section */}
          <Grid item xs={12} md={7}>
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2">
                Dr. Nikhil Tiwari
              </h1>

              <p className="text-slate-600 text-sm md:text-base mb-1">
                MBBS, MD, MCh
              </p>

              <p className="text-slate-500 text-base mb-3">
                Surgical Oncologist
              </p>

              <p className="text-slate-500 text-sm md:text-lg mb-6 leading-relaxed">
                Compassionate cancer care with advanced treatment and
                patient-focused healing.
              </p>

              <Button
                variant="contained"
                size="large"
                className="!rounded-full !px-8 !py-3 !text-base !font-semibold"
              >
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

import React from "react";
import Image from "next/image";
import { Box, Button, Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "#f1f5f9",
        py: { xs: 6, md: 0 }
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 4, md: 8 },
            textAlign: { xs: "center", md: "left" }
          }}
        >
          {/* Doctor Image */}
          <Box
            sx={{
              width: { xs: 180, sm: 220, md: 350 },
              height: { xs: 180, sm: 220, md: 420 },
              borderRadius: { xs: "50%", md: "20px" },
              overflow: "hidden",
              boxShadow: "0 15px 40px rgba(0,0,0,0.1)"
            }}
          >
            <Image
              src="/doctor.png"
              width={400}
              height={500}
              alt="Doctor"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>

          {/* Content */}
          <Box sx={{ maxWidth: 500 }}>
            <Typography
              sx={{
                fontSize: { xs: 22, sm: 26, md: 36 },
                fontWeight: 700,
                color: "#0f172a",
                mb: 1
              }}
            >
              Dr. Nikhil Tiwari
            </Typography>

            <Typography sx={{ color: "#475569", mb: 1 }}>
              MBBS, MD, MCh
            </Typography>

            <Typography sx={{ color: "#64748b", mb: 2 }}>
              Surgical Oncologist
            </Typography>

            <Typography sx={{ color: "#64748b", mb: 3 }}>
              Compassionate cancer care with advanced treatment and
              patient-focused healing.
            </Typography>

            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{
                borderRadius: "30px",
                py: 1.5,
                fontWeight: 600,
                textTransform: "none",
                fontSize: 16
              }}
            >
              Book Appointment
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;

"use client";
import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
  CircularProgress,
} from "@mui/material";
import styles from "./Contact.module.css";


export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: '',
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // const isFormValid =
  //   form.name.trim().length > 2 &&
  //   form.phone.length === 10 &&
  //   isValidEmail(form.email) &&
  //   form.message.trim().length > 10;
  const isFormValid =
    form.name.trim().length > 2 &&
    /^\d{10}$/.test(form.phone) &&
    isValidEmail(form.email) &&
    form.message.trim().length > 10;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setForm({ name: "", phone: '', email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <Container className="demo" sx={{paddingLeft:'8px',paddingRight:'8px'}}>
        <Paper elevation={6} className={styles.card}>

          <Typography variant="h4" className={styles.title}>
            Contact Doctor
          </Typography>

          <Typography className={styles.subtitle}>
            Fill the form and our clinic will respond within 24 hours.
          </Typography>

          {status === "success" && (
            <Alert severity="success" className={styles.alert}>
              Message sent successfully ✔
            </Alert>
          )}

          {status === "error" && (
            <Alert severity="error" className={styles.alert}>
              Something went wrong. Try again.
            </Alert>
          )}

          <form onSubmit={handleSubmit} className={styles.form}>


            <TextField
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={form.name !== "" && form.name.length < 3}
              helperText={
                form.name !== "" && form.name.length < 3
                  ? "Minimum 3 characters"
                  : ""
              }
              fullWidth
            />
            <TextField
              label="Phone Number"
              name="phone"
              value={form.phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 10)
                  setForm({ ...form, phone: value });
              }}
              error={form.phone !== "" && !/^\d{10}$/.test(form.phone)}
              helperText={
                form.phone !== "" && !/^\d{10}$/.test(form.phone)
                  ? "Phone number must be 10 digits"
                  : ""
              }
              fullWidth
            />


            <TextField
              label="Email Address"
              name="email"
              value={form.email}
              onChange={handleChange}
              error={form.email !== "" && !isValidEmail(form.email)}
              helperText={
                form.email !== "" && !isValidEmail(form.email)
                  ? "Enter valid email"
                  : ""
              }
              fullWidth
            />

            <TextField
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              multiline
              rows={4}
              inputProps={{ maxLength: 500 }}
              helperText={`${form.message.length}/500`}
              fullWidth
            />

            <Button
              type="submit"
              variant="contained"
              disabled={!isFormValid || loading}
              className={styles.button}
            >

              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Send Message"
              )}
            </Button>

          </form>
        </Paper>
      </Container>
    </section>
  );
}

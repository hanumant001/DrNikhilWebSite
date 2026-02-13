import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        primary: {
            main: "#0284c7",      // calm medical blue
            light: "#38bdf8",
            dark: "#0369a1",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#10b981",      // healing green
            light: "#6ee7b7",
            dark: "#047857",
            contrastText: "#ffffff",
        },
        background: {
            default: "#f8fafc",   // soft gray-blue background
            paper: "#ffffff",
        },
        text: {
            primary: "#1e293b",   // dark blue-gray
            secondary: "#475569", // soft gray
        },
    },

    typography: {
        fontFamily: "'Poppins', 'Roboto', sans-serif",
        h1: {
            fontWeight: 700,
            fontSize: "2.5rem",
            lineHeight: 1.3,
        },
        h2: {
            fontWeight: 600,
            fontSize: "2rem",
            lineHeight: 1.4,
        },
        h3: {
            fontWeight: 600,
            fontSize: "1.5rem",
        },
        h4: {
            fontWeight: 600,
            fontSize: "1.2rem",
        },
        body1: {
            fontSize: "1rem",
            lineHeight: 1.6,
        },
        body2: {
            fontSize: "0.9rem",
            lineHeight: 1.5,
            color: "#475569",
        },
        button: {
            textTransform: "none",
            fontWeight: 500,
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "25px",
                    textTransform: "none",
                    fontWeight: 500,
                    padding: "8px 20px",
                },
            },
        },
    },

    breakpoints: {
        values: {
            xs: 0,
            sm: 480,   // Small mobiles
            md: 768,   // Tablets
            lg: 1024,  // Laptops
            xl: 1440,  // Large screens
        },
    },
});

// Make typography scale with screen size
theme = responsiveFontSizes(theme);

export default theme;

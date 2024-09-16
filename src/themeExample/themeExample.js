import React, { useState } from "react";
import { createTheme, ThemeProvider, CssBaseline, Button } from "@mui/material"; // Import missing components

function ThemedApp() {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light", // Define the dark/light mode in the palette
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div style={{ padding: 20 }}>
                <Button variant="contained" onClick={() => setDarkMode(!darkMode)}>
                    Toggle {darkMode ? "Light" : "Dark"} Mode
                </Button>
            </div>
        </ThemeProvider>
    );
}

export default ThemedApp;

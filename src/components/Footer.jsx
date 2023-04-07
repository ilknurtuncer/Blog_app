import * as React from "react";
import Container from "@mui/material/Container";
// import Image from "next/image";
// import Link from "@/src/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { green } from "@mui/material/colors";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailTwoToneIcon from "@mui/icons-material/AlternateEmailTwoTone";
import { IconButton } from "@mui/material";
// import { Link } from "react-router-dom";
function Footer() {
  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 60px)",
        width: "100%",
        position: "fixed",
        bottom: 0,
       
        backgroundColor: green["900"],
        color: "pink",
      }}
      component="footer"
      square
      variant="outlined"
      color="primary"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <div>
            {/* <Image priority src="/Logo.svg" width={75} height={30} alt="Logo" /> */}
          </div>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography>Developed By Fs Team</Typography>
          <Box>
            <IconButton
              sx={{ color: "pink" }}
              onClick={() => window.open("https://github.com/Ilknurtuncer")}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              sx={{ color: "pink" }}
              onClick={() =>
                window.open(
                  "http://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
                )
              }
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              sx={{ color: "pink" }}
              onClick={() => window.open("https://medium.com/@ilknurtuncer67")}
            >
              <AlternateEmailTwoToneIcon />
            </IconButton>
          </Box>

          <Typography variant="caption">
            Copyright ©️ {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}

export default Footer;

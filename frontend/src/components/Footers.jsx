import { Grid, Typography } from "@mui/material";
import { blue, green } from "@mui/material/colors";
import React from "react";
import Link from "@mui/material/Link";

const styles = {
  width: "100%",
  height: "5vh",
  padding: "15px",
  backgroundColor: blue[900],
  color: "white",
};

const Footers = () => {
  return (
    <div style={styles}>
      <Typography
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <small>
            ©{" "}
            <Link
              color="inherit"
              href="https://baykartech.com/tr/"
              target="true"
            >
              2015-{new Date().getFullYear()} BAYKAR TECH
            </Link>{" "}
          </small>{" "}
        </Grid>
      </Typography>
    </div>
  );
};

export default Footers;

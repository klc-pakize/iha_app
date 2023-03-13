import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { blue } from "@mui/material/colors";

const About = () => {
  return (
    <div style={{ minHeight: "71vh" }}>
      <Card
        sx={{
          width: 345,
          height: "55vh",
          margin: "10rem auto 2rem auto ",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          bgcolor: blue[900],
        }}
      >
        <img
          src="https://cdn.baykartech.com/media/images/contents/Baykar-Logo.svg"
          alt="Baykar"
        />
        <CardContent>
          <Typography
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              href="https://www.linkedin.com/company/baykar/"
              target="true"
            >
              <LinkedInIcon
                sx={{
                  color: "black",
                  "&:hover": { color: "blue" },
                  fontSize: 35,
                }}
              />
            </IconButton>
            <IconButton href="https://twitter.com/BaykarTech" target="true">
              <TwitterIcon
                sx={{
                  color: "black",
                  "&:hover": { color: "blue" },
                  fontSize: 35,
                }}
              />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/baykartech/"
              target="true"
            >
              <InstagramIcon
                sx={{
                  color: "black",
                  "&:hover": { color: "red" },
                  fontSize: 35,
                }}
              />
            </IconButton>
            <IconButton
              href="https://www.youtube.com/@BaykarTechnologies"
              target="true"
            >
              <YouTubeIcon
                sx={{
                  color: "black",
                  "&:hover": { color: "red" },
                  fontSize: 35,
                }}
              />
            </IconButton>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;

import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Button, Container } from "@mui/material";
import { useBlogContext } from "../context/BlogContext";

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "2rem",
};

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ihaDetail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { state } = useAuthContext();
  const { getBlogs } = useBlogContext();
  const currentUser = state && state.currentUser;

  const getDetailData = async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/ihas/${id}/`,
        { headers: { Authorization: `Token ${state.token}` } }
      );
      setDetail(data);
      console.log(data);
      setLoading(false);
      getBlogs();
    } catch (error) {
      setLoading(true);
    }
  };

  useEffect(() => {
    getDetailData();
  }, [currentUser]);

  const handleSubmit = () => {
    navigate(`/reservation/${id}`);
  };

  return (
    <Container sx={{ minHeight: "90vh" }}>
      {loading ? (
        <Box sx={styles}>
          <CircularProgress sx={{ fontSize: 50 }} />
        </Box>
      ) : (
        <Box style={styles}>
          <Box
            sx={{
              maxWidth: { xs: "100%", sm: "80%", md: "70%" },
              minWidth: { xs: "100%", sm: "80%", md: "40%" },
              marginX: "auto",
            }}
          >
            <CardMedia
              height="500px"
              component="img"
              image={ihaDetail.image}
              alt={ihaDetail.brand}
              sx={{ objectFit: "contain" }}
            />
            <CardHeader title={ihaDetail.brand} />
            <CardContent>
              <Typography component="h1" color="text.info">
                Model Name: {ihaDetail.model_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Air Stay Time: {ihaDetail.air_stay_time}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cruise Speed: {ihaDetail.cruise_speed}{" "}
                {ihaDetail.cruise_speed_unit}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Useful Load Capacity: {ihaDetail.useful_load_capacity}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Communication Range {ihaDetail.communication_range}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Wingspan: {ihaDetail.wingspan} m
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Length: {ihaDetail.length} m
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSubmit()}
            >
              Make a reservation
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default BlogDetail;

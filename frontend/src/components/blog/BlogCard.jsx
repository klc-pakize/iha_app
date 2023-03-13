import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ item }) => {
  const { id, brand, model_name, image } = item;
  const navigate = useNavigate();
  console.log(id);
  return (
    <Card
      sx={{
        width: "350px",
        m: "10px",
        minheight: "500px",
        maxHeight: "500px",
        cursor: "pointer",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      }}
      onClick={() => navigate(`/detail/${id}`)}
    >
      <Typography
        component="div"
        sx={{ display: "flex", justifyContent: "center", mt: 2 }}
      >
        <img
          height="150"
          src={image ? image : "https://www.w3schools.com/howto/img_avatar.png"}
          alt="img"
        />
      </Typography>
      <Typography component="div" sx={{ m: 0, mt: 1, width: "100%" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center", color: "darkgreen" }}
        >
          {brand.toUpperCase()}
        </Typography>
        <Typography
          component="div"
          variant="body2"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            m: 2,
          }}
        >
          {model_name ?? "No Content"}
        </Typography>
      </Typography>
    </Card>
  );
};

export default BlogCard;

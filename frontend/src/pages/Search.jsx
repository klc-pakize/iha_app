import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { Box } from "@mui/material";
import BlogCard from "../components/blog/BlogCard";
import "react-datepicker/dist/react-datepicker.css";

const Search = () => {
  const [searchDatas, setSearchDatas] = useState();
  const { state } = useAuthContext();
  const token = state && state.token;
  const location = useLocation();
  const searchData = location.state;
  console.log("sss", searchData);

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/api/ihas/?start=${searchData.formattedStartDate}&end=${searchData.formattedEndDate}&search=${searchData.searchWord}`,
      {
        method: "GET",
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setSearchDatas(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Box
        xs={{ d: "flex" }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
        sx={{ minHeight: "90vh" }}
      >
        {searchDatas?.map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </Box>
    </div>
  );
};

export default Search;

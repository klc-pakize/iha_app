import { useBlogContext } from "../context/BlogContext";
import { Box, colors } from "@mui/material";
import BlogCard from "../components/blog/BlogCard";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [searchWord, setSearchWord] = useState("");
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const navigate = useNavigate();
  const date = new Date(start);
  const dateEnd = new Date(end);
  const formattedStartDate = date.toLocaleDateString("fr-CA");
  const formattedEndDate = dateEnd.toLocaleDateString("fr-CA");

  const {
    ihas: { ihaList },
  } = useBlogContext();

  console.log("searchWord", searchWord);
  console.log("end", end);
  console.log("statr", start);

  const handleSearch = () => {
    const searchData = {
      formattedStartDate: formattedStartDate,
      formattedEndDate: formattedEndDate,
      searchWord: searchWord,
    };

    navigate("/search", { state: searchData });
  };

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
        <div className="input2">
          <div className="input">
            <label>Search</label>
            <input
              type="text"
              required
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
            />
            <label>Start Date</label>
            <Datepicker
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              selected={start}
              onChange={(e) => {
                setStart(e);
              }}
              dateFormat="yyyy-MM-dd"
              placeholderText="Start Date"
            />
            <label>End Date</label>
            <Datepicker
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              selected={end}
              onChange={(e) => {
                setEnd(e);
              }}
              dateFormat="yyyy-MM-dd"
              placeholderText="End Date"
            />
            <button
              className="button"
              onClick={handleSearch}
              disabled={searchWord ? false : true}
            >
              Search
            </button>
          </div>
        </div>
        {ihaList?.map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </Box>
    </div>
  );
};

export default Dashboard;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { blue } from "@mui/material/colors";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Card } from "@mui/material";

const Reservation = () => {
  const { id } = useParams();
  const { state } = useAuthContext();
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [reservationData, setReservationData] = useState();
  const navigate = useNavigate();
  const currentUser = state && state.currentUser;
  const token = state && state.token;
  const date = new Date(start);
  const dateEnd = new Date(end);
  const formattedStartDate = date.toLocaleDateString("fr-CA");
  const formattedEndDate = dateEnd.toLocaleDateString("fr-CA");

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      customer: currentUser.username,
      customer_id: currentUser.id,
      iha: id,
      start_date: formattedStartDate,
      end_date: formattedEndDate,
      approval: false,
    };

    fetch("http://127.0.0.1:8000/api/reservations/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("yenidata", data);
        setReservationData(data);
        setSuccessMessage("");
        setTimeout(() => navigate("/dashboard"), 3000);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    setSuccessMessage("");
    setReservationData();
  }, []);

  useEffect(() => {
    if (reservationData !== undefined) {
      setSuccessMessage(
        "Your reservation request has been received. We will contact you as soon as possible."
      );
    }
  }, [reservationData]);

  return (
    <Card
      sx={{
        width: 345,
        height: "50vh",
        margin: "10rem auto 12rem auto ",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        bgcolor: blue[900],
      }}
    >
      <div className="reservationinput">
        <form onSubmit={handleSubmit}>
          <Datepicker
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            className="dateinput1"
            selected={start}
            onChange={(e) => {
              setStart(e);
            }}
            dateFormat="yyyy-MM-dd"
            placeholderText="Start Date"
          />
          <Datepicker
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            className="dateinput2"
            selected={end}
            onChange={(e) => {
              setEnd(e);
            }}
            dateFormat="yyyy-MM-dd"
            placeholderText="End Date"
          />
          <p className="message">{successMessage}</p>
          <button className="button" type="submit">
            Send
          </button>
        </form>
      </div>
    </Card>
  );
};

export default Reservation;

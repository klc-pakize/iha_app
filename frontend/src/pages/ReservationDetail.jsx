import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

const ReservationDetail = () => {
  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "15rem 51rem 0rem 1rem",
  };
  const { state } = useAuthContext();
  const token = state && state.token;
  const [reservationDatas, setReservationDatas] = useState();
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/reservations/", {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setReservationDatas(data))
      .catch((error) => console.error(error));
  }, []);
  console.log("reseda", reservationDatas);
  return (
    <div>
      <Container sx={{ minHeight: "90vh" }}>
        <Box style={styles}>
          <Box
            sx={{
              maxWidth: { xs: "100%", sm: "80%", md: "70%" },
              minWidth: { xs: "100%", sm: "80%", md: "40%" },
              marginX: "auto",
            }}
          >
            {reservationDatas?.map((item) => {
              return (
                <CardContent>
                  <Typography
                    className="dateinput1"
                    component="h1"
                    color="text.info"
                  >
                    Customer Name: {item.customer}
                  </Typography>
                  <Typography
                    className="dateinput1"
                    variant="body2"
                    color="text.secondary"
                  >
                    Start {item.start_date}
                  </Typography>
                  <Typography
                    className="dateinput1"
                    variant="body2"
                    color="text.secondary"
                  >
                    End Date : {item.end_date}
                  </Typography>
                </CardContent>
              );
            })}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default ReservationDetail;

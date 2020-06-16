import React from "react";
import Typography from "@material-ui/core/Typography";

const Home = props => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start"
      }}>
      <Typography variant="h3">
          Bem vindo ao sistema!
        </Typography>
    </div>
  );
};

export default (Home);

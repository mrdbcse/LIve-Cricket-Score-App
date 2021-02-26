import { Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getMatches } from "./API/Api";
import "./App.css";
import MyCard from "./Components/MyCard";
import Navbar from "./Components/Navbar";

const App = () => {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatches(data.matches);
        console.log(data.matches);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Typography
        variant="h3"
        style={{
          marginTop: 20,
        }}
      >
        Welcome to Live Cricket Score App 🏏
      </Typography>

      <Grid container>
        <Grid sm={2}></Grid>
        <Grid sm={8}>
          {matches.map((match) => (
            <MyCard key={match.unique_id} match={match} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;

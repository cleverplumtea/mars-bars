import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({}));

const Images = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [image, setImage] = useState("");
  const [date, setDate] = useState(2999);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const request = async () => {
      const res = await axios(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${date}&camera=fhaz&api_key=vDaQJdr6dgXmGczRScqjafQlSg81cOYbvmqv8839`
      );
      console.log(res);
      setImage(res.data.photos[0].img_src);
      // console.log(res.data.photos[0].img_src);
    };
    request();
  }, [date]);

  return (
    <React.Fragment>
      <div>
        <form>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Enter an Earth Date or Martian Sol"
          />
          {/* <button type="submit" onClick={() => setSearch(date)}>
            Search
          </button> */}
        </form>
      </div>
      <img src={image} />
    </React.Fragment>
  );
};

export default Images;

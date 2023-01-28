import React from "react";
import Main from "../components/Main";
import MoviesSlider from "../components/MoviesSlider";
import requests from "../Requests";
const Home = () => {
  return (
    <>
      <Main />
      <MoviesSlider
        rowID="1"
        title="Upcoming"
        fetchUrl={requests.requestUpcoming}
      />
      <MoviesSlider
        rowID="2"
        title="Popular"
        fetchUrl={requests.requestPopular}
      />
      <MoviesSlider
        rowID="3"
        title="Trending"
        fetchUrl={requests.requestTrending}
      />
      <MoviesSlider
        rowID="4"
        title="Top Rated"
        fetchUrl={requests.requestTopRated}
      />
      <MoviesSlider
        rowID="5"
        title="Horror"
        fetchUrl={requests.requestHorror}
      />
    </>
  );
};

export default Home;

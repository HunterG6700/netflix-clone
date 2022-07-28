import React from 'react';
import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl = {requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl = {requests.fetchTopRated} />
      <Row title= "Animated Movies And Tv" fetchUrl = {requests.fetchAnimatedTv} />
      <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl = {requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl = {requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl = {requests.fetchDocumentaries} />
      <Row title ="Family And Kids" fetchUrl = {requests.fetchFamilyTv} />
      
      <Row title="Top Rated Tv" fetchUrl = {requests.fetchTopRatedTv} />
      <Row title="Action & Adventure Tv" fetchUrl = {requests.fetchActionAdventureTv} />
      <Row title="Comedy Tv" fetchUrl = {requests.fetchComedyTv} />

      
   

 

    </div>
  );
}

export default App;

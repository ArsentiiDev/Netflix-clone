import React from 'react'
import requests from '../../FetchData/Requests'
import Banner from '../../Components/Banner/Banner'
import './homescreen.css'
import Nav from '../../Components/NavBar/Nav'
import Row from '../../Components/Row/Row'

function HomeScreen() {
    return (
        <div className="homeScreen">
        {/* Nav */}
        <Nav/>

        {/* Banner */}
        <Banner />
        
        {/* Row */}
        <Row 
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
        />
        <Row 
            title="Top Rated"
            fetchUrl={requests.fetchTopRated}
           
        />
        <Row 
            title="Action Movies"
            fetchUrl={requests.fetchActionMovies}
     
        />
        <Row 
            title="Comedy Movies"
            fetchUrl={requests.fetchComedyMovies}
            
        />
        <Row 
            title="Romance Movies"
            fetchUrl={requests.fetchRomanceMovies}
            
        />
        <Row 
            title="Documentaries"
            fetchUrl={requests.fetchDocumentaries}
            
        />

            
        </div>
    )
}

export default HomeScreen

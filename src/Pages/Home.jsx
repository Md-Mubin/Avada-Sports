import React from 'react'
import Banner from '../Components/Banner/Banner'
import Navbar from '../Components/Navbar/Navbar'
import Discover from '../Components/Discover/Discover'
import Activities from '../Components/Activites/Activities'
import JoinClub from '../Components/JoinClub/JoinClub'
import Excitement from '../Components/Excitement/Excitement'
import News from '../Components/News/News'
import Brands from '../Components/Brands/Brands'

const Home = () => {
    return (
        <>
            <Banner />
            <Discover />
            <Activities />
            <JoinClub />
            <Excitement />
            <News />
            <Brands />
        </>
    )
}

export default Home
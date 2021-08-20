import React from 'react'
import HeroPage from '../HeroPage'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data';

function Home() {
    return (
        <div>
            <HeroPage {...homeObjOne}/>
            <HeroPage {...homeObjThree}/>
            <HeroPage {...homeObjTwo}/>
            <HeroPage {...homeObjFour}/>
        </div>
    )
}

export default Home

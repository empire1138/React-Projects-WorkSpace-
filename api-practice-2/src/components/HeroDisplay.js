import React from 'react'

 function HeroDisplay(heroResults) {
    
    const {data} = heroResults;
    console.log(data);
    return (
        <div>
         {/* <img src={data.image.url} alt="super pic" /> */}
        </div>
    )

    
}
export default HeroDisplay;
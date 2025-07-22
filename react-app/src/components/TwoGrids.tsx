import '../css/TwoGrids.css'
import guessWhosThat from '../assets/Guess the man.png'
import { useState } from 'react';


const TwoGrids = () => {
  
  const [alienRacesAppeared,setAlienRacesAppeared] = useState(new Set())
  
  const alienName = () =>{


    let alienRaces: string[] = ["Avian","Grey Alien","Brainy Martian","Reptilian","Xenomorph"]
    const random =  Math.floor(Math.random() * alienRaces.length)
    let alien: string = alienRaces[random]


    if (alienRacesAppeared.size === 5){
      console.log(alienRacesAppeared)
      alienRacesAppeared.clear()
    }
    else if (alienRacesAppeared.has(alien)){

      const filteredAlienRaces: string[] = alienRaces.filter(missedAliens => missedAliens !== alien && !Array.from(alienRacesAppeared).includes(missedAliens))
      const randomFiltered = Math.floor(Math.random() * filteredAlienRaces.length)
      const newAlien: string = filteredAlienRaces[randomFiltered]

      console.log(newAlien)
      alienRacesAppeared.add(newAlien)
    }
    else{
      alienRacesAppeared.add(alien)
      console.log(alien)
    };
  }

  return (
    <div className='two-column-layout'>
      
          <ol>
            <style>
                @import url('https://fonts.cdnfonts.com/css/battle-tough');
            </style>
            <h2 style={{
              marginTop: 40,
              marginBottom:40,
              textAlign: 'center',
              

            }}>Aliens Races</h2>

              <p>Avian</p>
              <p>Brainy Martian</p>
              <p>Grey-Alien</p>
              <p>Reptilian</p>
              <p>Xenomorph</p>
          </ol>
        
        <div>
            <p className='attempt-count'>0/5</p>
            <div 
            style={{
              marginTop:40,
              marginBottom:15,
              marginLeft: 80,
              
            }}
            className='card'>
              <img src={guessWhosThat} alt="Card Image" className="card-img"></img>
            </div>
       
            <div 
              className='wrapper'
              style={{
                marginLeft:85,
              }}>
              <input type="text" placeholder="Guess the alien race"/>
              <button onClick={alienName}> click </button>
            </div>
        </div>

    </div>
  )
};

export default TwoGrids;

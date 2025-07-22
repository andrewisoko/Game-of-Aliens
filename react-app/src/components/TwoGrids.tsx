import '../css/TwoGrids.css'
import guessWhosThat from '../assets/Guess the man.png'
import { useState,useEffect } from 'react';
import Modal from './Modal';



const TwoGrids = () => {


  const [alienRacesAppeared,setAlienRacesAppeared] = useState(new Set())
  const [userInput,setUserInput] = useState("")
  const [correctAnswer,setCorrectAnswer] = useState(false)
  const [correctAnswersCount,setCorrectAnswerCount] = useState(0)

  const alienName = () =>{

    // returns a sequence of random alien race's names without the repetition of each

    return "avian"
  }

    // let alienRaces: string[] = ["Avian","Grey Alien","Brainy Martian","Reptilian","Xenomorph"]
    // const random =  Math.floor(Math.random() * alienRaces.length)
    // let alien: string = alienRaces[random].toLowerCase()

    // if (alienRacesAppeared.size === 5){
    //   alienRacesAppeared.clear()
    //   return alien
    // }
    // else if (alienRacesAppeared.has(alien)){

    //   const filteredAlienRaces: string[] = alienRaces.filter(missedAliens => missedAliens !== alien && !Array.from(alienRacesAppeared).includes(missedAliens))
    //   const randomFiltered = Math.floor(Math.random() * filteredAlienRaces.length)
    //   const newAlien: string = filteredAlienRaces[randomFiltered].toLowerCase()

    //   alienRacesAppeared.add(newAlien)
    //   return newAlien
    // }
    // else{
    //   alienRacesAppeared.add(alien)
    //   return alien
    //   };
    // };
  
  const checkAnswers = () => {
    if (userInput.toLowerCase() === alienName()){
      setCorrectAnswerCount(correctAnswersCount + 1)
      if (correctAnswersCount === 5){
          setCorrectAnswerCount(5)
      }
         
    }else{
      console.log(`no buono ${alienName()}`)
    };
    
  };

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
            <p className='attempt-count'>{`${correctAnswersCount}/5`}</p>
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
              <input value={userInput} 
              onChange={newVal => setUserInput(newVal.target.value)} 
              placeholder="Guess the alien race" 
              type="text"/>
              <button onClick={checkAnswers}> click </button>
            </div>
        </div>
        <Modal/>
    </div>
  )
};

export default TwoGrids;

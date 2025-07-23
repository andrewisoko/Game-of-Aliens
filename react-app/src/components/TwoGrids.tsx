import '../css/TwoGrids.css'
import guessWhosThat from '../assets/Guess the man.png'
import { useState,useEffect} from 'react';
import Modal from './Modal';
// import AlienImages from './AlienImages';



const TwoGrids = () => {

  const [alienRacesAppeared,setAlienRacesAppeared] = useState(new Set())

  const [userInput,setUserInput] = useState("")
  const [imageDisplay,setImageDisplay] = useState("")

  const [correctAnswersCount,setCorrectAnswerCount] = useState(0)
  const [attemptCount,setAttemptCount] = useState(0)

  const [openModal,setOpenModal] = useState(false)
  const [gameOver,setGameOver] = useState(false)
  const [gameWin,setGameWin] = useState(false)


  const alienName = () =>{

    // returns a sequence of random alien race's names without the repetition of each

  //   return "martian"
  // }

    let alienRaces: string[] = ["Avian","Grey-Alien","Martian","Reptilian","Xenomorph"]
    const random =  Math.floor(Math.random() * alienRaces.length)
    let alien: string = alienRaces[random].toLowerCase()

    if (alienRacesAppeared.size === 5){
      alienRacesAppeared.clear()
      return alien
    }
    else if (alienRacesAppeared.has(alien)){

      const filteredAlienRaces: string[] = alienRaces.filter(missedAliens => missedAliens !== alien && !Array.from(alienRacesAppeared).includes(missedAliens))
      const randomFiltered = Math.floor(Math.random() * filteredAlienRaces.length)
      const newAlien: string = filteredAlienRaces[randomFiltered].toLowerCase()

      console.log(filteredAlienRaces)
      alienRacesAppeared.add(newAlien)
      return newAlien
    }
    else{
      alienRacesAppeared.add(alien)
      console.log(`alien not in list ${alien}`)
      return alien
      };
    };
  
  const checkAnswers = () => {

      const gameAlienName:string= alienName()


      if (userInput.toLowerCase() === gameAlienName){

        setImageDisplay( `/src/assets/${gameAlienName} correct.png`)
        setOpenModal(true)
        setAttemptCount(() => attemptCount + 1)
        setCorrectAnswerCount(correctAnswersCount + 1)

          if (correctAnswersCount === 5){
              setGameWin(true)
          }
      }
      else{
        setImageDisplay( `/src/assets/${gameAlienName} wrong.png`)
        setOpenModal(true)
        setAttemptCount(() => attemptCount + 1)
        };
      
      };

  useEffect(() => {
      if (attemptCount === 7 && !gameWin){
        setGameOver(true)
    } 
  },[attemptCount,gameWin,setGameOver])

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
              <p>Martian</p>
              <p>Grey-Alien</p>
              <p>Reptilian</p>
              <p>Xenomorph</p>
          </ol>
        
          {gameOver &&(
            <div>
              <p style={{marginLeft:5}} className='correct-count'>{`${correctAnswersCount}/5`} </p>
              <h1 
              className='gameover'> 
              GAME <br />
              OVER</h1>
            </div>
          )}
          {!gameOver && (
            
          <div>
              <p className='correct-count'>{`${correctAnswersCount}/5`} </p>
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
                <button onClick={checkAnswers} disabled={gameOver}>click</button>
              </div>
          </div>
        )
      };
    {openModal && <Modal closeModal={setOpenModal} alienImage ={imageDisplay}/>}
    </div>
  )
};

export default TwoGrids;

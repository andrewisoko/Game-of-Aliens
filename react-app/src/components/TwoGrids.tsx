import '../css/TwoGrids.css'
import guessWhosThat from '../assets/Guess the man.png'
import { useState,useEffect} from 'react';
import Modal from './Modal';




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

    let alienRaces: string[] = ["Avian","Grey-Alien","Martian","Reptilian","Xenomorph"]
    const random =  Math.floor(Math.random() * alienRaces.length)
    let alien: string = alienRaces[random].toLowerCase()

    if (alienRacesAppeared.size === 5){
      alienRacesAppeared.clear()
      return alien
    }
    else if (alienRacesAppeared.has(alien)){

        const filteredAlienRaces= alienRaces.filter(element => !alienRacesAppeared.has(element.toLowerCase()))
        const randomFiltered = Math.floor(Math.random() * filteredAlienRaces.length)
        let newAlien: string = filteredAlienRaces[randomFiltered].toLowerCase()
        alienRacesAppeared.add(newAlien)
        
        // console.log(filteredAlienRaces)
        // console.log(`new alien ${newAlien}`)
        return newAlien
    }
    else{

      alienRacesAppeared.add(alien)
      // console.log(`not in list alien ${alien}`)
      return alien
      };
    };
  
  const checkAnswers = () => {

      const gameAlienName:string = alienName()
      
      if (userInput.toLowerCase() === gameAlienName){

        setImageDisplay( `/src/assets/${gameAlienName} correct.png`)
        setOpenModal(true)
        setAttemptCount(() => attemptCount + 1)
        setCorrectAnswerCount(correctAnswersCount + 1)

      }
      else{
        setImageDisplay( `/src/assets/${gameAlienName} wrong.png`)
        setOpenModal(true)
        setAttemptCount(() => attemptCount + 1)
        };
      
      };

  useEffect(() => {
      if (correctAnswersCount === 5){
              setGameWin(true)
          }
      else if (!gameWin && attemptCount === 7){
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
                {gameWin && (
                  <div className='win-wrapper'>
                     <img className="gold-star" src="/src/assets/gold-star.png" alt="gold star" />
                     <p className='five-on-five'> 5/5</p>
                  </div>
                )}
              {!gameWin && (<p className='correct-count'>{`${correctAnswersCount}/5`} </p>)}
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
                <button onClick={checkAnswers} disabled={gameWin}>click</button>
              </div>
                {gameWin && (
                  <div style={{
                    marginTop:10,
                    marginLeft:100,
                    }}>
                  <a href='/src/assets/Alien NFT.png' download>click here for the Alien NFT</a>
                  </div>
                )}
          </div>
        )
      };
     
    {openModal && <Modal closeModal={setOpenModal} alienImage ={imageDisplay}/>}
    </div>
  )
};

export default TwoGrids;

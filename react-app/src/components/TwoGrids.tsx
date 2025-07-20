import '../css/TwoGrids.css'
import guessWhosThat from '../assets/Guess the man.png'
import searchButton from '../assets/Button.png'


const TwoGrids = () => {

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

              <p>Avians</p>
              <p>Brainy Martian</p>
              <p>Grey-Alien</p>
              <p>Reptilians</p>
              <p>Xenomorphs</p>
          </ol>
        
        <div>
            <div 
            style={{
              marginTop:60,
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
              <button> click </button>
            </div>
        </div>

    </div>
  )
};

export default TwoGrids;

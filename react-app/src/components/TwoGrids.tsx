import '../css/TwoGrids.css'


const TwoGrids = () => {
  return (
    <div className='two-column-layout'>
      
          <ol>
            <style>
                @import url('https://fonts.cdnfonts.com/css/battle-tough');
            </style>
            <h2 style={{
              marginBottom:40,
              marginLeft: 30,
              

            }}>Aliens Races</h2>

              <p>Avians</p>
              <p>Brainy Martian</p>
              <p>Grey-Alien</p>
              <p>Reptilians</p>
              <p>Xenomorphs</p>
          </ol>
        
        <div>
            <div>Black box</div>
            <input type="text" placeholder="Guess the alien race" />
            <button></button>
        </div>

    </div>
  )
};

export default TwoGrids;

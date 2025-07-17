import Home from "./components/Home"
import GalaxyVideo from './assets/Galaxy.mp4';
import TwoGrids from "./components/TwoGrids";


function App(){
 return (
    <div className="home-background">
        <video className="background-video" src={GalaxyVideo} controls autoPlay loop muted />
        <div className="content">
            <Home/>
            <TwoGrids/>
        </div>
    </div>


  )
}

export default App
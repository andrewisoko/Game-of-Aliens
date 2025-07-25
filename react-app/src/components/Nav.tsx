import '../css/Nav.css'
import React, { useState } from "react";

function Nav(){

    const [burgerClass,setBurgerClass] = useState("burger-bar unclicked")
    const [menuClass,setMenuClass] = useState("menu hidden")
    const [burgerClicked,setBurgerClicked] = useState(false)


    const boxPopup = () =>{
        if(!burgerClicked){
            setBurgerClicked(true)
        }
        else{
           setBurgerClicked(false) 
        }
    }


    return <nav className="navbar" style={{marginTop:10}}>

        <div className='text-display'> 
            <a href='https://www.facebook.com/'>Facebook</a>
            <a href='https://www.tiktok.com/login/'>Tiktok</a>
            <a href='https://web.whatsapp.com/#'>Whatsapp</a>
            <a href='https://web.telegram.org/k/'>Telegram</a>
        </div>
        
        <div 
            className='burger-button'
            onClick={boxPopup}
            style={{ cursor:'pointer'}}>
            <span></span>
            <span></span>
            <span></span>
        </div>

        {burgerClicked && (
            <div style={{
                textAlign: 'center'
            }}className = "menu">
            <div style={{
                color:'grey'
            }}><strong>Facts on Aliens</strong></div>
            <hr />
             <a href="https://en.wikipedia.org/wiki/Fermi_paradox">The fermi paradox</a>
            <hr />
                <a href="https://www.bbc.co.uk/news/articles/c39jj9vkr34o">Strongest evidence of life outside earth</a>
            <hr />
                <a href="https://thereader.mitpress.mit.edu/history-speculation-about-aliens/">The first alien propagandist</a>
            <hr />
            <hr />
                <a href="https://www.britannica.com/topic/unidentified-flying-object/Other-investigations-of-UFOs">UFO</a>
            <hr />
            <hr />
                <a href="https://en.wikipedia.org/wiki/Zecharia_Sitchin">Anunaki</a>
            <hr />
            <div>👽</div>
        </div>

        )}

    </nav>
}

export default Nav;
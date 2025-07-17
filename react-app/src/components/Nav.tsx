import '../css/Nav.css'

function Nav(){

    return <nav className="navbar">
        <div className='text-display'> 
            <p>Facebook</p>
            <p>Tiktok</p>
            <p>Whatsapp</p>
            <p>Telegram</p>
        </div>
        <div className='burger-button'style={{ cursor:'pointer'}}>
            <span ></span>
            <span></span>
            <span></span>
        </div>
    </nav>
}

export default Nav;
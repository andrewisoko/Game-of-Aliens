import '../css/Header.css'
function Header(){

    return(
         <div className="text-center" style={
            {   marginTop: 30,   
            }}>       
        <h1 className='fw-bold'>The Outside World</h1>
        <p style={{marginTop:20}}> find the right alien in <strong style={{color:'gold'}}>7</strong> attemps and prove humanity wrong.</p>
    </div>
    )
};

export default Header;


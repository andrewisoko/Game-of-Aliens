
function Message (){
    const userName = "Andro"
        console.log(document.body.childNodes)
    return <div>
        <h1>Hello {userName}</h1>
         <a href="coconut.com">click this link </a>
            <ul className="list-group">
                <li className="list-group-item active" aria-current="true">An active item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
             </ul>
        </div>
    

}

export default Message;
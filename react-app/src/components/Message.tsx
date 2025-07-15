import { Fragment } from "react/jsx-runtime";

{/* Ctrl + P and >wrap is a shortcut to highlight blocks of elements with parent element. */}

function Message (){
    const userName = "Andro"
    
    return (
    <Fragment> {/*used for multiple element, instead of using div */}
        <h1>Hello {userName}</h1>
         <a href="coconut.com">click this link </a> 
        </Fragment>
    );

};

export default Message;
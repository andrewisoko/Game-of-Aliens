function ListGroup(){

    let listCity = ["Landan","Manny","Rome","Hull","Tor vergata"];
    let itemSelected = 0; {/* with this variable is only local to the function therefore return is excluded.
                              to dynamically modify the variable from the website interaction you will need the built in function useState */}
 
   
    return (
            <>
                {listCity.length === 0 && <p> No Jojo</p>} {/* we use && instead of a basic ternarey statement so the else statement can be avoided
                1) Every logic functionality must be inside a curly bracket.
                2) Conditional rendering have multiple ways to be declared. In this instance it hass been placed in the return block but I could have been also 
                be added as a const and calling it in the return block.
                 */}
                <ul className="list-group">
                    {listCity.map((items,index) => 
                    <li 
                    className={itemSelected === index ? "list-group-item active" : "list-group-item"}
                    onClick={()=> { itemSelected = index; }}
                    key={items}>
                        {items}
                        </li>
                    )}
                </ul>
            </>
            
    );
}

export default ListGroup;
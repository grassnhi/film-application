import React from "react";

const Props = (props) => {
    console.log(props)
    // props.name="Ni"
    return (
        <div>
            <h1>
                Hi, this is {props.name} a.k.a {props.heroName} 
            </h1>
            {props.children}
        </div>
        
    ) 
}

export default Props;
import React from "react";

// const Destructure = ({name, heroName}) => {
//     return (
//         <div>
//             <h1>
//                 This is {name} and {heroName} 
//             </h1>
//         </div>
        
//     ) 
// }

const Destructure = (props) => {
    const {name, heroName} = props
    return (
        <div>
            <h1>
                This is {name} and {heroName} 
            </h1>
        </div>
        
    ) 
}

export default Destructure;
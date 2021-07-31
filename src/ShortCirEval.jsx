import React, { useState } from 'react'


 const ShortCirEval = () => {
     const [demo,setDemo] = useState("JOSHI")

    return(
        <>
        <h1 className="h1style">
            {demo || "technical"}

           {/* in OR case, left will execute if both re true */}

        </h1>
        <h1 className="h1style">
            {demo && "adarsh"}
            </h1>

        {/* in AND, only Right will execute if  both are true */}

       </>
    )}
    


export default ShortCirEval;
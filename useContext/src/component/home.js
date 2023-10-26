import React, { useState } from "react";

const Home = () => {

    // console.log("useState", useState(0));

    const [count, setCount] = useState(0);
    
    // console.log("count:", count)
    // console.log("setCount: ", setCount)

    return (
        <div>
            HOME
        </div>
    )
}

export default Home;
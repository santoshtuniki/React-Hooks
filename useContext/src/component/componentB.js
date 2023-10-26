import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../App";

// import ComponentC from "./componentC";

const ComponentB = () => {

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (
        <div>
            <br />
            {user} - {channel}
            {/* <ComponentC /> */}
        </div>
    )
};

export default ComponentB;
import React from "react";
import { UserContext, ChannelContext } from '../App';

// In the case of multiple contexts, it becomes complex to consume the value
// Here just to consume 2 values, there is so much of nesting

const ComponentC = () => {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return (
                                            <>
                                                <br />
                                                <div>
                                                    User Context Value: {user}
                                                </div>
                                                <br />
                                                <div>
                                                    Channel Context Value: {channel}
                                                </div>
                                            </>
                                        )
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
};

export default ComponentC;
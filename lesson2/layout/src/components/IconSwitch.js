import React from 'react'
import {ViewList, ViewModule} from "@material-ui/icons";

const IconSwitch = (props) => {
    return (
        <div className="switcher">
            <span onClick={props.onSwitch}>
            {
                props.layout === 'list' ? <ViewList fontSize="large"/> : <ViewModule fontSize="large"/>
            }
            </span>
        </div>
    )
}

export default IconSwitch


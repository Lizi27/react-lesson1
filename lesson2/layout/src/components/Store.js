import React, {useState} from 'react'
import PropTypes from 'prop-types'
import IconSwitch from './IconSwitch'
import CardsView from './CardsView'
import ListView from './ListView'

const Store = (props) => {

    const icon = ["list", "card"]

    const [layout, setLayout] = useState("card")

    const onSwitch = evt => {
        setLayout(layout === "card" ? "list" : "card")
    }

    return (
        <div className="store">
            <IconSwitch layout={layout} onSwitch={onSwitch}/>
            <div className="clearfix"></div>
            {
                layout === 'list' ?
                    <ListView products={props.products} /> :
                    <CardsView products={props.products} />
            }

        </div>
    )
}

export default Store


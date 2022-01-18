const Toolbar = (props) => {

    return (
        <>
            {
                props.filters.map(filter =>
                    <button

                        className={ props.active === filter ? 'active' : '' }
                        onClick={() => {
                        props.onChangeFilter(filter)
                    }}>
                        {
                            filter
                        }
                    </button>
                )
            }
        </>
    )
}

export default Toolbar
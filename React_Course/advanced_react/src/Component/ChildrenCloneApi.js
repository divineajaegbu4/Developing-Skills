import React, { Children, cloneElement } from 'react'

const Row = ({ children, spacing }) => {

    const computeStyle = {
        marginLeft: `${spacing}px`
    }

    return (
        <div className='general'>
            {Children.map(children, (child, index) => {
                return cloneElement(child, {
                    style: {
                        ...child.props.style,
                        ...(index > 0 ? computeStyle : {})
                    }
                    
                })
                
            })}
        </div>
    )

}

const LiveOrders = () => {
    return (
        <>
            <Row spacing={1}>
                <p>Man</p>
                <p>Woman</p>
                <p>Doctor</p>
                <p>Nurse</p>
                <p>Fish</p>
            </Row>
        </>
    )

}



export default LiveOrders;
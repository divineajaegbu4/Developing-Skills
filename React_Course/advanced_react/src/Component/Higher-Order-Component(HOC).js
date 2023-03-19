import React, { useEffect, useState } from 'react'


const withMousePosition = (WrappedComponent) => {

    return (props) => {
        const [mousePosition, setMousePosition] = useState({
            x: 0,
            y: 0
        })

        useEffect(() => {
            const handleMousePositionChange = (e) => {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY
                })
            }

            window.addEventListener("mousemove", handleMousePositionChange);

            return () => {
                window.removeEventListener("mousemove", handleMousePositionChange);
            }
        }, [])

        return (
            <div>
                <WrappedComponent {...props} mousePosition={mousePosition}/>
            </div>
        )
    }

}



const PanelMouseLogger = ({ mousePosition }) => {
    if (!mousePosition) return null;

    return (
        <div className='BasicTracker'>
            <p>Mouse Position:</p>
            <div className='Row'>
                <span>x: {mousePosition.x}</span>
                <span>y: {mousePosition.y}</span>
            </div>
        </div>
    )
}

const PointMouseLogger = ({ mousePosition }) => {
    if (!mousePosition) return null;

    return (
        <p>({mousePosition.x}, {mousePosition.y})</p>
    )
}


const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);


const Tracker = () => {
    return (
        <div className='tracker'>
            <header>Higher Order Component(HOC)</header>
            <PanelMouseTracker />
            <PointMouseTracker />
        </div>
    )
}




export default Tracker;
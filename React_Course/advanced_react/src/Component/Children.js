import React from 'react'

function Children() {
    const Button = ({ children, backgroundColor, cursor }) => {
        return <button style={{backgroundColor, cursor}}>{children}</button>
    }


    const ContainermentOverlay = ({ children }) => {
        return (
            <>
                <div className='overlay'></div>
                <div className="content">{children}</div>
            </>
        )
    }

    const SpecializationDeleteBtn = () => {
        return <Button backgroundColor="red" cursor="pointer">Delete</Button>
    }


    return (
        <>
            <div>Children</div>
            <ContainermentOverlay>
                <p>Flower</p>
                <p>Tomatoes</p>
                <p>Chicken</p>
                <SpecializationDeleteBtn />
            </ContainermentOverlay>

        </>

    )
}

export default Children
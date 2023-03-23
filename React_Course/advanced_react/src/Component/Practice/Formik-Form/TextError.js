export const TextError = ({ children }) => {
    return (
        <div className="error" style={{color: "red"}}>
            {children}
        </div>
    )
}
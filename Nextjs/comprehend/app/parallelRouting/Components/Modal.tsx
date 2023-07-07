import React from 'react'

function Modal(props: {children: React.ReactNode}) {
  return (
    <div style={{background: "red"}}>{props.children}</div>
  )
}

export default Modal
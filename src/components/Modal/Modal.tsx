import React, { ReactNode } from "react";

interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
  }
  

const Modal: React.FC<ModalProps> = ({isOpen, children }) => {

    const BackGround  = {   
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',  
        right: '0',
        backgroundColor:'rgba(0,0,0,0.6)',
        zIndex:'1000'
      }
    const BackGroundModal = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '80px',   
        backgroundColor:'rgba(255, 255, 255, 0.9)',
        borderRadius: '10px' ,
        color: "black"

    }
 
if(isOpen){
  return (
    <>
      <div style={BackGround  as React.CSSProperties}>
        <div style={BackGroundModal as React.CSSProperties}>{children}</div>
      </div>
    
    </>
  )}
return null
}

export default Modal

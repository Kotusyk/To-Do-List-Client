// import React from 'react'
// import "./modal.css"

// const Modal = ({children}) => {
//   return (
//    <div>
//       {children}
//    </div>
//   );
// };

// export default Modal






import React from 'react'
import "./modal.css"

const Modal = ({active, setActive}) => {
  return (
    <div className={active ? "modal active" : "modal" } onClick={()=> setActive(false)} >
      <div className={active ? "modal__content active" : "modal__content" } onClick={e => e.stopPropagation()}>
    
      </div>
    </div>
  );
};

export default Modal

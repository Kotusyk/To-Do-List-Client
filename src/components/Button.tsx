import { IButtonPropTypes } from '../interface/Interfaces'


const Button = ({color, text, onClick}: IButtonPropTypes) => {
  return (
        <button onClick={onClick} style={{backgroundColor: color}} 
        className="btn">
            {text}
        </button>
  )
}

export default Button

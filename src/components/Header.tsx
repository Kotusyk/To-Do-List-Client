import Button from './Button'
import { IHeaderPropTypes } from '../interface/Interfaces'

const Header = ({onAdd, showAdd}: IHeaderPropTypes ) => {

return (
    <header className="header">
        <h1>My To do list</h1>
          <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>

    </header>
  )
}

export default Header

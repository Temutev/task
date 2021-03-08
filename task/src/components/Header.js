import React from 'react'
import Button from './Button'
const Header = ({title , onAdd, showAdd}) => {
    return (
        <div className='header'>
            <header>
                <h1>
                    {title}
                </h1>
                <Button color={showAdd ? 'red':'green'}text={showAdd ? 'Close':  'Add' } onClick={onAdd}/>
            </header>
        </div>
    )
}

Header.defaultProps ={
 title:'Task Tracker'
}

export default Header

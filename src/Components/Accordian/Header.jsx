import React, { useContext } from 'react'
import { AccordionContext } from './Accordion'

const Header = ({children}) => {
    const {handleIsExpand} = useContext(AccordionContext)
  return (
    <div onClick={handleIsExpand}>{children}</div>
  )
}

export default Header
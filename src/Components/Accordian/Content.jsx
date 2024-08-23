import React, { useContext } from 'react'
import { AccordionContext } from './Accordion'

const Content = ({children}) => {
    const {isExpand} = useContext(AccordionContext);


  return isExpand ? <div>{children}</div> : null;
    
    
 

 
}

export default Content
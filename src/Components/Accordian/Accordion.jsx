import React, { createContext, useCallback, useMemo, useState } from 'react'
import Header from './Header';
import Content from './Content';

export  const  AccordionContext = createContext();
const {Provider} = AccordionContext;
const Accordion = ({children}) => {
    const[isExpand , setIsExpand] = useState(false);
    // const handleIsExpand = () =>{
    //     setIsExpand(!isExpand)
    // }

    const handleIsExpand = useCallback(() => setIsExpand(!isExpand))
    const values =  useMemo(() =>({isExpand,handleIsExpand}),[isExpand , handleIsExpand]) 
  return (
    <Provider value={values}>
        {children}
    </Provider>
  )
}

Accordion.Header = Header;
Accordion.Content = Content;

export default Accordion
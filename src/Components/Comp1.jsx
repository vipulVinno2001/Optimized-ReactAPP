
import { forwardRef } from 'react';
import WithDimensions from './WithDimensions'

const Comp1 = (props,forwardedRefFromParent) => {
    //console.log(ref)
  return (
    <div ref={forwardedRefFromParent} className="comp1">
        <h1> Hey  I am Comp1 and my width is: {props.width}</h1>
       
    </div>
  )
}

export default WithDimensions(forwardRef(Comp1));
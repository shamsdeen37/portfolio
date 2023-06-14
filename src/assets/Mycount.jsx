import React, { useEffect, useState } from 'react'

const Mycount = (props) => {
    const [count,setCount] = useState(1)

    
    useEffect(()=>{
      
        const myintervel =setInterval(() => {
   
          if(count < props.props){
            setCount(count+1)
    
          }
          else{
            clearInterval(myintervel)
          }
          
      
       
          
        }, 20);

      

          return () =>{
            clearInterval(myintervel)
          }
   
} )


 

  return (
    <p className={`count `}>{count} %</p>
    )
}

export default Mycount
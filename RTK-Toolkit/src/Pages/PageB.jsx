import React from 'react'
import { useSelector } from 'react-redux';


const PageB = () => {
  const myName = useSelector((state) => state.user.name);
    console.log(myName ,"PageB")

  return (
    <div>
     I'm Child of Page A : Page B {myName}
    </div>
  )
}

export default PageB

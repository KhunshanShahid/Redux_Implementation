import React from 'react'
import { useSelector } from 'react-redux';


const PageD = () => {
  const myName = useSelector((state) => state.user.name);
  return (
    <div>
     I'm Child of Page C: PageD {myName}
    </div>
  )
}

export default PageD

import React from 'react'
import { useSelector } from 'react-redux';

const PageF = () => {
  const myName = useSelector((state) => state.user.name);
  return (
    <div>
     I'm Child of Page E : PageF {myName}
    </div>
  )
}

export default PageF

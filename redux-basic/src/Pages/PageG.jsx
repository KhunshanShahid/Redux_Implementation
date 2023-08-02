import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { UpdateName } from '../redux/Action/Action';


const PageG = () => {

    const [name,setName]= useState("")
const dispatch=useDispatch()
    const updateHandle = (e)=>{
e.preventDefault()

dispatch(UpdateName(name))
setName("")
    }
  return (
    <>
    <div>
      PageG
      
    </div>

    <form>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    <button type='submit' onClick={updateHandle}>Update</button>
    </form>
  
    </>

  )
}

export default PageG

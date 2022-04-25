import React from 'react'
import {FaTimes} from 'react-icons/fa';

export default function DeleteTask(props) {
  return (
    <FaTimes style={{color:'red', cursor: 'pointer'}}  onClick={() => props.deleteTask(props.index)} >Done</FaTimes>
  )
}

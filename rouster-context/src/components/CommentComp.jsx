import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

export default function CommentComp() {
    const value = useContext(DataContext)
  return (
    <div>
        <h5>writer</h5>
        <p>text</p>
        <span>date</span>
    </div>
  )
}

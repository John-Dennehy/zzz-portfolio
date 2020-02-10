import React from 'react'
import { Link } from 'gatsby'

export default () => {

  return (
    <ul className="sidebar__menu">
      <li> <Link to="/">Home</Link> </li>
      <li> <Link to="/about">About</Link> </li>
      <li> <Link to="/projects">Projects</Link> </li>
      <li> <Link to="/cv">CV</Link> </li>
    </ul>
  )
}
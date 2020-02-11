import React from 'react'
import LinksBar from '../social/LinksBar'

export default () => {

  return (
    <nav className="navbar is-fixed level" role="navigation" aria-label="main navigation">
      <div className="level-left">
        <div className="navbar-brand">
          <a className="navbar-item is-button" href="/">
            <h1 className="title">JDtheGeek</h1>
          </a>
        </div>
      </div>
      <div className="level-item navbar-item">
        <LinksBar />
      </div>
      <div className="level-right">
        <a className="navbar-item page-link" href="/projects"> Projects </a>
        <a className="navbar-item page-link" href="/cv">CV</a>
        <a className="navbar-item page-link" href="/about">About</a>
      </div>
    </nav>
  )
}
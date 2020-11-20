import React from 'react';
import Menu from './template/Menu'
import Routes from './routes'

export default props => {
  return (
    <div className="container">
        <Menu/>
        <Routes/>
    </div>
  )
}
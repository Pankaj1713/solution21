import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
  return (
    <React.Fragment>
        <Header/>
            <div className='layout'>
                {props.children}
            </div>
        <Footer/>
    </React.Fragment>
  )
}

export default Layout
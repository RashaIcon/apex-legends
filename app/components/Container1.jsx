import React from 'react'

const Container1 = ({className , children}) => {
  return (
    <div className={`container_cust md:max-w-7xl w-full md:p-0 px-6 mx-auto ${className}`}>
        {children}
    </div>
  )
}

export default Container1
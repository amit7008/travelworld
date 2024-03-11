import React from 'react'

const page = ({params}) => {
  return (
    <div>
    
    Deals<br/>
    {params.slug}
    </div>
  )
}

export default page
import React from 'react'
import Section1 from '../components/productpage_components/section1'
import Section2 from '../components/productpage_components/section2'
import Section3 from '../components/productpage_components/Section3'
import Section4 from '../components/productpage_components/section4'

const Products = () => {
  return (
    <div flex flex-col min-h-screen>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
    </div>
  )
}

export default Products
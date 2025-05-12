import React from 'react'
import BlogCard from '../components/MultiComponent/Orther/BlogCard'
import OrderHistory from '../components/SingleComponent/Block/OrderHistory'
import Coutdown from '../components/MultiComponent/Orther/Coutdown'

const HomePage = () => {
  return (
    <div>
      <Coutdown targetDate="2025-05-13" />
    </div>
  )
}

export default HomePage
"use client"
import { useState } from 'react'
import css from './page.module.css'

const Dashboard = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(alse)

  return (
    <div className={css.container}>Dashboard</div>
  )
}

export default Dashboard
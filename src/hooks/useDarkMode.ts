import { useEffect, useState } from 'react'

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
    setIsInitialized(true)
  }, [])

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('darkMode', darkMode.toString())
      document.body.classList.toggle('dark', darkMode)
    }
  }, [darkMode, isInitialized])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return [darkMode, toggleDarkMode, isInitialized] as const
}

export default useDarkMode
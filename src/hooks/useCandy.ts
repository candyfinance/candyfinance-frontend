import { useContext } from 'react'
import { Context } from '../contexts/CandyProvider'

const useCandy = () => {
  const { candy } = useContext(Context)
  return candy
}

export default useCandy

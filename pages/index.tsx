import type { NextPage } from 'next'
import { Header } from '../components/Header'
import About from './About'
import HomePage from './HomePage'
import Stacks from './Stacks'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HomePage id='home' />
      <About id='about' />
      <Stacks id='stacks' />
    </>
  )
}

export default Home

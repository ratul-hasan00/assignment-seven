import './App.css'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import ProgressResolved from './component/ProgressResolved'
import Card from './component/Card'
import { Suspense } from 'react'

const fetchCard = async () => {
  const res = await fetch("/public/customer.json")
  return res.json()
}

function App() {
  
  const cardPromise = fetchCard()

  return (
    <>
      <Navbar></Navbar>
      <ProgressResolved></ProgressResolved>
      <Suspense fallback={<p>Customer Tickets Are Loding...</p>}>
        <Card cardPromise={cardPromise}></Card>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App

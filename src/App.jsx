import './App.css'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import ProgressResolved from './component/ProgressResolved'
import Card from './component/Card'
import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify';


const fetchCard = async () => {
  const res = await fetch("/public/customer.json")
  return res.json()
}

function App() {
  const cardPromise = fetchCard()
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  

  return (
    <>
      <Navbar></Navbar>

      <ProgressResolved resolvedCount={resolvedCount} inProgressCount={inProgressCount}></ProgressResolved>

      <Suspense fallback={<div className="flex justify-center my-20"><span class="loading loading-infinity loading-xl"></span></div>}>
        <Card cardPromise={cardPromise} setInProgressCount={setInProgressCount} setResolvedCount={setResolvedCount}></Card>
      </Suspense>

      <Footer></Footer>

      <ToastContainer/>
    </>
  )
}

export default App

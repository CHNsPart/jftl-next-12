import '../styles/globals.css'
import NavBar from './NavBar'
import { useState, useEffect } from 'react'
import { GridLoader } from 'react-spinners'

function MyApp({ Component, pageProps }) {
  let [mode, setMode] = useState('light');
  
  const modeChange = (data) => {
    setMode(data);
    console.log(mode)
  };

  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    document.querySelector("html").style.backgroundColor = "#FFFFFF"
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])

  useEffect(()=>{
    if(mode==="night"){
      document.querySelector("html").style.backgroundColor = "#020721"
    } else {
    document.querySelector("html").style.backgroundColor = "#FFFFFF"
    }
  },[mode])

  return (
    <>
      { loading ? 
        (
          <main className='h-[100vh] w-full flex flex-col gap-6 justify-center items-center'>
            <GridLoader
              color='#4DBAE7'
            />
            <h1 className='text-brandBlue tracking-widest'>Japan Fast Trade LTD.</h1>
          </main>
          )
          :
          (
            <div data-theme={mode}>
              <NavBar modeChange={modeChange} /> 
              <Component className="transition-all delay-75 duration-300" data-theme={mode} {...pageProps} />
            </div>
          )
        }
    </>
  )
}

export default MyApp

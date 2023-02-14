import React from 'react'
import Modal from '../components/Modal'


const Home = ({info, setInfo}) => {
  return (
    <div className='home'>
        {
            info && <Modal setInfo ={setInfo}/>
        }
    </div>
  )
}

export default Home
import React from 'react'
import Laptop from '../assets/laptop.jpg'

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/"/>
            <div className="flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quisquam, modi ipsa dolores velit dicta? Alias omnis, error praesentium, eius unde in sunt quia minus numquam ea vitae, quibusdam dicta!</p>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-4 text-[#00df9a]'>Get Started</button>
                </div>
        </div>
      
    </div>
  )
}

export default Analytics

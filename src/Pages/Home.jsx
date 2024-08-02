import React from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <>
      <section id="home" className="w-full bg-gradient-to-r from-[#4c70ff] to-[#c552ff] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to zeka</h2>
          <p className="text-lg mb-6">Your gateway to the latest devices</p>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-300">Get Started</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-6">We are passionate about selling the top quality electronic devices.</p>
          <div className="flex justify-center space-x-8">
            <div className="w-1/3 bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p>To provide the latest devices.</p>
            </div>
            <div className="w-1/3 bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p>To be the leading device seller.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="flex justify-center space-x-8">
            <div className="w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p>Building modern and responsive websites.</p>
            </div>
            <div className="w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">App Development</h3>
              <p>Creating user-friendly mobile applications.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="w-full bg-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-6">We would love to hear from you!</p>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-300">Send a Message</button>
        </div>
      </section>
      </>
  )
}

export default Home
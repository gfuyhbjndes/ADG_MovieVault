import './App.css';
import AllRoutes from './routes/AllRoutes';
import Header from './components/Header';
import Navbar from './components/Navbar';
import React from 'react'
import Footer from './components/Footer';

export default function App() {
  return (
    
    <div className='App'>
      
      <Header />
      <Navbar />
      
      <main className="main-content">

        <AllRoutes/>
        
        <Footer />
      </main>
      
    </div>
  )
}


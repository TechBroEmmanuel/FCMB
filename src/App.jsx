import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Layout } from './components/Layout';
// import  Geolocator  from './components/Geolocator'
import { motion } from 'framer-motion';
import Landing from './components/Landing';
import Cases from './components/Cases';



function App() {

  return (
   <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Landing />} />
        {/* <Route path='geolocator' element={<Geolocator/>}/> */}
        <Route path='cases' element={<Cases/>}/>
    
       
      </Routes>
    </BrowserRouter>
    
    
    </motion.div>
  )
}

export default App



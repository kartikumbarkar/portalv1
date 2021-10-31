
import React,{useState} from 'react'
import Footer from '../Components/Footer/index'
import Sidebar from '../Components/Sidebar/Sidebar'
import Navbar from '../Components/Navbar/Navbar'
import Main from '../Components/main/main'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
  
    const toggle = () =>{
      setIsOpen(!isOpen);
    }
    return (
        <>
             
           <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            
            <Main/>
            <Footer />
              
        
           
            
        </>
    )
}

export default Home

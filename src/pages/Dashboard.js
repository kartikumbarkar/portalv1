import React from 'react'
import {MainLayout} from '../styles/Layouts';
import ServicesSection from '../Components/ServicesSection';
import styled from 'styled-components';

const Dashboard = () => {
    return (
        <MainContainer>
            
        <MainLayout>
            
            <ServicesSection />
            
        </MainLayout>
        </MainContainer>
            
        
    )
}


export default Dashboard
export const MainContainer = styled.div`
 background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 1000px;
  position: relative;
  z-index: 1;
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2)0%, rgba(0,0,0,0.6)100%),  
    linear-gradient(180deg, rgba(0,0,0,0.2)0%, transparent 100%)
  
`


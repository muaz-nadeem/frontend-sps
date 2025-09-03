import React from 'react'
import Section1 from '../components/Servicespage_components/section1'
import { useParams } from 'react-router-dom';
import ComplianceArea from '../components/Servicespage_components/ComplianceArea'
import servicesdata from '../components/Servicespage_components/data/servicesData';
import ServicesForm from '../components/Servicespage_components/servicesForm'
const Services = () => {
     const { serviceName } = useParams();

  // Find the correct service data object based on the URL slug
  const currentService = servicesdata.find(service => service.slug === serviceName);
  
  // Handle the case where the service is not found
  if (!currentService) {
    return <div>Service not found.</div>;
  }
  return (
    
    <div className='flex flex-col gap-3'>
        <Section1 IMGsrc={currentService.img} desc={currentService.banner}/>
        <ComplianceArea heading={currentService.heading} li={currentService.li} lidata={currentService.lidata}/>
       <ServicesForm/>
    </div>
  )
}

export default Services
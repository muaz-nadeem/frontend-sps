
import NepraCompliance from "../components/NepraCompliance";
import Plans from "../components/Plans";
import HomeServices from "../components/HomeServices"
import CompanyPartners from "../components/CompanyPartners";
import Footer from "../components/Footer";
import { FaDoorOpen } from 'react-icons/fa';
const Home = () => {
    
   return (

    <div className="flex flex-col min-h-screen">
        <NepraCompliance className="flex-grow"/>
        <Plans/>
        <HomeServices/>
        <CompanyPartners/>
    </div>
   )
   
}

export default Home;

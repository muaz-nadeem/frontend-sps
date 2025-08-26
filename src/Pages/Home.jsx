import NavigationBar from "../components/NavigationBar";
import NepraCompliance from "../components/NepraCompliance";
import Plans from "../components/Plans";
import HomeServices from "../components/HomeServices"
import CompanyPartners from "../components/CompanyPartners";
import Footer from "../components/Footer";

const Home = () => {
    
   return (

    <div className="flex flex-col min-h-screen">
        <NavigationBar className="flex-shrink-0"/>
        <NepraCompliance className="flex-grow"/>
        <Plans/>
        <HomeServices/>
        <CompanyPartners/>
        <Footer/>
        
    </div>
   )
   
}

export default Home;

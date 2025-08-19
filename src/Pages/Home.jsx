import NavigationBar from "../components/NavigationBar";
import NepraCompliance from "../components/NepraCompliance";
import Plans from "../components/Plans";

const Home = () => {
   return (
    <div className="flex flex-col min-h-screen">
  
        <NavigationBar className="flex-shrink-0"/>
        <NepraCompliance className="flex-grow"/>
        <Plans/>
    </div>
   )
   
}

export default Home;

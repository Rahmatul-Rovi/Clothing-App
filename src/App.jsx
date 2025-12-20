import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'; // আপনার নেভবার পাথ
import Footer from './Components/Footer/Footer'; // আপনার ফুটার পাথ

function App() {
  return (
    <div>
      <Navbar />
      
      {/* Outlet এর মাধ্যমেই Home, About বা অন্যান্য পেজগুলো এখানে শো করবে */}
      <Outlet /> 
      
      <Footer />
    </div>
  );
}

export default App;
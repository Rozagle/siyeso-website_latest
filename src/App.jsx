import {Route,Routes} from 'react-router-dom';
import { Navbar, Hero, RequirementExpertise, Client, Contect, Footer, OurExpertise, About, Teams, ChangingNeeds, ScrollUpBtn } from './Components/Imports';
import PrivacyPolicy from './Pages/PolicyPrivacy';
function App() {

  return (
<>
      <ScrollUpBtn />
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <ChangingNeeds />
            <RequirementExpertise />
            <About />
            <OurExpertise />
            <Client />
            <Teams />
            <Contect />
            <Footer />
          </>
        } />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} /> 
        <Route path="*" element={<PrivacyPolicy />} /> 
      </Routes>
    </>
  );
}

export default App;

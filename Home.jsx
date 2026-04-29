
// import Courses from '../Section/Courses';
// import Registration from '../Section/Registration';
import Empowering from '../Section/Empowering';
import Facilities from '../Section/Facilities';
// import Testimonial from '../Section/Testimonial';
import Footer from '../Section/Footer';
import BannerSlider from '../Section/BannerSlider';
import Whatsapp from '../Section/Whatsapp';
import NewHome from '../pages/NewHome';
import ResFac from '../Section/ResFac';
import Programs from '../Section/Programs';
import AdvanceResult from '../Section/AdvanceResult';
import JeeResult from '../Section/JeeResult';
import ParentsTestimonial from '../Section/ParentsTestimonial';
import NewHomeUi from './NewHomeUi';
import ProgramsNew from '../Section/ProgramsNew';
// import Footernew from '../Section/Footernew';
function Home() {
  return (
    <div>
      {/* <NewHome/> */} 
       {/* <NewHomeUi/> */}
      <BannerSlider/>
      {/* <Programs/> */}
      <ProgramsNew/>
      <Facilities/>
      {/* <AdvanceResult/> */}
      <JeeResult/>
      <ResFac/>
      {/* <Courses/> */}
      {/* <Registration/> */}
      <Empowering/>
      
      <ParentsTestimonial/>
      {/* <Testimonial/> */}
      <Footer/>
      <Whatsapp/>
    </div>
  );
}

export default Home;

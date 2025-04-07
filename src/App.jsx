import './App.css'
import './index.css';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import PageTransition from './components/PageTransition';
import ResumeSection from './components/ResumeSection';
import AchievementsSection from './components/AchievementsSection';
import Footer from './components/Footer';



function App() {
  return (
    <PageTransition>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection/>
      <ResumeSection/>
      <Footer/>
    </PageTransition>
   
  );
}


export default App

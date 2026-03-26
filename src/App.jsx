import './App.css';
import {
  FooterSection,
  GameSection,
  LandingSection,
  NavbarSection,
  SocialsSection,
  TeamSection,
} from '@sections';

function App() {
  return (
    <>
      <NavbarSection />

      <main>
        <div id="home">
          <LandingSection />
        </div>
        
        <div id="community">
          <SocialsSection />
        </div>

        <div id="games">
          <GameSection />
        </div>

        <div id="team">
          <TeamSection />
        </div>
      </main>

      <FooterSection />
    </>
  );
}

export default App;

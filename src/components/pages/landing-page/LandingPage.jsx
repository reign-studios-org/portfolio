import { Banner, Navbar } from '../../organisms';
import {
  AboutSection,
  FooterSection,
  MilestoneSection,
  SocialSection,
  TeamSection,
} from '../../templates';

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <MilestoneSection />
      <AboutSection />
      <TeamSection />
      <SocialSection />
      <FooterSection />
    </div>
  );
};

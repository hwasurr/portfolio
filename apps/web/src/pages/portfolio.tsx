import DefaultLayout from '../components/layouts/DefaultLayout';
import AboutMe from '../organisms/AboutMe';
import ContactMe from '../organisms/ContactMe';
import Experiences from '../organisms/Experiences';
import Footer from '../organisms/Footer';
import LandingSection from '../organisms/LandingSection';
import MySkills from '../organisms/MySkills';
import Writings from '../organisms/Writings';

/**
 * Portfolio
 * - [x] Landing section
 * - [x] About me
 * - [x] Skills
 * - [x] Experiences
 * - [x] Writings
 * - [x] Contact me
 */
export default function PortfolioPage(): JSX.Element {
  return (
    <DefaultLayout
      /* contents 1 - About me */
      landingSection={<LandingSection />}
    >
      {/* 섹션 1 - About me */}
      <AboutMe />

      {/* 섹션 2 - My Skills */}
      <MySkills />

      {/* 섹션 3 - Experiences */}
      <Experiences />

      {/* 섹션 4 - Writings */}
      <Writings />

      {/* 섹션 5 - Contact Me */}
      <ContactMe />

      {/* Footer */}
      <Footer />
    </DefaultLayout>
  );
}

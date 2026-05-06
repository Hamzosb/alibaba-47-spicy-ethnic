import content from './data/content.json';
import StatusStrip from './components/StatusStrip';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import PatternBand from './components/PatternBand';
import Reviews from './components/Reviews';
import HoursLocation from './components/HoursLocation';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

// Theme 07 — Spicy Ethnic.
// Visual identity: lifted verbatim from
// _mockup/handoff/theme-07-spicy-ethnic/project/index.html.
//
// Architectural rule (master §12): src/data/content.json is the SINGLE source
// of truth for visible strings + facts (DE, the Biel default locale). Decap
// CMS at /admin edits this file. FR/EN translations are partial overrides in
// src/i18n/{fr,en}.json maintained by dev; i18next falls back to DE for any
// key not present in the active locale's override.
export default function App() {
  return (
    <>
      <StatusStrip />
      <Header business={content.business} header={content.header} />
      <main id="main">
        <Hero business={content.business} hero={content.hero} />
        <MenuSection menu={content.menu} dishes={content.dishes} />
        <PatternBand inset />
        <Reviews business={content.business} reviews={content.reviews} />
        <PatternBand inset />
        <HoursLocation business={content.business} hours={content.hours} />
        <FAQ faq={content.faq} />
        <PatternBand inset />
      </main>
      <Footer business={content.business} footer={content.footer} />
    </>
  );
}

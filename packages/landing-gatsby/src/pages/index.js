import React from 'react';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, AgencyWrapper } from '../containers/Agency/agency.style';
import Banner from '../containers/AppModern/Banner';
// import FeatureSection from '../containers/Agency/FeatureSection';
// import Pricing from '../containers/Agency/Pricing';
// import FaqSection from '../containers/Agency/FaqSection';
import EtusivuImages from '../components/etusivu/EtusivuImages';
import NewsletterSection from '../containers/AppModern/Newsletter';
import Footer from '../containers/AppModern/FooterMap';
import Palvelumme from '../containers/AppModern/MeidanPalvelut';
import SimpleReactLightbox from 'simple-react-lightbox';
import AMap from '../components/map/AMap';
import '@redq/reuse-modal/es/index.css';
import SEO from '../components/seo';
import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <SEO title="Kauneushoitola Malminkartano, Helsinki " />
      <ResetCSS />
      <GlobalStyle />
      <AgencyWrapper>
        <SimpleReactLightbox>
          <Banner />
          <NewsletterSection />
          <EtusivuImages />
          {/* <FeatureSection /> */}
          {/* <Pricing />
        <FaqSection /> */}
        </SimpleReactLightbox>
        <Palvelumme />
        <Footer />
        <AMap />
      </AgencyWrapper>
    </Layout>
  );
};

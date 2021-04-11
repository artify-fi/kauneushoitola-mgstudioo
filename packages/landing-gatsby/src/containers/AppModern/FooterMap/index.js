import React from 'react';
import Container from 'common/src/components/UI/ContainerTwo';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import FaPhone from 'react-icons/fa';
import FacebookIframe from '../../../components/facebook/FacebookIframe';
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookShareCount,
} from 'react-share';
import ReactFBLike from 'react-fb-like';
// import {
//   FacebookShareCount,
//   FacebookShareButton,

// } from 'react-share';

import SectionWrapper, { Section, Content1, Content2 } from './workHard.style';

const WorkHard = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content1>
            <FacebookIframe />
            {/* <ReactFBLike 
            language="fi_FI" 
            appId="717589285046812" 
            version="v2.12"
            width='160'            
            />  */}
            <Text id="footer" style={{ marginBottom: '5em' }} content="" />
            <Heading as="h2" content="MG Studio" />
            <Heading id="footer" as="h3" content="TULE KÄYMÄÄN" />
            <Text content="Tuohiaukio 4, 00410, Helsinki, Malminkartano" />
            <Heading as="h3" content="SOITA MEILLE" />
            {/* <Text content="(+358) 0400 9790 51" /> */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a href="tel:+358400979051">
                {' '}
                <Button
                  icon={FaPhone}
                  className="button"
                  title={'0400 9790 51'}
                />
              </a>
            </div>
            <div>
              <a
                href="https://varaa.timma.fi/MGstudio"
                target="_blank"
                rel="noopener norefferer"
                className="link"
              >
                VARAA AIKA NETISSÄ KLIKKAAMALLA LIMKILLA
              </a>
            </div>
            <FacebookShareButton
              url={'https://www.facebook.com/art.bachmann'}
              quote={'CampersTribe - World is yours to explore'}
              hashtag="#camperstribe"
              // className={classes.socialMediaButton}
            >
              <FacebookIcon size={36} />
            </FacebookShareButton>
            <FacebookShareCount
              url={'https://www.facebook.com/art.bachmann'}
            ></FacebookShareCount>

            <Text content="Teethän mahdolliset ajanvarauksen siirrot tai peruutukset mahdollisimman ajoissa, kuitenkin viimeistään 24 tuntia ennen varattua aikaa." />
            <Text
              style={{ fontWeight: 600, marginTop: '-1em' }}
              content="Myöhemmin peruutetuista tai peruuttamatta jätetyistä ajoista joudumme laskuttamaan 50% varatun palvelun hinnasta."
            />
          </Content1>

          <Content2>
            <Heading
              style={{ marginTop: '1.6em' }}
              as="h2"
              content="Aukioloajat"
            />
            <Heading as="h3" content="MAANANTAI - PERJANTAI" />
            <Text style={{ fontWeight: 600 }} content="10.00-18.00" />
            <Heading as="h3" content="LAUANTAI" />
            <Text style={{ fontWeight: 600 }} content="Sopimuksen mukaan" />
            <Heading as="h3" content="SUNNUNTAI" />
            <Text
              style={{ marginBottom: '2em', fontWeight: 600 }}
              content="Suljettu"
            />
            <Text content="Seuraa meitä facebookissa" />
            <div>
              <a
                href="https://facebook.com/MGstudioFinland"
                target="_blank"
                rel="noopener norefferer"
                className="link"
              >
                Facebook MG Studio
              </a>
            </div>
            <Text content="Seuraa meitä Instagramissa" />
            <div>
              <a
                href="https://instagram.com/MGstudioFinland"
                target="_blank"
                rel="noopener norefferer"
                className="link"
              >
                Instagram MG Studio
              </a>
            </div>
          </Content2>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default WorkHard;

import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.section`
  padding: 30px 0 30px;
  @media only screen and (max-width: 1440px) {
    padding: 0px 0 20px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 50px 0 30px;
  }
  @media only screen and (max-width: 768px) {
    padding: 20px 0 15px;
  }
  @media only screen and (max-width: 480px) {
    padding: 0px 0 10px;
  }
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    flex-direction: column;
  }
`;

export const Content1 = styled.div`
  grid-column: 1 / 2;
  width: 100%;
  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
  }
  @media only screen and (max-width: 768px) {
    grid-column: 1 / 1;
  }

  h2 {
    font-family: Playfair Display, Times New Roman, serif;
    font-weight: 700;
    font-size: 1.9rem;
    text-align: center;
    line-height: 1.52;
    letter-spacing: 2px;
    color: #000;
    text-align: center;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 1rem;
      text-align: center;
      margin-top: 15px;
    }
    @media only screen and (min-width: 1440px) {
      font-size: 1.4px;
    }
  }

  h3 {
    font-family: Playfair Display, Times New Roman, serif;
    color: #9f4976;
    text-align: center;
    border-color: rgba(159, 73, 118, 0.5);
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.5em;
    letter-spacing: 1px;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 1.6rem;
    }

    @media only screen and (min-width: 1024px) and (max-width: 1440px) {
      font-size: 1.8rempx;
    }

    @media only screen and (min-width: 1440px) {
      font-size: 2.2rem;
      text-align: center;
    }
  }

  p {
    text-align: center;
    font-family: Playfair Display, Times New Roman, serif;
    color: #000;
    font-weight: 400;
    border-color: rgba(0, 0, 0, 0.5);
    font-size: 1.2rem;
    line-height: 1.6rem;

    @media only screen and (min-width: 769px) and (max-width: 1023px) {
      line-height: 1.2rem;
      font-size: 1rem;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 1.5em;
      font-size: 1.2rem;
    }

    @media only screen and (min-width: 1367px) {
      line-height: 1.1rem;
      text-align: center;
      font-size: 0.8rem;
    }
  }

  .button {
    display: flex;
    justify-content: center;
    background-color: #892121;
    margin-bottom: 2em;
  }

  .link {
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
    text-align: center;
    font-family: DM Sans;
    font-size: 1.2rem;
    font-weight: 700;
    color: #bd5f91;
    line-height: 1.7;
    font-family: Playfair Display;
    text-decoration: underline;
    word-spacing: 0.1em;
  }

  .explore {
    color: #2d3a56;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 42px;
    margin-top: 30px;
    display: inline-flex;
    align-items: center;
    @media only screen and (max-width: 768px) {
      justify-content: center;
      margin-left: -50px;
      width: 100%;
      font-size: 1.2rem;
    }
  }
`;

export const Content2 = styled.div`
  grid-column: 2 / 3;
  width: 100%;
  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    margin-top: 3em;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    margin-top: 2em;
  }
  @media only screen and (max-width: 768px) {
    grid-column: 1 / 1;
  }

  h2 {
    font-family: Playfair Display, Times New Roman, serif;
    font-weight: 700;
    font-size: 1.9rem;
    text-align: center;
    line-height: 1.52;
    letter-spacing: 2px;
    color: #000;
    text-align: center;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 1rem;
      text-align: center;
      margin-top: 15px;
    }
    @media only screen and (min-width: 1440px) {
      font-size: 1.4px;
    }
  }

  h3 {
    font-family: Playfair Display, Times New Roman, serif;
    color: #9f4976;
    text-align: center;
    border-color: rgba(159, 73, 118, 0.5);
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.5em;
    letter-spacing: 1px;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 1.6rem;
    }

    @media only screen and (min-width: 1024px) and (max-width: 1440px) {
      font-size: 1.8rempx;
    }

    @media only screen and (min-width: 1440px) {
      font-size: 2.2rem;
      text-align: center;
    }
  }

  p {
    text-align: center;
    font-family: Playfair Display, Times New Roman, serif;
    color: #000;
    font-weight: 400;
    border-color: rgba(0, 0, 0, 0.5);
    font-size: 1.2rem;
    line-height: 1.6rem;

    @media only screen and (min-width: 769px) and (max-width: 1023px) {
      line-height: 1.2rem;
      font-size: 1rem;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 1.5em;
      font-size: 1.2rem;
    }

    @media only screen and (min-width: 1367px) {
      line-height: 1.1rem;
      text-align: center;
      font-size: 0.8rem;
    }
  }

  .button {
    display: flex;
    justify-content: center;
    background-color: #d80f06;
    margin-bottom: 2em;
  }

  .link {
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;
    color: #bd5f91;
    line-height: 1.7;
    font-family: Playfair Display;
    text-decoration: underline;
  }

  .explore {
    color: #2d3a56;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 42px;
    margin-top: 30px;
    display: inline-flex;
    align-items: center;
    @media only screen and (max-width: 768px) {
      justify-content: center;
      margin-left: -50px;
      width: 100%;
      font-size: 1.2rem;
    }
  }
`;

export const Illustration = styled.figure`
  width: 55%;
  margin: 0 0 0 5%;
  @media only screen and (max-width: 768px) {
    margin-bottom: 30px;
    width: 100%;
    margin: 0;
  }
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export default SectionWrapper;

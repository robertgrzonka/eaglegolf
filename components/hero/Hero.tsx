import styled from 'styled-components'
import Image from 'next/image'

import { Playfair_Display } from '@next/font/google'
const playfair = Playfair_Display({ subsets: ['latin'] })

const HeroText = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    letter-spacing: 0.15rem;
    color: white;
    margin-bottom: 0;
    font-weight: 900;
    @media (min-width: 850px) {
      font-size: 3.5rem;
    }
  }
  h3 {
    font-weight: 100;
    color: rgba(255, 255, 255, 0.75);
    font-variant-caps: all-petite-caps;
    margin-top: 0;
    max-width: 100%;
  }
`

const Hero: React.FC = () => {
  return (
    <>
      <Image
        src="/golf.jpg"
        fill
        quality={100}
        alt="Hero image"
        style={{
          objectFit: 'cover',
          filter: 'brightness(65%)',
        }}
      />
      <HeroText>
        <h1 className={playfair.className}>Eagle Golf</h1>
        <h3>— Trip Companion —</h3>
      </HeroText>
    </>
  )
}

export default Hero

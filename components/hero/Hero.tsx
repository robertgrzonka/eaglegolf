import styled from 'styled-components'
import Image from 'next/image'

const HeroText = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    font-family: serif;
    letter-spacing: 0.15rem;
    color: white;
    margin-bottom: 0;
    font-weight: 800;
    font-size: 4rem;
  }
  h4 {
    font-weight: 200;
    color: rgba(255, 255, 255, 0.75);
    font-variant-caps: all-petite-caps;
    margin-top: 0;
    letter-spacing: 0.05rem;
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
        <h1>Eagle Golf</h1>
        <h4>— Best Trip Companion —</h4>
      </HeroText>
    </>
  )
}

export default Hero

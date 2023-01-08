import Image from 'next/image'
import styled from 'styled-components'
import palette from '../../design/palette'

const Wrapper = styled.div`
  width: 100vw;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f9fafb;
  padding: 25px 0;
  background-color: rgb(33, 37, 41);
`

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Wrapper>
      {year} ©{' '}
      <Image
        src="/theguys.svg"
        alt="theGuys Logo"
        width={100}
        height={50}
        priority
        style={{ marginLeft: 5 }}
      />
    </Wrapper>
  )
}

export default Footer

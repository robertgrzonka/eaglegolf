import Image from 'next/image'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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

const RowStyled = styled(Row)`
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
`

const Title = styled.h4`
  margin-bottom: 20px;
`

const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  const links = [
    {
      name: 'Instagram',
      ref: 'instagram.com',
    },
    {
      name: 'Twitter',
      ref: 'twitter.com',
    },
    {
      name: 'Facebook',
      ref: 'facebook.com',
    },
  ]

  return (
    <Wrapper>
      <Container>
        <RowStyled>
          <Col>
            <Title>Contact</Title>
            <p>
              <a href="mailto: example@example.com">example@example.com</a>
            </p>
            <p>
              <a href="tel:+48 111 111 111">+48 111 111 111</a>
            </p>
          </Col>
          <Col>
            <Title>Follow</Title>
            {links.map(({ name, ref }) => {
              return (
                <p key={name}>
                  <a href={`https://${ref}`}>{name}</a>
                </p>
              )
            })}
          </Col>
        </RowStyled>
        <RowStyled>
          <Col>
            {year} ©{' '}
            <Image
              src="/theguys.svg"
              alt="theGuys Logo"
              width={100}
              height={50}
              priority
              style={{ marginLeft: 5 }}
            />
          </Col>
        </RowStyled>
      </Container>
    </Wrapper>
  )
}

export default Footer

import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 100px 100px;
`

const Img = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px;
`

const StyledRow = styled(Row)`
  justify-content: center;
  align-items: center;
`

const Description = styled.p`
  text-justify: justify;
  letter-spacing: 0.05rem;
`

const SecondPart = styled.div`
  background: #00000040;
  color: white;
`

const About = () => {
  return (
    <Wrapper>
      <Container>
        <StyledRow>
          <Col md={6}>
            <Img src="/about2.jpg" />
          </Col>
          <Col>
            <h1>About us</h1>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ullamcorper quam eu lacus gravida imperdiet. Aliquam aliquet,
              sapien eu faucibus vehicula, sapien purus fringilla lectus, eu
              ullamcorper arcu arcu sed leo. Praesent eu libero sodales, laoreet
              lacus ac, vulputate lacus. Mauris vitae iaculis leo, a congue
              lorem. Fusce a magna fringilla, fringilla nisl a, pulvinar magna.
              Maecenas sed metus quis mi semper suscipit vel a elit. Phasellus
              lacus dui, congue sit amet egestas a, congue nec lectus. Ut nec
              nibh elit.
            </Description>
            <Description>
              Suspendisse at rutrum lacus. Quisque velit sem, euismod vel erat
              ut, efficitur suscipit tortor. In scelerisque est diam, sit amet
              tristique magna finibus in. Sed facilisis nunc et tincidunt
              aliquam. Aliquam erat volutpat. Quisque id mattis ligula, et
              rhoncus nisi.
            </Description>
          </Col>
        </StyledRow>
      </Container>
    </Wrapper>
  )
}

export default About

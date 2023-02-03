import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from '../components/card'
import styled from 'styled-components'

const StyledRow = styled(Row)`
  justify-content: space-evenly;
`

const Wrapper = styled.div`
  text-align: center;
  /* width: 100%; */
  margin: 50px 20px 100px 20px;
`

const Description = styled.p`
  text-justify: justify;
  letter-spacing: 0.05rem;
  color: rgb(2s0, 20, 20);
`

const Trips = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Trips</h1>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          ullamcorper quam eu lacus gravida imperdiet. Aliquam aliquet, sapien
          eu faucibus vehicula, sapien purus fringilla lectus, eu ullamcorper
          arcu arcu sed leo. Praesent eu libero sodales, laoreet lacus ac,
          vulputate lacus. Mauris vitae iaculis leo, a congue lorem. Fusce a
          magna fringilla, fringilla nisl a, pulvinar magna. Maecenas sed metus
          quis mi semper suscipit vel a elit. Phasellus lacus dui, congue sit
          amet egestas a, congue nec lectus. Ut nec nibh elit.
        </Description>
      </Wrapper>
      <StyledRow>
        <Card />
        <Card />
        <Card />
      </StyledRow>
    </Container>
  )
}

export default Trips

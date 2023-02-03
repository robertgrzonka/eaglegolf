import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const SimpleCard = () => {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="about.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;'s content.
        </Card.Text>
        <Button variant="dark">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default SimpleCard

import Card from 'react-bootstrap/Card';
import './css/Card.css'

function BasicExample({Title,text,img}) {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
      <Card.Body>
        <Card.Title style={{ color: '#023020' }} className="me-auto my-2 my-lg-0 ">1800+</Card.Title>
        <Card.Text>
        Empowered Waste Pickers
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
}

export default BasicExample;
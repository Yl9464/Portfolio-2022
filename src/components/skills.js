import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Skills() {
  return (
    <Container className="skillsContainer">
      <Row className='mb-3'>
        <Col><FontAwesomeIcon icon="fa-brands fa-js fa-5x" size="5x" fa-fw="true" /></Col>
        <Col><FontAwesomeIcon icon="fa-brands fa-css3-alt" size="5x" fa-fw="true" /></Col>
      </Row>   
      
      <Row className='mb-3'>
        <Col><FontAwesomeIcon icon="fa-brands fa-github" size="5x" fa-fw="true" /></Col>
       <Col> <FontAwesomeIcon icon="fa-brands fa-git" size="5x" fa-fw="true"  /></Col>
      </Row>

      <Row className='mb-3'>
        <Col> <FontAwesomeIcon icon="fa-brands fa-html5" size="5x" fa-fw="true" /></Col>
        <Col> <FontAwesomeIcon icon="fa-brands fa-react" size="5x" fa-fw="true" /> </Col>
      </Row>

      <Row className='mb-3'>
        <Col> <FontAwesomeIcon icon="fa-solid fa-database" size="4x" fa-fw="true" /></Col>
        <Col> <FontAwesomeIcon icon="fa-brands fa-node" size="5x" fa-fw="true" /></Col>  
      </Row>

  
    </Container>
)
}
export default Skills
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Skills() {
    return (
      <div className='Skills'>
    <Container fluid>
      <Row>
        <Col> <FontAwesomeIcon icon="fa-brands fa-js fa-5x" size="5x" fa-fw /> </Col>
        <Col>  <FontAwesomeIcon icon="fa-brands fa-css3-alt" size="5x" fa-fw /></Col>
        <Col> <FontAwesomeIcon icon="fa-brands fa-node" size="5x" fa-fw /></Col>   
        <Col> <FontAwesomeIcon icon="fa-brands fa-github" size="5x" fa-fw /></Col>
        <Col> <FontAwesomeIcon icon="fa-brands fa-html5" size="5x" fa-fw /></Col>
        <Col> <FontAwesomeIcon icon="fa-brands fa-react" size="5x" fa-fw /> </Col>
      </Row>
        </Container>
      </div>

)
}
export default Skills
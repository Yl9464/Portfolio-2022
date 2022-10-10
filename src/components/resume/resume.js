import Accordion from 'react-bootstrap/Accordion';
import Header from "../header"
import Pictures from "../pictures"
import Row from 'react-bootstrap/Row';

function Resume() {
    return (
        <div>
            <Header />
            <div className='resume-flex-container'>
                <Pictures />
                
                <Row className='accordionRows'>
            
                    <Accordion className='resumeContent' defaultActiveKey={['0']} flush>
                        <Accordion.Item className="resumeLayout" eventKey="0">
                            <Accordion.Header style={{ backgroundColor: '#2C3639'}}>Work History</Accordion.Header>
                    <Accordion.Body>
                        <h5>  Web Developer, Open Avenues, Boston, MA </h5>
                        December 2021 - February 2022
                        <ul>
                            <li> Created a dashboard for displaying and filtering client information based on specific criteria.</li>
                            <li> Collaborated with team members using GitHub, Slack, and Zoom to coordinate version control.</li>
                            <li>Employed Twilio to send customized text messages to customers based on a variety of criteria.</li>
                            <li> Built a customized, multi-page web-based application utilizing MySQL, Express and React UI.</li>
                            <li> Collaborated with team members using GitHub, Slack, and Zoom to coordinate version control.</li>
                            <li> Employed Twilio to send customized text messages to customers based on a variety of criteria. </li>
                        </ul>


                        <h5>Dog Trainer, Sit Means Sit, Easton, MA</h5>
                        August 2018 - April 2021
                        <ul>
                            <li>Trained dogs of all ages, temperaments, and breed in basic obedience and agility skills.</li>
                            <li>Specialized in aggression rehabilitation.</li>
                            <li>Assisted in company sales through demos, relationship building, and support.</li>
                            <li>Established and maintained client relationships leading to higher retention and additional revenue growth.</li>
                            <li>Collaborated with team members using GitHub, Slack, and Zoom to coordinate version control.</li>
                            <li>Successfully transitioned company scheduling and operations to a digital format leading to greater efficiency and productivity.</li>
                        </ul>


                        <h5> Admission's Office Receptionist, Guilford College, Greensboro, NC</h5>
                        September 2015-  October 2016
                        <ul>
                            <li>Coordinated a robust scheduling program for prospective students.</li>
                            <li>Managed the workflow of documentation for college applicants.</li>
                            <li> Guided applicants and enrolled students to the appropriate department personnel based on their needs</li>
                        </ul>
                    </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
               
                
                    <Accordion className='resumeContent' defaultActiveKey={['0']} flush>
                    <Accordion.Item className="resumeLayout" eventKey="0">
             
                    <Accordion.Header>Education</Accordion.Header>
                    <Accordion.Body>

                        <h5>Web Development Certification, Framingham State University, Framingham MA</h5>
                        <u>October 2021- February 2022</u>
                        <p>An accelerated program in which students are taught the fundamentals of coding from industry-practitioner instructors. Skills are developed for in-demand technologies such as JavaScript, Node.js, MySQL, React, Express & RESTful APIs. Students gain real-world experience through a co-op-style industry project.</p>

                        <h5>Guilford College, Greensboro, NC </h5>
                        <u>September 2011 -May 2015</u>
                        <p>Marjor: Criminal Justic </p>
                        <p>Minor: Cyber Security</p>

                        <h5>The Cambridge School of Weston, Weston, MA </h5>
                        <u>September 2011 - May 2015</u>
                        <p>High School Diploma</p>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>

                <Accordion className='resumeContent' defaultActiveKey="0" flush>
                    <Accordion.Item className="resumeLayout" eventKey="0">
                    <Accordion.Header>Skills</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>  Chai, CSS, Express, </li>
                            <li> HTML, JavaScript, Mocha, </li>
                            <li>MySQL, Node.js, React, </li>
                            <li>RESTful APIs, Postman, Sequelize </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                    </Accordion>
            </Row>
            </div>
        </div>

    );
}
export default Resume

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "./app.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';

const Work = () => {
    return (
        <React.Fragment >
            <div className='work'>
                {/* navbar */}
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid>
                        <Navbar.Brand href="#">my bar</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#" disabled>
                                    my page
                                </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {/* heading */}
                <h1 className='poor'> my top 3 fav players</h1>
                {/* cards */}
                <div className='cards'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>cristiano ronaldo</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">top 1</Card.Subtitle>
                            <Card.Text className='text'>
                                Cristiano Ronaldo dos Santos Aveiro, commonly known as Cristiano Ronaldo or Ronaldo and nicknamed
                                 CR7, born February 5,
                                1985 in Funchal (Portugal), is a Portuguese international footballer
                                 who plays as a striker for Al-Nassr FC.
                            </Card.Text>
                            <Card.Link href="https://fr.wikipedia.org/wiki/Cristiano_Ronaldo">more info</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Vinícius Júnior</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">top 2</Card.Subtitle>
                            <Card.Text className='text'>
                            Vinícius José Paixão de Oliveira Júnior, better known as Vinícius Júnior , sometimes a
                            bbreviated Vinícius Jr. or Vini Jr., born July 12, 2000 in São Gonçalo in the state of Rio de Janeiro Brazil 
                            is a Brazilian-Spanish football player 
                            playing as a winger for the Brazilian team as well as Real Madrid.
                            </Card.Text>
                            <Card.Link href="https://fr.wikipedia.org/wiki/Vinícius_Júnior">more info</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>kylian mbappé</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">top 3</Card.Subtitle>
                            <Card.Text className='text'>
                                Kylian Mbappé on December 20, 1998 in Paris, is a French international footballer
                            </Card.Text>
                            <Card.Link href="https://fr.wikipedia.org/wiki/Kylian_Mbappé">more info</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </React.Fragment>

    )
}
 
export default Work;
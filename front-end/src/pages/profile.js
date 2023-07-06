import React, { useContext } from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { UserContext } from '../AuthContext/UserContext';

const Profile = () => {
    const { user } = useContext(UserContext);

    return (
        user != null ?
            <div>
                <Container>
                    <Row className='w-100 d-flex justify-content-center'>
                        <Col className='d-flex justify-content-center mt-5'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{`${user.prenom} ${user.nom}`}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>{user.email}</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href="#">Update User</Card.Link>
                                    <Card.Link href="#">Delete user</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div> : null
    )
}

export default Profile
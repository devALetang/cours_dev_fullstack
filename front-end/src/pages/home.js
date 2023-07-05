import React, { useEffect, useState } from 'react'
import { Button, Col, Modal, Row, Form, Card } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { createPost, getPosts } from '../api/post';

const Home = () => {
  const token = localStorage.getItem('token');
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posts, setPosts] = useState([]);

  const handleCreatePost = async (event) => {
    event.preventDefault();

    const data = {
      "title": title,
      "description": description
    }

    await createPost(data, token)
    .then(() => {
      console.log('post ajoute')
    })
    .catch((e) => {
      console.log(e);
    })
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getPosts()
    .then((posts) => {
      setPosts(posts);
    })
    .catch((e) => {
      console.log(e);
    })
  }, []);

  return token != null ? (
    <div>
      <section className='d-flex justify-content-center mt-5'>
        <Row>
          <Col className='d-flex justify-content-center'>
            <h3>Posts</h3>
          </Col>
          <Col className='d-flex justify-content-center'>
            <div
              className="modal show"
              style={{ display: 'block', position: 'initial' }}
            >
            <Button variant="primary" onClick={handleShow}>
              Create
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="formTitle"
                >
                  <Form.Label className="text-center">
                    Title
                  </Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter title"
                    value={title}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formDescription"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    placeholder="Description"
                    value={description}
                  />
                </Form.Group>
              </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleCreatePost}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
            </div>
          </Col>
        </Row>
      </section>
      <section>
        {posts.length > 0 ?
          posts.map((post) => {
            return (
              <Card key={post.id}>
                <Card.Title>{post.title}</Card.Title>
                <Card.Body>{post.description}</Card.Body>
              </Card>
            )
          }) : null
        }
      </section>
    </div>
  ) : <Navigate to='/login'/>
}

export default Home
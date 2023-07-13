import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createComment } from '../api/comment';

const CommentsModal = ({ close, show, postId }) => {
    const [content, setContent] = useState('');

    const handleSubmitComment = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
    
        const data = {
            "content": content,
        }
    
        await createComment(postId, data, token)
        .then(() => {
            close();
        })
        .catch((e) => {
            console.log(e);
        })
    }

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Create Comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group
                        className="mb-3"
                        controlId="formTitle"
                    >
                    <Form.Label className="text-center">
                        Content
                    </Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Content"
                        value={content}
                    />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-between'>
                <Button variant="secondary" onClick={close}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmitComment}>
                    Save
                </Button>
            </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CommentsModal;
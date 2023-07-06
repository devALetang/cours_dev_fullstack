import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { GrUpdate } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai';
import DeletePostModal from './deletePostModal';
import UpdatePostModal from './updatePostModal';

const PostCard = ({ postData, setPosts, posts }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);


    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);

    const handleCloseUpdateModal = () => setShowUpdateModal(false);
    const handleShowUpdateModal = () => setShowUpdateModal(true);

    return (
        <div className='d-flex align-items-center'>
            <Card className='m-4 w-50'>
                <Card.Title>{postData.title}</Card.Title>
                <Card.Body>{postData.description}</Card.Body>
            </Card>
            <div className='d-flex flex-column justify-content-between'>
                <Button className='btn btn-success mb-3'>
                    <GrUpdate onClick={handleShowUpdateModal}/>
                </Button>
                <Button className='btn btn-danger'>
                    <AiFillDelete onClick={handleShowDeleteModal}/>
                </Button>
            </div>
            <UpdatePostModal handleClose={handleCloseUpdateModal} show={showUpdateModal} post={postData} setPosts={setPosts} posts={posts}/>
            <DeletePostModal handleClose={handleCloseDeleteModal} show={showDeleteModal} postId={postData.id} setPosts={setPosts} posts={posts}/>
        </div>
    );
}

export default PostCard;
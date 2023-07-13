import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap';
import { GrUpdate } from 'react-icons/gr';
import { AiFillDelete, AiOutlineComment } from 'react-icons/ai';
import DeletePostModal from './deletePostModal';
import UpdatePostModal from './updatePostModal';
import { UserContext } from '../AuthContext/UserContext';
import env from 'react-dotenv';
import CommentsModal from './commentsModal';
import { getComments } from '../api/comment';

const PostCard = ({ postData, setPosts, posts }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showCommentModal, setShowCommentModal] = useState(false);
    const { user } = useContext(UserContext);
    const [comments, setComments] = useState([]);

    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);

    const handleCloseUpdateModal = () => setShowUpdateModal(false);
    const handleShowUpdateModal = () => setShowUpdateModal(true);

    const handleCloseCommentModal = () => setShowCommentModal(false);
    const handleShowCommentModal = () => setShowCommentModal(true);

    const fetchComments = async () => {
        await getComments(postData.id)
        .then((data) => setComments(data))
        .catch((e) => console.log(e))
    }

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <div className='d-flex align-items-center'>
            <Card className='m-4 w-50'>
                <Card.Title>{postData.title}</Card.Title>
                {postData.pictures !== null && postData.pictures !== 'test.png' ?
                    <Card.Img
                        variant="top" 
                        src={`${env.API_URL}/public/upload/posts/${postData.pictures}`}
                    />
                    : null
                }
                <Card.Body>
                    {postData.description}
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {comments.map((comment) => {
                        return (
                            <ListGroup.Item key={comment.id}>
                                <div>

                                </div>
                                <p>{comment.User.prenom + ' ' + comment.User.nom}</p>
                                <p>{comment.content}</p>
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </Card>
                {user && user.id === postData.users_id ?
                    <div className='d-flex flex-column justify-content-between'>
                        <Button className='btn btn-success mb-3'>
                            <GrUpdate onClick={handleShowUpdateModal}/>
                        </Button>
                        <Button className='btn btn-danger'>
                            <AiFillDelete onClick={handleShowDeleteModal}/>
                        </Button>
                        <Button className='btn btn-success mb-3'>
                            <AiOutlineComment onClick={handleShowCommentModal}/>
                        </Button>
                    </div> : null
                }
            <UpdatePostModal handleClose={handleCloseUpdateModal} show={showUpdateModal} postToUpdate={postData} setPosts={setPosts} posts={posts}/>
            <DeletePostModal handleClose={handleCloseDeleteModal} show={showDeleteModal} postId={postData.id} setPosts={setPosts} posts={posts}/>                
            <CommentsModal close={handleCloseCommentModal} show={showCommentModal} postId={postData.id}/>
        </div>
    );
}

export default PostCard;
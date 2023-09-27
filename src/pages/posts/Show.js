import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import DeletePost from "../../component/Delete";

const ShowPosts = () => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  const {postId} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => {
                setPost(data)
                setLoading(false)
                setError(null)
            }).catch(err => {
            setError(err.message)
            setLoading(true)
        })

    }, [postId])
    return(
        <div className='container mt-5'>
            <div className='row g-3'>
                <h2>Post : </h2>
                {error && <div>{error}</div>}

                {loading &&
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
                {
                    post &&
                    <div className='col-md-8' key={post.id} >
                        <div className="card mb-3">
                            <div className="card-header bg-transparent ">{post.title}</div>
                            <div className="card-body ">
                                <p className="card-text">{post.body}</p>
                            </div>
                            <div className="card-foote ">
                                    <Link className=' btn btn-sm btn-dark me-3' to={`/posts/edit/${postId}`}>Edit</Link>
                                    <DeletePost postId={post.id}/>
                            </div>
                        </div>
                    </div>
                }
            </div>

        </div>
    )

}

export default ShowPosts
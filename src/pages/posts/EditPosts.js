import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ListPosts from "../../component/ListPosts";
import EditFormPost from "../../component/EditFormPost";

const EditPosts = () => {
    const {postId} = useParams();

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
            <div className='row '>
                <div className='col-md-6'>
                    <h2>
                        Edit Post :
                    </h2>
                    {error && <div>{error}</div>}
                    {loading && <div>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    }
                    {
                        post && <EditFormPost post={post}/>
                    }
                </div>
            </div>
        </div>

    )

}

export default EditPosts
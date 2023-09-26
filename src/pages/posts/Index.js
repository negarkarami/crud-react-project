import {useEffect, useState} from "react";
import ListPosts from "../../component/ListPosts";
import {Link} from "react-router-dom";

const IndexPosts = () => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPosts(data)
                setLoading(false)
                setError(null)
            }).catch(err => {
            setError(err.message)
            setLoading(true)
        })

    }, [])
    return(
        <div className='container mt-5'>
            <div className='row g-3'>
                <h2>Posts : </h2>
                <div>
                    <Link className=' btn btn-dark' to={'/posts/create'}>Create Post</Link>
                </div>
                {error && <div>{error}</div>}
                {loading && <div>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                }
                {
                    posts && <ListPosts posts={posts}/>
                }

            </div>

        </div>
    )

}

export default IndexPosts
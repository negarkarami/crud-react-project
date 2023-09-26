
import {useEffect, useState} from "react";
import Swal from "sweetalert2";

const EditFormPost = ({post}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmite = (e) => {
        e.preventDefault()

        setLoading(true)

        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                body,
                userId: 1,
                id : post.id
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) =>  {
                setLoading(false)
                setError(null)
                Swal.fire({
                    title: 'Good job!',
                    text: 'post update!',
                    icon : 'success',
                    confirmButtonText : "ok"
                })
                console.log(json)
            }).catch(err =>  {
            setLoading(false)
            setError(err.message)

        })
    }
    useEffect(() => {
        setTitle(post.title)
        setBody(post.body)

    }, [])

    return(
        <>
            <form onSubmit={(e)=> handleSubmite(e)}>
                <div className="mb-3">
                    <label  className="form-label">Title</label>
                    <input type="text" value={title}  className="form-control" onChange={(e) => setTitle(e)} />
                    <div className="form-text text-danger">
                        {title ? '' :'Title is required'}
                    </div>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Body</label>
                    <textarea className="form-control" value={body} rows="4" onChange={(e) => setBody(e)}></textarea>
                    <div className="form-text text-danger">
                        {body ? '' :'Body is required'}
                    </div>
                </div>
                <button type={"submit"} className='btn btn-dark' disabled={title === "" || body === ""}>
                    Edit
                    {loading && <div className="spinner-border spinner-border-sm" ></div>}

                </button>
                {error && <div>{error}</div>}
            </form>

        </>
    )
}

export default EditFormPost
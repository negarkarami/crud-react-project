import Swal from "sweetalert2";
import {useState} from "react";

const DeletePost = ({postId}) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleDelete = () => {
        setLoading(true)

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE',
        })
            .then((response) => {
                setLoading(false)
                setError(null)
                Swal.fire({
                    title: 'Good job!',
                    text: 'delete post!',
                    icon: 'success',
                    confirmButtonText: "ok"
                })
            }).catch(err => {
            setLoading(false)
            setError(err.message)
        })
    }
    return (
        <>
            <button className='btn btn-sm btn-danger' onClick={handleDelete}>
                {loading && <div className="spinner-border spinner-border-sm"></div>}
                Delete
            </button>
            {error && <div>{error}</div>}
        </>
)
}

export default DeletePost



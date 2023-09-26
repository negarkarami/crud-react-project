import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const ShowUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  const {userId} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
                setLoading(false)
                setError(null)
            }).catch(err => {
            setError(err.message)
            setLoading(true)
        })

    }, [userId])
    return(
        <div className='container mt-5'>
            <div className='row g-3'>
                <h2>User : </h2>
                {error && <div>{error}</div>}

                {loading &&
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
                {
                    user &&
                        <div className='col-md-8' key={user.id}>
                            <div className="card" >
                                <div className="card-header">
                                    {user.name}
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"> username : {user.username}</li>
                                    <li className="list-group-item"> email : {user.email}</li>
                                    <li className="list-group-item"> phone : {user.phone}</li>
                                    <li className="list-group-item"> Website : {user.website}</li>
                                </ul>
                            </div>
                        </div>
                }
            </div>

        </div>
    )

}

export default ShowUser
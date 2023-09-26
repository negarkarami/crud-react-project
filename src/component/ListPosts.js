import {Link} from "react-router-dom";

const ListPosts = ({posts}) => {
    return(
        <>
            {
                posts.map((post) => (
                   <div className='col-md-4' key={post.id} >
                       <div className="card border-dark mb-3" >
                           <div className="card-body text-dark">
                               <h5 className="card-title">
                                   <Link to={`/posts/${post.id}`}>
                                       {post.title}
                                   </Link>
                                   </h5>
                               <p className="card-text">{post.body}</p>
                           </div>
                       </div>
                   </div>

                ))
            }
        </>
    )

}

export default ListPosts
import {NavLink} from "react-router-dom";

const Header = () => {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className={(navData) =>navData.isActive? "nav-link active" : "nav-link" } to={'/'}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={(navData) =>navData.isActive? "nav-link active" : "nav-link" } to={'/users'}>Users</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={(navData) =>navData.isActive? "nav-link active" : "nav-link" } to={'/posts'}>Posts</NavLink>
                    </li>
                </ul>
            </div>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <NavLink className="nav-link p-1 me-3" to={'/cart'}>
                        <span className='badge rounded-pill bg-primary me-1'></span>
                        <i className="bi bi-cart" style={{fontSize:'1.5rem'}}></i>
                    </NavLink>

                </li>
            </ul>

        </nav>
    )
}

export default Header
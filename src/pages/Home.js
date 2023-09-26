import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const Home = () => {

    return(
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisici elit, …“ ist ein Blindtext, der nichts bedeuten soll, sondern als Platzhalter im Layout verwendet wird, um einen Eindruck vom fertigen Dokument zu erhalten.
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipisici elit, …“ ist ein Blindtext, der nichts bedeuten soll, sondern als Platzhalter im Layout verwendet wird, um einen Eindruck vom fertigen Dokument zu erhalten.
                    </p>
                    <Link className='btn btn-dark' to={'/users'}>Users</Link>
                    <Link className='btn btn-light ms-3' to={'/posts'}>Posts</Link>
                </div>
            </div>

        </div>
    )

}

export default Home
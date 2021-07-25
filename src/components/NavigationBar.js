import {NavLink, Link} from 'react-router-dom';
function NavigationBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <Link className="navbar-brand" to={'/'}>My blog</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation"><span
                    className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink activeClassName="active" className="nav-link" aria-current="page" to={'/'}>Home</NavLink>
                        </li>
                        <li className="nav-item"><NavLink activeClassName="active" className="nav-link" aria-current="page" to={'/about'}>About</NavLink>
                        </li>
                        <li className="nav-item"><NavLink activeClassName="active" className="nav-link" aria-current="page" to={'/contacts'}>Contacts</NavLink>
                        </li>
                        <li className="nav-item"><NavLink activeClassName="active" className="nav-link" aria-current="page" to={'/services'}>Services</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavigationBar
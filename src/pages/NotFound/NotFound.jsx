import { Link } from "react-router-dom"
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="error-wrapper">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center error-content">
                    <h1>404</h1>
                    <p>Page not found</p>
                    <Link to="/" className="btn btn-primary">Go to Home</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NotFound
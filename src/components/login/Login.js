import React, { useState }  from 'react';
import { useHistory } from "react-router-dom";
import auth from '../../auth/auth';

const LoginForm = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        auth.onAuthentication();
        auth.saveToken(email);
        history.push('/comment');

    };

    return ( 
        <div className='container'>
            <div>
                <h1>Login to evaluate the course</h1>
            </div>
            <div className='bg-light mt-4 p-5'>
                <form className="row g-3" onSubmit={handleSubmit} >
                    <div className="col-12">
                        <label>Username:</label>
                        <input type="email" className="form-control" placeholder="Username" onChange={e => setEmail(e.target.value)} required />
                    </div>
				    <div className="col-12">
						<label>Password:</label>
						<input type="password" autoComplete='false' className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
					</div>
                    <div className="col-12">
						<button type="submit" className="btn btn-primary float-end">Login</button>
					</div>
                </form>
            </div>
        </div>
    );
}
 
export default LoginForm;
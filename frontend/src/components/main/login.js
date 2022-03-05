import clsx from 'clsx';
import '../stylesheet/login.css';
import { Formik } from 'formik';
//import app_config from './config';
//import Swal from 'sweetalert2';

const Login = () => {

    return (
                    <div className="card-body">
                        <Formik>{(
                            <form >
                                <label className="mt-5 w-100">Email</label>
                                <input className="form-control" name="email" /><br></br>

                                <label className="mt-4">Password</label>
                                <input className="form-control" type="password" name="password" /><br></br>

                                <button type="submit" className="mt-5 btn btn-primary w-100">Login</button>
                            </form>
                        )}


                        </Formik>
                        <a href="#">Forgot Password</a>
                        <div className="float-end">
                            <a href="./signup">Not Registered Yet?</a>
                        </div>

                    </div>
    )
}


export default Login;
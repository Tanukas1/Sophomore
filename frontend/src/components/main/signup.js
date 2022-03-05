import { Formik } from 'formik';
import '../stylesheet/signup.css';

const Signup = () => {

    
    return (
            <div className="card">
                          <Formik>
                                    <form>
                                    <label className="mt-3">Name</label>
                                        <input className="form-control" name="name" /><br></br>

                                        <label className="mt-3">Email</label>
                                        <input className="form-control" name="email" /><br></br>

                                        <label className="mt-3">Password</label>
                                        <input className="form-control" type="password" name="password" /><br></br>

                                        <label className="mt-3">Confirm Password</label>
                                        <input className="form-control" type="password" name="password" /><br></br>
                                       
                                        <button type="submit" className="btn btn-primary mt-5">Submit</button>
                                    </form>
                            
                            </Formik>
                            
                        <div className="float-end">
                            <h6>already have an account?</h6>
                            <a href='./login'>LOGIN</a>
                        </div>

                        </div>       
    
    )
}

export default Signup;
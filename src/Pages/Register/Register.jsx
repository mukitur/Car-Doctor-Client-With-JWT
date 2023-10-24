import { useContext, useState } from 'react';
import image from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { FaSquareCheck } from 'react-icons/fa6';

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // Reset error & success
    setRegisterError('');
    setRegisterSuccess('');

    // Check password
    if (password.length < 6) {
      setRegisterError('Password must be minimum 6 Character Long');
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError('Your password should one upper case Letter');
      return;
    } else if (!/[?=.*[!#$%&?]/.test(password)) {
      setRegisterError('Your password should one special character');
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setRegisterSuccess('Your Account Successfully created');
        form.reset();

        // update profile
        updateProfile(result.user, {
          displayName: name,
        });
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="hero min-h-[85%]  my-5">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={image} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <h1 className="text-3xl font-bold text-center text-[#444] mt-16">
            SignUp
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
            <div>
              <p className="font-poppins text-sm text-gray-600">
                Already have account? Please
                <Link to="/login">
                  <button className="btn-link text-[#009cd9] ml-1 mt-3">
                    Login!
                  </button>
                </Link>
              </p>
              {registerError && <p>{registerError}</p>}
              {registerSuccess && (
                <p className="text-blue-500 flex gap-2 items-center mt-3">
                  {' '}
                  <FaSquareCheck />
                  {registerSuccess}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

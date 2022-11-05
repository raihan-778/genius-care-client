import React, { useContext } from "react"
import { Link } from "react-router-dom"
import login from "../../assets/images/login/login.svg"
import { AuthContext } from "../../context/AuthProvider/AuthProvider"

const Register = () => {
  const { user, userSignUp } = useContext(AuthContext)
  const handleRegister = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password)

    userSignUp(email, password)
      .then((result) => {
        console.log(result.user)
        if (user?.uid) {
          alert("You have successfully registered")
          form.reset()
        }
      })
      .catch((err) => console.error(err))
  }
  return (
    <div>
      <div className="hero w-full bg-base-200">
        <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
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
                  placeholder="Enter Your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="Enter password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  Already have an account? Please
                  <Link className="text-orange-600" to="/login">
                    Login
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

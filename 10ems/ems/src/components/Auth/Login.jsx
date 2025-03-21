import React, { useState } from 'react'

function Login() {
const [userdetails,SetuserDetails]=useState({email:"",password:""})
const submitHandler=(e)=>{
e.preventDefault()
alert("form submited")
}
  
  return (
  
   <>
    <div >
      <div>
        
        <h2 >
          Sign in to your account
        </h2>
      </div>

      <div >
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="email" >
              Email address
            </label>
            <div >
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                onChange={(e)=>{SetuserDetails(userdetails["email"])=e.target.value}}
                value={userdetails["email"]}
                
              />
            </div>
          </div>

          <div>
            <div >
              <label htmlFor="password" >
                Password
              </label>
              <div className="text-sm">
                <a href="#" >
                  Forgot password?
                </a>
              </div>
            </div>
            <div >
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              
            >
              Sign in
            </button>
          </div>
        </form>

        <p >
          Not a member?{' '}
          <a href="#" >
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  </>
  )
}

export default Login
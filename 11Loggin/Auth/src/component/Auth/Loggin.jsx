import React,{useState} from 'react'

function Loggin() {
    const [user, setuser] = useState({
        email: "",
        password: "",
      });
    const handleSubmit = (e) => {
        e.preventDefault(); //preseve the page behavior
        alert(user["email"])
        
      };
  return (
    <>
    <div className="outer">
      <div className="inner inner1">
        <header className="form_head">
          <h1>Sign-Up</h1>
          <p>
            <b>
              <i>Create your Account</i>
            </b>
          </p>
        </header>
        <main className="form_body">
          <form onSubmit={handleSubmit}>
            <div className="gapping">
              <p>
                <label htmlFor="Email">Email</label>
                <input
                  type="text"
                  name=""
                  id="Email"
                  value={user["email"]}
                  onChange={(e) => {
                    setuser({ ...user, email: e.target.value });
                  }}
                  placeholder="Enter You Email"
                  required
                />
               
              </p>

              <p>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="pass"
                  id="password"
                  placeholder="Enter You Password"
                  required
                  value={user["password"]}
                  onChange={(e) => {
                    setuser({ ...user, password: e.target.value });
                  }}
                />
                
              </p>
              
                <p id="centering">
                  <input
                    type="Submit"
                    name=""
                    id="Submit"
                    value="Signup"
                    readOnly
                  />
                </p>
              
            </div>
          </form>

          <div
            className="footer"
            style={{
              color: "",
              alignItems: "center",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Already have account?Login!
          </div>
        </main>
      </div>
    </div>
  </>
  )
}

export default Loggin
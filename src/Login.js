import { useState } from 'react';
import { FaEye }from 'react-icons/fa';
import { FaEyeSlash }from 'react-icons/fa';
import Logo from './logo.png';
import PropTypes from 'prop-types';
// import RecoverAccount from './RecoverAccount';
// import { Link } from 'react-router-dom';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

function Login( {setToken} ) {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      userName,
      password
    });
    setToken(token);
  }

  const [passwordType, setPasswordType] = useState("password");
  const togglePassword =()=>{
    if(passwordType==="password"){
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
  
  // const linkStyle = {
  //   color: 'maroon',
  //   borderRadius: '10px'
  // }

  return (

    <div className="Login">
      <div className='icon'>
        <img src={Logo} alt="Logo" id='Logo' />
        <p>| B2B Dashboard</p>
      </div>

      <div className="LoginForm">
          

            <h2>Login to your Account</h2>
            <h4>Admin account login </h4>
            <br />
          <form onSubmit={handleSubmit}>
            <input 
              type= 'text' 
              placeholder='Username'
              name="UserName"
              autoFocus
              autoCapitalize="none" 
              autoComplete="UserName" 
              required
              onChange={e => setUserName(e.target.value)}
            />
            <br />

            <i onClick={togglePassword} id="eyeIcon">
              { passwordType==="password"? <i><FaEye /></i> :<i><FaEyeSlash /></i> }
            </i>

            <input 
              type={ passwordType } 
              placeholder='Password'
              name="Password"
              onChange={(e) => setPassword(e.target.value)}
              autoCapitalize="none" 
              autoComplete="current-password" 
              required
            />
            <br />

            <input 
              type='submit'
              value="Login" 
              autoCapitalize="none" 
              required
              id='LoginButton'
            />
            <br />

            <div className="forgotPassword">
              Forgot Password? 
              {/* <Link to="/RecoverAccount" style={linkStyle}>Recover Account</Link> */}
            </div>
          </form>
      </div> 

    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default Login;

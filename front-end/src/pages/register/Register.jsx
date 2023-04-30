import './Register.scss'
import newRequest from '../../utils/newRequest'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    passsword: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked }
    });
  }

  const hanldeSubmit = async (e) => {
    try {

      await newRequest.post('/auth/register', {
        ...user
      });

      navigate('/');

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='register'>
      <form onSubmit={hanldeSubmit}>
        <div className="left">
          <h1>Create new account</h1>
          <label htmlFor="">Username</label>
          <input type="text" name='username' placeholder='john doe' onChange={handleChange} />

          <label htmlFor="">Email</label>
          <input type="email" name='email' placeholder='email' onChange={handleChange} />

          <label htmlFor="">Password</label>
          <input type="password" name='password' placeholder='password' onChange={handleChange} />

          <label htmlFor="">Profile</label>
          <input type="file" className='file' />

          <label htmlFor="">Country</label>
          <input type="text" name="country" placeholder='Canada' onChange={handleChange} />
          <button type='submit'>Register</button>
        </div>

        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account.</label>
            <label className='switch'>
              <input type="checkbox" onChange={handleSeller} />
              <span className='slider round'></span>
            </label>
          </div>
          <label htmlFor=''>Phone Number</label>
          <input type="text" name='phone' placeholder='123425231' onChange={handleChange} />

          <label htmlFor=''>Description</label>
          <textarea type="text" name='desc' cols='30' rows='10' placeholder='A short description of yourself' onChange={handleChange}></textarea>
        </div>
      </form>
    </div >
  );
}

export default Register
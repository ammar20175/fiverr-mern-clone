import './Navbar.scss'
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import newRequest from '../../utils/newRequest'

const Navbar = () => {

  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation()
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive)
    }
  }, []);

  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  const handleLogout = async () => {
    try {
      await newRequest.post('/auth/logout');
      localStorage.setItem('currentUser', null);
      navigate('/');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={active || pathname !== '/' ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to='/' className='link'>
            <span className='text'>Fiverr</span>
            <span className='dot'>.</span>
          </Link>
        </div>

        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <Link to='/login' className='link'><span>Sign in</span></Link>

          {!currentUser?.isSeller && <span> Become a Seller</span>}
          {!currentUser && <Link className='link' to='/register'><button>Join</button></Link> }

          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || '/img/art2.jpg'} alt="" />
              <span>{currentUser?.username}</span>

              {open && <div className="options">
                {currentUser?.isSeller && (
                  <>
                    <Link to='/mygigs' className='link'>
                      <span>Gigs</span>
                    </Link >
                    <Link to='/add' className='link'>
                      <span>Add New Gig</span>
                    </Link>
                  </>
                )}
                <Link to='/orders' className='link'>
                  <span>Orders</span>
                </Link>
                <Link to='messages' className='link'>
                  <span>Messages</span>
                </Link>
                <Link className='link' onClick={handleLogout}>
                  <span>Logout</span>
                </Link>

              </div>}

            </div>
          )

          }
        </div>
      </div>

      {
        (active || pathname !== '/') && (<>
          <hr />
          <div className="menu">
            <Link className='link' to='/'>
              Graphics & Design
            </Link>
            <Link className='link' to='/'>
              Video & Animation
            </Link>
            <Link className='link' to='/'>
              Writing & Translation
            </Link>
            <Link className='link' to='/'>
              AI Services
            </Link>
            <Link className='link' to='/'>
              Digital Marketing
            </Link>
            <Link className='link' to='/'>
              Music & Audio
            </Link>
            <Link className='link' to='/'>
              Business
            </Link>
            <Link className='link' to='/'>
              LifeStyle
            </Link>
          </div>
        </>)
      }
    </div >
  )
}

export default Navbar
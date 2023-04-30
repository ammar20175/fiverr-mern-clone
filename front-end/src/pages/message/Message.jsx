import './Message.scss'
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className="breadcrumbs">
          <Link to='/messages' className='link'>MESSAGES : JOHN DOE</Link>
        </span>

        <div className="messages">
          <div className="item">
            <img src="/img/profilePic.png" alt="" />
            <p>
              hellow dvfdsacdvfsfsdv dekflewc ejkndlahfenru
              asdsjfsndfnksfkjern ajrbg rasrre rekjervniu s
              wergv ewcnjeior pqkedorm j vrekinvinb  cajeknf
              kasldweim mdmcsoejfmc.
            </p>
          </div>

          <div className="item owner">
            <img src="/img/profilePic.png" alt="" />
            <p>
              hellow dvfdsacdvfsfsdv dekflewc ejkndlahfenru
              asdsjfsndfnksfkjern ajrbg rasrre rekjervniu s
              wergv ewcnjeior pqkedorm j vrekinvinb  cajeknf
              kasldweim mdmcsoejfmc.
            </p>
          </div>
        </div>

        <hr />

        <div className="write">
          <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message
import './MyGigs.scss'
import { Link } from 'react-router-dom'

const MyGigs = () => {
  return (
    <div className='myGigs'>
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link className='link' to='/add'>
            <button>Add New Gig </button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Orders</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className='imgg' src="/img/profilePic.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>33</td>
            <td>543</td>
            <td>
              <img className='del' src="/img/delete.png" alt="" />
            </td>
          </tr>

        </table>
      </div>
    </div>
  )
}

export default MyGigs
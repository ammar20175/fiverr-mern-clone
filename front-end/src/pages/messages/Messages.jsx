import './Messages.scss'
import { Link } from 'react-router-dom'

const Messages = () => {


  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true
  }

  const message = `hello from the seller`

  return (
    <div className='messages'>
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td>John Doe</td>
            <td><Link to='/message/123' className='link'>{message.substring(0, 100)}...</Link></td>
            <td>3 April 2023</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr className='active'>
            <td>John Doe</td>
            <td><Link to='/message/123' className='link'>{message.substring(0, 100)}...</Link></td>
            <td>3 April 2023</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>


        </table>
      </div>
    </div>
  )
}

export default Messages
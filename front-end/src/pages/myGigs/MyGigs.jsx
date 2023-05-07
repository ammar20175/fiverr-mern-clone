import './MyGigs.scss'
import { Link } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom';

const MyGigs = () => {

  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ['myGigs'],
    queryFn: () =>
      newRequest(`/gigs?userId=${currentUser._id}`).then((res) => {
        return res.data;
      })
  })

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['myGigs']);
    }
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  }


  return (
    <div className='myGigs'>
      {isLoading ? 'loading' : error ? 'something went wrong' : (
        <div className="container">
          <div className="title">
            <h1>Gigs</h1>
            {currentUser.isSeller && (
              <Link className='link' to='/add'>
                <button>Add New Gig </button>
              </Link>
            )}
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Orders</th>
              <th>Action</th>
            </tr>
            {data.map((gig) => (
              <tr>
                <td>
                  <img className='imgg' src="/img/profilePic.png" alt="" />
                </td>
                <td>{gig.title}</td>
                <td>{gig.price}</td>
                <td>{gig.sales}</td>
                <td>
                  <img className='del' src="/img/delete.png" alt="" onClick={() => handleDelete(gig._id)} />
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  )
}

export default MyGigs
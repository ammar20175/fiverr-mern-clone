import './Add.scss'
import { useState, useReducer } from 'react';
import { gigReducer, INITIAL_STATE } from '../../reducers/gitReducer';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom';

const Add = () => {

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: 'CHANGE_INPUT',
      payload: { name: e.target.name, value: e.target.value }
    });
  }

  const handleFeature = (e) => {
    dispatch({
      type: 'ADD_FEATURE',
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  }

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post('/gigs', gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['myGigs']);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    navigate('/mygigs')

  }
  return (
    <div className='add'>
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input type="text" placeholder='e.g I will do something.' name='title' onChange={handleChange} />
            <label htmlFor="">Category</label>
            <select name='cat' id='cats' onChange={handleChange}>
              <option value="desgin">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>

            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea name='desc' onChange={handleChange} id="" cols="30" rows="16" placeholder='brief description to introduce your services to customers'></textarea>
            <button onClick={handleSubmit}>Create</button>
          </div>


          <div className="right">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder='e.g. One-page web design' name='shortTitle' onChange={handleChange} />

            <label htmlFor="">Short Description</label>
            <textarea type="text" col='30' rows='10' placeholder='Short description of your service.' name='shortDesc' onChange={handleChange}></textarea>

            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input name='deliveryTime' onChange={handleChange} type="number" min={1} />

            <label htmlFor="">Revision Number</label>
            <input name='revisionNumber' onChange={handleChange} type="number" min={1} />

            <label htmlFor="">Add Features</label>
            <form action="" onSubmit={handleFeature}>
              <input type="text" placeholder='e.g. page design' />
              <button>add</button>
            </form>

            <div className="addedFeatures">
              {state?.features?.map((f) => {
                <div className="item" key={f}>
                  <button onClick={() => dispatch({ type: 'REMOVE_FEATURES', payload: f })}>
                    {f}
                    <span>X</span>
                  </button>
                </div>
              })}
            </div>

            <label htmlFor="">Price</label>
            <input name='price' onChange={handleChange} type="number" min={1} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Add
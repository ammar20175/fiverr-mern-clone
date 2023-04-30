import './Add.scss'

const Add = () => {
  return (
    <div className='add'>
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input type="text" placeholder='e.g I will do something.' />
            <label htmlFor="">Category</label>
            <select name='cats' id='cats'>
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
            <textarea name="" id="" cols="30" rows="16" placeholder='brief description to introduce your services to customers'></textarea>
            <button>Create</button>
          </div>


          <div className="right">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder='e.g. One-page web design' />

            <label htmlFor="">Short Description</label>
            <textarea type="text" col='30' rows='10' placeholder='Short description of your service.'></textarea>

            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" min={1} />

            <label htmlFor="">Revision Number</label>
            <input type="number" min={1} />

            <label htmlFor="">Add Features</label>
            <input type="text" placeholder='e.g. page design' />
            <input type="text" placeholder='e.g. file uploading' />
            <input type="text" placeholder='e.g. setting up a domain ' />
            <input type="text" placeholder='e.g. hosting' />

            <label htmlFor="">Price</label>
            <input type="number" min={1} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Add
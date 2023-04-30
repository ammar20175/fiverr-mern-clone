import { useEffect, useRef, useState } from 'react'
import GigCard from '../../components/gigCard/GigCard';
import './Gigs.scss'
// import { gigs } from '../../data'
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { useLocation } from 'react-router-dom';

const Gigs = () => {

  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();
  console.log(search)

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
      newRequest(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`).then(res => {
        return res.data;
      })

  });
  console.log(data)

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  }

  useEffect(() => {
    refetch();
  }, [sort])

  const apply = () => {
    refetch();
  }

  return (
    <div className='gigs'>
      <div className="container">
        <span className='breadcrumbs'>FIVERR  GRAPHICS & DESIGN</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists.
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="text" placeholder='min' />
            <input ref={maxRef} type="text" placeholder='max' />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className='sortBy'>SortBy</span>
            <div className="sortType">{sort === 'sales' ? 'Best Selling' : 'Newest'}</div>
            <img src="./img/down.png" alt="" onClick={() => (setOpen(!open))} />
            {open && (<div className="rightMenu">
              {sort === 'sales' ? (<span onClick={() => reSort('createdAt')}>Newest</span>)
                : (<span onClick={() => reSort('sales')}>Best Selling</span>)}
            </div>)}
          </div>
        </div>

        <div className="cards">
          {isLoading ? "loading" : error ? "something went wrong." :
            data.map(gig => (
              <GigCard item={gig} key={gig._id} />
            ))}
        </div>

      </div>
    </div>
  )
}

export default Gigs
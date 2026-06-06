import React, { useState, useEffect } from 'react';
import { supabase } from '../Supabase';
import { Link } from 'react-router-dom';
import BackHeader from '../Components/BackHeader';
import Nav from '../Components/Nav';
import empty_cart from '../Assets/empty_cart.png';
import back2 from '../Assets/back2.svg';
import './Notifications.css';

const SharedLists = () => {
 const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllLists() {
      setLoading(true);
      const { data, error } = await supabase
        .from('lists')
        .select("*")
        .limit(3)
        .order("id", { ascending: true });

      if (!error)
        setLists(data);
      setLoading(false);
    }
    getAllLists();
  }, []);

  return (<div className='notify_body'>
      <BackHeader title='Your Lists' subtitle='3 Lists' url='/SharedList' />
      
    {/* <div className='header_w flex_row_end'>
            <div className='flex_row'>
            <Link to='/Home' className='back'>
                <img src={back2} alt="" />
            </Link>
                <h1 className='notify_title'>Notifications</h1>
            </div>
                <p className='underline2'>4 unread</p>
        </div> */}
      
          <div className="wavy_divider3"></div>
          <Link to='/SharedList2'>
          <div className='notify_bg gap_vh'>
              {lists.map((list) => (
                <div className='notify_card' key={list.id}>
                    <div className='flex_row_end'>
                    <h2 className='notify_h'><span className='notify'>|</span> {list.date}</h2>
                    <img className='store' src={list.store}/>
                    </div>                   
                    <div className='flex_row gap_vh'>
                    <p className='notify_p'>{list.items} items</p>
                    <p className='notify_p'>{list.members} members</p>
                    <p className='notify_p'>{list.duration}</p>
                    <p className='notify_p'>{list.amount} Egp</p>
                    </div>
                </div>
              ))}
          </div>
          </Link>
      
      <Nav />
    </div>
  );
};

export default SharedLists;
import React, { useState, useEffect } from 'react';
import { supabase } from '../Supabase';
import { Link } from 'react-router-dom';
import BackHeader from '../Components/BackHeader';
import Nav from '../Components/Nav';
import empty_cart from '../Assets/empty_cart.png';
import back2 from '../Assets/back2.svg';
import './Notifications.css';

const Notifications = () => {
 const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllNotifications() {
      setLoading(true);
      const { data, error } = await supabase
        .from('notifications')
        .select("*")
        .limit(4)
        .order("id", { ascending: true });

      if (!error)
        setNotifications(data);
      setLoading(false);
    }
    getAllNotifications();
  }, []);

  return (<div className='notify_body'>
    <div className='header_w flex_row_end'>
            <div className='flex_row'>
            <Link to='/Home' className='back'>
                <img src={back2} alt="" />
            </Link>
                <h1 className='notify_title'>Notifications</h1>
            </div>
                <p className='underline2'>4 unread</p>
        </div>
      
          <div className="wavy_divider3"></div>
          <div className='notify_bg gap_vh'>
              {notifications.map((notification) => (
                <div className='notify_card' key={notification.id}>
                    <h2 className='notify_h'><span className='notify'>|</span> {notification.title}</h2>
                    <p className='notify_p'>{notification.text}</p>
                </div>
              ))}
          </div>
      
      <Nav />
    </div>
  );
};

export default Notifications;
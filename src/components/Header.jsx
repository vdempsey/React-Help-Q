import React from 'react';
import { Link } from 'react-router-dom';
import help from '../assets/images/help.jpg';

function Header(){
  return (
    <div>
      <style jsx>{`
        img {
          width: 300px;
          display: block;
          padding-bottom: 20px;
        }
      `}</style>
      <img src={help}/>
      <Link to ='/'>Home</Link> | <Link to='/newticket'>Create Ticket</Link>
    </div>
  );
}

export default Header;

import React from 'react';
import Image from 'next/image';
import starimg from '../../../public/image/Star 7.png';
import logoimg from '../../../public/image/image 8.png';

const Home2Banner2 = () => {
  const userdetails = [
    {
      img: logoimg,
      starimg: starimg,
      name: 'Mark Daniel',
      comments: '“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”',
      date: new Date().toLocaleDateString(),
    },
    {
      img: logoimg,
      starimg: starimg,
      name: 'Jane Smith',
      comments: '“Great experience, highly recommend for everyone!”',
      date: new Date().toLocaleDateString(),
    },
    {
      img: logoimg,
      starimg: starimg,
      name: 'John Doe',
      comments: '“Memorable journey with top-notch services!”',
      date: new Date().toLocaleDateString(),
    },
    {
      img: logoimg,
      starimg: starimg,
      name: 'John Doe',
      comments: '“Memorable journey with top-notch services!”',
      date: new Date().toLocaleDateString(),
    },
  ];

  return (
    <div className="banner2 margintop padding-left">
      <div className="banner2-box1">
        <h2>What our <br/>Travelers are Saying</h2>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="footer-comments-boxes">
        <div className="footer-comment-boxes-scroll">
          {userdetails.map((item, index) => (
            <div className="footer-comment-box" key={index}>
              <div className="footer-comment-box-header">
              
           <div>
           <div className="footer-comment-box-stars">
                  <Image src={item.starimg} alt="Star Rating" width={20} height={20} />
                  <Image src={item.starimg} alt="Star Rating" width={20} height={20} />
                  <Image src={item.starimg} alt="Star Rating" width={20} height={20} />
                  <Image src={item.starimg} alt="Star Rating" width={20} height={20} />
                  <Image src={item.starimg} alt="Star Rating" width={20} height={20} />
                </div>
              <br />
                  <h3>{item.name}</h3>

           </div>
              <div className="footer-comment-box-details">
                  <Image src={item.img} alt="User Logo" width={50} height={50} />
              </div>
                </div>
              <p className="footer-comment-box-comment">{item.comments}</p>
              <p className="footer-comment-box-date">{"5 Days Ago"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home2Banner2;

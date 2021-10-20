import React, { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';
import Header from '../Header/Header';

import './View.css';
function View() {
  const [userDetails, setUserDeatils] = useState()
  const { firebase } = useContext(FirebaseContext)
  const { postDetails } = useContext(PostContext)
  useEffect(() => {
    const { userId } = postDetails
    firebase.firestore().collection('users').where('id', '==', userId).get().then((res) => {
      res.forEach(doc => {

        setUserDeatils(doc.data())
        console.log(doc.data, "data");
      });
    })
  }, [])
  return (
    <div>
      <Header />
      <div className="viewParentDiv">
        <div className="imageShowDiv">
          <img
            src={postDetails.url}
            alt=""
          />
        </div>
        <div className="rightSection">
          <div className="productDetails">
            <p>&#x20B9; {postDetails.price} </p>
            <span>YAMAHA R15V3</span>
            <p>Two Wheeler</p>
            <span>Tue May 04 2021</span>
          </div>
          {userDetails && <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>}
        </div>
      </div>
    </div>
  );
}
export default View;

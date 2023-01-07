import React from 'react'
import logo from "../Images/logo.png"
import dropdown from "../Images/dropdown.png"
import user from "../Images/user.png"
import "./desktop.css";

const desktop1 = () => {
  return (
    <>
        <div className='containe'>
        <div className='containe5'>
          <img src={logo} alt='error'></img>
          <div className='containe5-1'>
            <ul>
              <li id="firs">My Assignment</li>
              <li id="secon">Chat With Mentor</li>
              <li className='thir' id='thirdfirs'><img src={user} alt='error'></img></li>
              <li className='thir' id='thirdsecon'>ProfileName</li>
              <li className='thir' id='thirdthir'><img src={dropdown} alt='error'></img></li>
            </ul>
          </div>
        </div>

        <div className='containe1'>
          <div className='sectio2'>UI/UX &gt; Refer & Earn &gt; Friends Reffered</div>
        </div>

        <div className='containe2'>Your Refferal Code</div>
        <div className='containe2-1'>EDCH54</div>

        <div className='containe3'>
          <div className='containe3-1'>Wallet Balance</div>
          <div className='containe3-2'>₹500</div>
        </div>

        <div className='container6'>
          <p className='container6-1'>Friends Who Enrolled</p>
          <p className='container6-2'>(3)</p>
        </div>

        <div className='container7'>
          <div className='container7-1'>
            <div className='container7-1-1'>Dhiraj Saxsena</div>
            <div className='container7-1-2'>14 Sep, 2022</div>
            <div className='container7-1-3'>Courses Enrolled(6)</div>
            <div className='container7-1-4'>UI/UX</div>
            <div className='container7-1-5'>Photoshop</div>
            <div className='container7-1-6'>Illustrator</div>
            <div className='container7-1-7'>Python</div>
            <div className='container7-1-8'>MERN</div>
            <div className='container7-1-9'>JAVA</div>
            <div className='container7-1-10'>Referral Amount</div>
            <div className='container7-1-11'>₹185</div>
          </div>
          <div className='container7-2'>
          <div className='container7-2-1'>Subhash Mishra</div>
            <div className='container7-2-2'>15 Sep, 2022</div>
            <div className='container7-2-3'>Courses Enrolled(23)</div>
            <div className='container7-2-4'>UI/UX</div>
            <div className='container7-2-5'>Photoshop</div>
            <div className='container7-2-6'>Illustrator</div>
            <div className='container7-2-7'>Python</div>
            <div className='container7-2-8'>MERN</div>
            <div className='container7-2-9'>JAVA</div>
            <div className='container7-2-10'>C++</div>
            <div className='container7-2-11'>Referral Amount</div>
            <div className='container7-2-12'>₹185</div>
          </div>
          <div className='container7-3'>
          <div className='container7-3-1'>Prafull Kumar</div>
            <div className='container7-3-2'>16 Sep, 2022</div>
            <div className='container7-3-3'>Courses Enrolled(23)</div>
            <div className='container7-3-4'>UI/UX</div>
            <div className='container7-3-5'>Photoshop</div>
            <div className='container7-3-6'>Illustrator</div>
            <div className='container7-3-7'>Python</div>
            <div className='container7-3-8'>MERN</div>
            <div className='container7-3-9'>JAVA</div>
            <div className='container7-3-10'>C++</div>
            <div className='container7-3-11'>Referral Amount</div>
            <div className='container7-3-12'>₹185</div>
          </div>
          </div>

        <div className='containe4'>
        Terms & Conditions
        </div>
        </div>
    </>
  )
}

export default desktop1
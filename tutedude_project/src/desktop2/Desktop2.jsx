import React from 'react'
import "./desktop2.css"
import logo from "../Images/logo.png"
import discount from "../Images/discount.png";
import rupees from "../Images/rupees.png"
import share_people from "../Images/share_people.png"
import user from "../Images/user.png"
import wallet from "../Images/wallet.png"
import tag from "../Images/tag.png"
import dropdown from "../Images/dropdown.png";

const Desktop2 = () => {
  return (
    <>
      <div className='container'>
        <div className='container5'>
          <img src={logo} alt='error'></img>
          <div className='container5-1'>
            <ul>
              <li id="first">My Assignment</li>
              <li id="second">Chat With Mentor</li>
              <li className='third' id='thirdfirst'><img src={user} alt='error'></img></li>
              <li className='third' id='thirdsecond'>ProfileName</li>
              <li className='third' id='thirdthird'><img src={dropdown} alt='error'></img></li>
            </ul>
          </div>
        </div>

        <div className='container1'>
          <div className='section2'>UI/UX &gt; Refer & Earn</div>
        </div>

          <div className='container2-1'>
            <div className='referral'>Referral Earning</div>
               <div className='total_referral'>Total Referral</div>
                <div className='wallet'>Wallet Balance</div>
                
                <div className='referral_earning'>₹2500</div>
                <div className='No_referral'>7</div>
                <div className='wallet_balance'>₹500</div>
                <div className='withdraw'>
              <div className='withdraw1'>Withdraw Balance</div>
              </div>
                </div>
            <div className='referral_code'>Your Referral Code</div>
            <div className='edch4'>
              EDCH54
            </div>
            

          <div className='container3'>
            How does it work?
          </div>


            <div className='icons1'>
              <div className='icon1'>
              <img src={share_people} alt='error'></img>
            </div>
            </div>
            <div className='title1'>Invite Your Friends</div>
            <div className='discription1'>Share the link tutedude.com with your friends</div>

            <div className='icons2'>
              <div className='icon2'>
              <img src={rupees} alt='error'></img>
            </div>
            </div>
            <div className='title2'>You get 200 as referral money</div>
            <div className='discription2'>On total purchase the friends makes, into your wallet</div>

            <div className='icons3'>
              <div className='icon3'>
              <img src={wallet} alt='error'></img>
            </div>
            </div>
            <div className='title3'>Transfer money from wallet</div>
            <div className='discription3'>When the wallet balance reaches 200 or more, you can withdraw it</div>

            <div className='icons4'>
              <div className='icon4'>
              <img src={tag} alt='error'></img>
            </div>
            </div>
            <div className='title4'>Friends purchases any course</div>
            <div className='discription4'>Using your REFERRAL CODE in the payment page</div>

            <div className='icons5'>
              <div className='icon5'>
              <img src={discount} alt='error'></img>
            </div>
            </div>
            <div className='title5'>Your friends get 200 off</div>
            <div className='discription5'>On his overall fee on successful purchase using referral code</div>

        <p className='footer1'>Friends Who Enrolled</p>
        <p className='footer2'>Terms & Conditions</p>
        </div>
    </>
  )
}

export default Desktop2
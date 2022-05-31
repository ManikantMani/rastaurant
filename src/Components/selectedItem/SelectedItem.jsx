import React from 'react';
import "./selectedItem.css"
import img from "../../images/res1.png"
import { NavLink } from 'react-router-dom';

const SelectedItem = () => {
  return (
    <>
      <div className="selected_main">
        <div className="selected_container_main">
          <div className="selected_heading">
            <div className="heading_h3">My Order</div>
            <div className="edit">Edit</div>
          </div>
          <div className="current_time">
            <div className="time_icon"><i class="fa-solid fa-clock"></i></div>
            <div className="time_num">14:30 AM</div>
          </div>
          <div className="selected_container">
            <div className="selected_list">
              <div className="selected_image">
                <img src={img} alt="img" className='selected_img' />
              </div>
              <div className="selected_item_name">
                <p className="p">Bean soup</p>
                <span className="span">350g</span>
              </div>
                <div className="quantity_button">
                  <div className="inc"><button className="inc_btn"><i class="fa-solid fa-minus"></i></button></div>
                  <div className="quantity_num"><p>1</p></div>
                  <div className="dec"><button className="dec_button"><i class="fa-solid fa-plus"></i></button></div>
                </div>
                <div className="selected_price">$4.20 <span><i class="fa-solid fa-xmark"></i></span></div>
            </div>
            <div className="drag_drop"><p>Drag&Drop</p></div>
            <div className="total"><span>Total</span>
            <div className="total_price"><span>$15.49</span></div>
          </div>
          <div className="check_out">
          <button className="checkout_button" onClick={() =>alert('clicked')}>CheckOut</button>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SelectedItem;
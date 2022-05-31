import React from 'react'
import "./item.css"

const ItemCard = (props) => {
  return (
    <>

      <div className="item_card_contaier">
        <div className="item_card">
          <div className="item_rat_fav_box">
            <div className="item_rat_box">
              <p className="item_rat">
                <span className="item_star"><i class="fa-solid fa-star"></i></span>
                <span className="item_star_num">{props.itemRat}</span>
              </p>
            </div>
            <div className="item_fav_button">
              <button className="fav_button"><i class="fa-solid fa-heart"></i></button>
            </div>
          </div>
          <div className="item_image">
            <img src={props.itemImg} alt="" className="item_img" />
          </div>
          <div className="item_name">
            <div className="i_name"><span>{props.itemName}</span></div>
            <div className="itemcal"><span>{props.itemCal}</span></div>
          </div>
          <div className="item_price">
            <span>{props.itemPrice}</span>
          </div>
        </div>
      </div>

    </>
  )
}

export default ItemCard;
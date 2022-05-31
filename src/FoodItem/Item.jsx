import React from 'react';
import "./item.css"
import ItemCard from './ItemCard';
import Idata from './ItemData';

const Item = () => {
  return (
    <>
      <div className="item_container">
      <div className="item_filter"><button><i class="fa-solid fa-arrow-up-wide-short"></i> Filter</button></div>
      <div className="item_all">
      <div className="shortby">
         <span>Short by :</span>  
         <select name="shortby" id="shortby">
          <option value="recomanded">Recomanded</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          <option value="kel">grams</option>
        </select>
      </div>
        {
          Idata.map((val,ind) => {
            return(
              <ItemCard 
                itemId={val.itemId}
                itemRat={val.itemRat}
                itemImg={val.itemImg}
                itemName={val.itemName}
                itemCal={val.itemCal}
                itemPrice={val.itemPrice}
              />
            )
          })
        }
        </div>

        </div>
    </>
  )
}

export default Item;
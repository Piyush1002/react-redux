import React from "react";

function Home(props) {
  // console.log("Home",props.data);
  return (
    <div>
       
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ67YJgkBR20zPyM3f6wulcg18E1ztZvIJ4p6DTaQlmZzDmQTQ4BQnCOtS4KSoOQHa_Vwx4PuSB&usqp=CAc" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button onClick={()=>props.addToCartHandler({price:1000,name:'IPhone 12'})}>Add To Cart</button>
          <button className="remove-cart-btn" onClick={()=>props.removeToCartHandler()}>Remove To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

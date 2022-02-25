import React,{useState,useEffect} from 'react'
import './Home.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {addToCart,removeFromCart} from '../../redux/Shopping/shopping-actions'


const Home = () => {
const [cart,setCart] = useState([]) 
const mycart=useSelector((state) => state.shopReducer.cart);

  useEffect(() => {
       axios.get('http://localhost:3001/data')
       .then(res=>setCart(res.data))
    },[])

    const dispatch=useDispatch();
    const handleAdd = (item) => {
        const cart = [...mycart];
        const data = cart.find((val) => val.id === item.id);
        const cartitem = cart[cart.indexOf(data)];
        if (data) {
            cart[cart.indexOf(data)] = {...cartitem, qty: (cartitem.qty || 0) + 1}
        } else {
            cart.push({...item, qty:1})
        }
        dispatch(addToCart(cart))
    }
    const myState=useSelector((state) => state.shopReducer);
    console.log(myState,"myState")
    const handleremove=(val)=>{
        dispatch(removeFromCart(val.id))
    }

    return (
        <div >
    
            {cart.map((val,index) => {
                return (
                        <div className="cards" key={index}>
                            <div className="card">
                                <img src={val.imgsrc} alt="myPic" className="card_img" />
                                <div className="card_info">
                                <span className="card_category"> {val.name} </span>
                                    <span className="card_category"> {val.price}/- </span>
                                    <div className='btn-info'>
                                        <button className="btn" onClick={()=>handleAdd(val)}>Add </button>
                                        <button className="btn"onClick={()=>handleremove(val)}>Remove item from cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            }
            )
            }

        </div>
    )
}

export default Home

import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useCart from "../../../hooks/useCart";


const FoodCard = ({item}) => {
  // console.log(item);
 
  const {name,image,price,recipe,_id} = item;
  const {user} = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()
  const [,refetch] = useCart()


    const handleAddCart = food => {
      if(user && user.email){
        // send the cart in mongo
        const cartItem = {       
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }
        axios.post(`http://localhost:5001/carts`,cartItem)
        .then(res=>{
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${name}Added to cart succesfully`,
              showConfirmButton: false,
              timer: 1500
            });
            refetch()
          }
        })
  console.log(_id);


      }else{
        Swal.fire({
          title: "You are not logged in!",
          text: "Please Login.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login',{state:{from:location}})
          }
        });
      }



    }

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        
        <figure>
            
          <img
            src={image}
            alt=""
          />
          
        </figure>
        <p className="bg-black text-white absolute right-0 px-4">{price}</p>
        <div className="card-body text-center">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button 
            onClick={()=> handleAddCart(item)}
            className="btn mr-24 mt-4 btn-outline border-0 border-b-2 border-yellow-400">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

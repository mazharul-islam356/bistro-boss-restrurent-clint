import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import { RiDeleteBin2Fill } from "react-icons/ri";

const Cart = () => {

    const [cart] = useCart()
    const totalPrice = cart.reduce((total,item)=>total+item.price,0)



    return (
       <div>

         <div className="flex justify-evenly">
            <h1 className='text-4xl'>Items: {cart.length}</h1>
            <h1 className='text-4xl'>Total Price: {totalPrice}</h1>
            <button className="btn btn-primary">Pay</button>
            
        </div>

            <div className="mt-8 overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {cart.map(item=><tr key={item._id}>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
       
        <td>{item.name}</td>
        <th>
         {item.price}
        </th>
        <td>

        <Link><div className="badge text-2xl badge-error p-4">
        <RiDeleteBin2Fill />
        </div></Link>

        </td>
      </tr>)}
      
    </tbody>
  </table>
</div>


     






       </div>
    );
};

export default Cart;
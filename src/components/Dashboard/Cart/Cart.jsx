import useCart from "../../../hooks/useCart";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import axios from "axios";

const Cart = () => {

    const [cart,refetch] = useCart()
    const totalPrice = cart.reduce((total,item)=>total+item.price,0)

    const handleDelete = (id) =>{


      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:5001/carts/${id}`)
          .then(res=>{
            if(res.data.deletedCount > 0){
              refetch()
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
        }
      });



    }


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
       
        <th>No.</th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {cart.map((item,index)=><tr key={item._id}>
        <th>{index +1 }</th>
        
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

       <button onClick={() => {handleDelete(item._id)}} className="btn btn-ghost btn-lg">
       <FaTrashCan className="text-red-600"></FaTrashCan>
       </button>

        </td>
      </tr>)}
      
    </tbody>
  </table>
</div>


     






       </div>
    );
};

export default Cart;
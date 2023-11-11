
const FoodCard = ({item}) => {

    const {name,image,price,recipe} = item

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
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

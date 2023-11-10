import SectionTitle from "../../../SectionTitle/SectionTitle";
import cardImage from '../../../../assets/assets/home/slide1.jpg'

const ChefCard = () => {
  return (
    <div>
      <SectionTitle
        heading="---Should Try"
        subHeading="Chef recommends"
      ></SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 my-5 mb-10">

       
         
          <div className="card w-96 bg-base-100 shadow-xl">
            
              <img className="h-72 w-full"
                src={cardImage}
                alt=""
              />
           
            <div className="card-body">
              <h2 className="text-center text-2xl font-semibold">Caeser Salad</h2>
              <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-center">
                <button className="btn btn-outline btn-warning">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            
              <img className="h-72 w-full"
                src={cardImage}
                alt=""
              />
           
            <div className="card-body">
              <h2 className="text-center text-2xl font-semibold">Caeser Salad</h2>
              <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-center">
                <button className="btn btn-neutral">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            
              <img className="h-72 w-full"
                src={cardImage}
                alt=""
              />
           
            <div className="card-body">
              <h2 className="text-center text-2xl font-semibold">Caeser Salad</h2>
              <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-center">
                <button className="btn btn-outline btn-warning">Add to cart</button>
              </div>
            </div>
          </div>
        
        
      </div>
    </div>
  );
};

export default ChefCard;

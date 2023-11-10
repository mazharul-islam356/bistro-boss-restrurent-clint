
const MenuItem = ({item}) => {
    const {name,image,recipe,price} = item
    return (
        
            <div>
                <div className="flex space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h1 className="uppercase">{name} --------------</h1>
                <h1>{recipe}</h1>
            </div>
            <p className="text-yellow-600">{price}</p>
        </div>
       
            </div>
        
    );
};

export default MenuItem;
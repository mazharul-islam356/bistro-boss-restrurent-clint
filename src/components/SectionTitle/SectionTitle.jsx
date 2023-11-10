

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="p-10 w-4/12 mx-auto text-center ">
          <p className="text-yellow-600">{heading}</p>  
          <h1 className="text-3xl my-2 uppercase border-y-2">{subHeading}</h1>  
        </div>
    );
};

export default SectionTitle;
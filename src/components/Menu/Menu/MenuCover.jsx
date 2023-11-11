
const MenuCover = ({img,heading,subHeading}) => {
    return (
        <div>
            <div>
            <div
        className="hero h-[450px] my-10"
        style={{
          backgroundImage:
            `url("${img}")`,
        }}
      >
        <div>
          
        </div>
        <div className="hero-content text-center text-neutral-content rounded-md bg-black p-20 px-60 bg-opacity-40">
          <div className="max-w-md">
            <h1 className="mb-5 uppercase text-5xl font-bold">{heading}</h1>
            <p>
              {subHeading}
            </p>
          
          </div>
        </div>
      </div>
        </div>
        </div>
    );
};

export default MenuCover;
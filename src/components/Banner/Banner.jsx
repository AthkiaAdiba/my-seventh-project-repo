
const Banner = () => {
    return (
        <div className='mt-[50px] mb-[100px]'>
            <div className="hero h-[550px] rounded-3xl" style={{ backgroundImage: 'url(https://res.cloudinary.com/dv6fgvj2c/image/upload/v1710520169/dgdivbd1v56sx5v6nx00.jpg)' }}>
                <div className="hero-overlay bg-opacity-15"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-full">
                        <h1 className="mb-5 text-4xl font-bold text-white">Discover an exceptional cooking <br /> class tailored for you!</h1>
                        <p className="mb-5 text-center text-lg text-white"> we pride ourselves on offering a culinary experience that tantalizes the senses and delights the palate. <br />Our menu is a celebration of flavor, crafted with passion and creativity by our team of talented chefs.</p>
                        <div>
                            <button className="btn bg-[#0BE58A] rounded-[50px] border-none mr-5">Explore Now</button>
                            <button className="btn rounded-[50px] btn-outline border-white text-white">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
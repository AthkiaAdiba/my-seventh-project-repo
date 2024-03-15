import banner from '../../assets/image/banner.jpg'
const Banner = () => {
    return (
        <div className='mt-[50px] mb-[100px]'>
            <div className="hero h-[550px] rounded-3xl" style={{ backgroundImage: 'url(https://res.cloudinary.com/dv6fgvj2c/image/upload/v1710520169/dgdivbd1v56sx5v6nx00.jpg)' }}>
                <div className="hero-overlay bg-opacity-15"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import profile from '../../assets/image/icon.png';
import profile2 from '../../assets/image/search.png'

const Nevber = () => {
    return (
        <div>
            <div className='space-y-4 lg:space-y-0 flex flex-col lg:flex-row items-center justify-between'>
                <h1 className="text-3xl font-bold text-[#150B2B]">Recipe Calories</h1>
                <div className="flex items-center gap-6">
                    <p className="text-base text-[#150b2bb3]">Home</p>
                    <p className="text-base text-[#150b2bb3]">Recipes</p>
                    <p className="text-base text-[#150b2bb3]">About</p>
                    <p className="text-base text-[#150b2bb3]">Search</p>
                </div>
                <div className='flex items-center gap-3'>
                    <div>
                        <label className="input input-bordered flex items-center gap-2 rounded-[50px]">
                            <img src={profile2} alt="" />
                            <input type="text" className="" placeholder="Search" />
                        </label>
                    </div>
                    <img src={profile} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Nevber;
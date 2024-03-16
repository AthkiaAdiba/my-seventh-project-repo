import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import './Cart.css';
import PropTypes from 'prop-types';

const Cart = ({ cart, handleAddWantCookList }) => {
    const {recipe_image, recipe_id, recipe_name, short_description, ingredients, preparing_time, calories} = cart;
    // console.log(cart)
    return (
        <div>
            <div className="card bg-base-100 border-2 border-[#28282833]">
                <figure className="px-5 pt-5">
                    <img src={recipe_image} alt="Shoes" className="h-[240px] rounded-xl w-full" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-semibold text-[#282828]">{recipe_name}</h2>
                    <p className="fira-sans text-base text-[#878787]">{short_description}</p>
                    <div className="divider"></div>
                    <h5 className="text-lg font-medium text-[#282828]">Ingredients: {ingredients.length}</h5>
                    <ul className='list-disc ml-5 fira-sans'>
                        {
                            ingredients.map((ingredient, idx) => <li key={idx} className='text-lg text-[#878787]'>{ingredient}</li>)
                        }
                    </ul>
                    <div className='divider'></div>
                    <div className='flex justify-between items-center'>
                        <div className="flex items-center gap-2 text-lg">
                            <CiClock2></CiClock2>
                            <p className='text-[#282828cc] fira-sans'>{preparing_time} minutes</p>
                        </div>
                        <div className='flex items-center gap-2 text-lg'>
                            <AiOutlineFire></AiOutlineFire>
                            <p className='text-[#282828cc] fira-sans'>{calories} calories</p>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <button onClick={() => handleAddWantCookList(cart, recipe_id)} className="btn bg-[#0BE58A] rounded-[50px] border-none mr-5">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object,
    handleAddWantCookList: PropTypes.func
}

export default Cart;
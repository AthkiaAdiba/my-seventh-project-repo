import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Table from "../Table/Table";
import PropTypes from 'prop-types';


const Carts = ({handleAddWantCookList, wantCookLists, handleAddToCurrentCookingList, currentCookLists, totalTime, totalCalories}) => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    return (
        <div>
            <h1 className="mb-6 text-[40px] font-semibold text[#150B2B] text-center">Our Recipes</h1>
            <p className="mb-12 text-base text-[#150b2b99] text-center"> we believe that great food is meant to be shared, cherished, and savored together. Our menu is a testament to this philosophy, <br />offering a diverse array of recipes inspired by global flavors and crafted with passion by our team of skilled chefs.</p>
            <div className="flex flex-col lg:flex-row gap-6 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {
                        carts.map(cart => <Cart key={cart.recipe_id} cart={cart} handleAddWantCookList={handleAddWantCookList}></Cart>)
                    }
                </div>
                <div>
                    <Table 
                    wantCookLists={wantCookLists} 
                    handleAddToCurrentCookingList={handleAddToCurrentCookingList}
                    currentCookLists={currentCookLists}
                    totalTime={totalTime}
                    totalCalories={totalCalories}
                    ></Table>
                </div>
            </div>
        </div>
    );
};

Carts.propTypes = {
    handleAddWantCookList: PropTypes.func,
    wantCookLists: PropTypes.array,
    handleAddToCurrentCookingList: PropTypes.func,
    currentCookLists: PropTypes.array,
    totalTime: PropTypes.number,
    totalCalories: PropTypes.number
}

export default Carts;
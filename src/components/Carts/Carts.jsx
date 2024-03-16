import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Table from "../Table/Table";


const Carts = () => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    return (
        <div>
            <h1 className="mb-6 text-[40px] font-semibold text[#150B2B] text-center">Our Recipes</h1>
            <p className="mb-12 text-base text-[#150b2b99] text-center">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>
            <div className="flex gap-6">
                <div className="grid grid-cols-2 gap-4">
                    {
                        carts.map(cart => <Cart cart={cart}></Cart>)
                    }
                </div>
                <div>
                    <Table></Table>
                </div>
            </div>
        </div>
    );
};

export default Carts;
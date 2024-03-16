

const Table = () => {
    return (
        <div className="w-[500px] border-2 border-[#28282833] rounded-xl">
            <div>
                <div className="overflow-x-auto">
                    <h2 className='mt-8 text-center text-2xl font-semibold text-[#282828]'>Want to cook: 01</h2>
                    <div className='divider'></div>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th className='font-medium text-base text-[#878787]'>Name</th>
                                <th className='font-medium text-base text-[#878787]'>Time</th>
                                <th className='font-medium text-base text-[#878787]'>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="bg-base-200">
                                <th className='font-semibold text-base text-[#282828c9]'>1</th>
                                <td className='text-[#282828b3] text-base'>Cy Ganderton</td>
                                <td className='text-[#282828b3] text-base'>Quality Control Specialist</td>
                                <td className='text-[#282828b3] text-base'>Blue</td>
                                <button className="btn bg-[#0BE58A] rounded-[50px] border-none my-4">Preparing</button>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h2 className='mt-8 text-center text-2xl font-semibold text-[#282828]'>Currently cooking: 02</h2>
                <div className='divider'></div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th className='font-medium text-base text-[#878787]'>Name</th>
                                <th className='font-medium text-base text-[#878787]'>Time</th>
                                <th className='font-medium text-base text-[#878787]'>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="bg-base-200">
                                <th className='font-semibold text-base text-[#282828c9]'>1</th>
                                <td className='text-[#282828b3] text-base'>Cy Ganderton</td>
                                <td className='text-[#282828b3] text-base'>Quality Control Specialist</td>
                                <td className='text-[#282828b3] text-base'>Blue</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;
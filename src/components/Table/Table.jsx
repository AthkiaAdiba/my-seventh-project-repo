import './Table.css';
import PropTypes from 'prop-types';

const Table = ({ wantCookLists, handleAddToCurrentCookingList, currentCookLists }) => {
    // console.log(wantCookLists)

    return (
        <div className="w-[500px] border-2 border-[#28282833] rounded-xl">
            <div>
                <div className="overflow-x-auto">
                    <h2 className='mt-8 text-center text-2xl font-semibold text-[#282828]'>Want to cook: {wantCookLists.length}</h2>
                    <div className='divider mx-20'></div>
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

                            {
                                wantCookLists.map((wantCookList, idx) => <tr key={idx} className="bg-base-200">
                                    <th className='fira-sans font-semibold text-base text-[#282828c9]'>{idx + 1}</th>
                                    <td className='fira-sans text-[#282828b3] text-base'>{wantCookList.recipe_name}</td>
                                    <td className='fira-sans text-[#282828b3] text-base'>{wantCookList.preparing_time}</td>
                                    <td className='fira-sans text-[#282828b3] text-base'>{wantCookList.calories}</td>
                                    <div>
                                        <button onClick={() => handleAddToCurrentCookingList(wantCookList.recipe_id)} className="btn bg-[#0BE58A] rounded-[50px] border-none my-4">Preparing</button>
                                    </div>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <h2 className='mt-8 text-center text-2xl font-semibold text-[#282828]'>Currently cooking: {currentCookLists.length}</h2>
                <div className='divider mx-20'></div>
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
                            {
                                currentCookLists.map((currentCookList, idx) => <tr key={idx} className="bg-base-200">
                                    <th className='fira-sans font-semibold text-base text-[#282828c9]'>{idx + 1}</th>
                                    <td className='fira-sans text-[#282828b3] text-base'>{currentCookList.recipe_name}</td>
                                    <td className='fira-sans text-[#282828b3] text-base'>{currentCookList.preparing_time}</td>
                                    <td className='fira-sans text-[#282828b3] text-base'>{currentCookList.calories}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <div className='mb-5 flex justify-end gap-8 mr-10 mt-4 text-[#878787] text-base'>
                    <div>
                        <p>Total Time = <br />45 minutes</p>
                    </div>
                    <div>
                        <p>Total Calories = <br />1050 calories</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Table.propTypes = {
    wantCookLists: PropTypes.func,
    handleAddToCurrentCookingList: PropTypes.func,
    currentCookLists: PropTypes.array
}

export default Table;
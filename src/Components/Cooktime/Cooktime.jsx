import React from "react";

const Cooktime = ({ addToCooks }) => {
  return (
    <div>
      <div className="overflow-x-auto border p-10 rounded-2xl">
        <h1 className="text-center text-2xl text-white text-bold mb-2">
          Want to cook: {addToCooks.length}
        </h1>
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {addToCooks.map((addToCook, index) => (
              <tr key={addToCook.id}>
                <th>{index + 1}</th>
                <td>{addToCook.title}</td>
                <td>{addToCook.cook_time}</td>
                <td>{addToCook.calories}</td>
                <td>
                  <button className="btn btn-primary mt-3 pl-2">
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cooktime;

import React, { useEffect, useState } from "react";

const Cooktime = ({ addToCooks, prepareBtn, prepares, showError }) => {
  const totalMinutes = prepares.reduce(
    (acc, prepare) => acc + prepare.cook_time,
    0
  );
  const totalCalories = prepares.reduce(
    (acc, prepare) => acc + prepare.calories,
    0
  );
  return (
    <div className="border p-10 rounded-2xl">
      <div className="overflow-x-auto ">
        <h1 className="text-center text-2xl text-white text-bold mb-2">
          Want to cook: {addToCooks.length}
        </h1>
        <div>
          <h1 className="text-error p-3 rounded-xl text-center">{showError}</h1>
        </div>
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
                <td>{addToCook.cook_time} minutes</td>
                <td>{addToCook.calories} calories</td>
                <td>
                  <button
                    className="btn btn-primary mt-3"
                    onClick={() => prepareBtn(addToCook, addToCook.id)}
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto mt-5">
        <h1 className="text-center text-2xl text-white text-bold mb-2">
          Currently Cooking: {prepares.length}
        </h1>

        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {prepares.map((prepare, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{prepare.title}</td>
                <td>{prepare.cook_time} minutes</td>
                <td>{prepare.calories} calories</td>
              </tr>
            ))}
          </tbody>
          <tbody>
            <tr>
              <th></th>
              <td></td>
              <td>Total Time = {totalMinutes} minutes</td>
              <td>Total Calories = {totalCalories} calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cooktime;

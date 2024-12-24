import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Cooktime from "./Components/Cooktime/Cooktime";
import Header from "./Components/Header/Header";
import Recipes from "./Components/Recipes/Recipes";

function App() {
  const [addToCooks, setAddToCook] = useState([]);

  const addToCookBtn = (recipe) => {
    const newAddToCook = [...addToCooks, recipe];

    setAddToCook(newAddToCook);
  };

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className="mt-10">
        <div className="text-center">
          <h1 className="text-2xl lg:text-4xl text-primary font-bold">
            Our Recipes
          </h1>
          <p className="w-full md:w-7/12 mx-auto mt-5 mb-5">
            Welcome to our Recipes Collection, where every dish tells a story!
            From hearty meals to light snacks, we offer a wide variety of
            carefully crafted recipes to suit every taste and occasion. Whether
            you're a seasoned chef or a beginner in the kitchen, you'll find
            easy-to-follow instructions, detailed ingredient lists, and helpful
            tips to make every cooking experience enjoyable. Discover nutritious
            meals, quick bites, and indulgent treats, all with clear calorie
            information and cooking times. Get inspired and start your culinary
            journey with us today! 🍲✨
          </p>
        </div>

        <div className="flex-row md:flex lg:justify-between gap-10">
          <div>
            <Recipes addToCookBtn={addToCookBtn}></Recipes>
          </div>
          <div className="sticky top-5 self-start">
            <Cooktime addToCooks={addToCooks}></Cooktime>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import "../styles/Shop.css"
import ItemCard from "./ItemCard";

import imgFishingPole from "../images/fishing_pole.png";
import imgFishSonnar from "../images/fish_sonnar.png";
import imgFishingPantsV1 from "../images/fishing_pants.png";
import imgFishingPantsV2 from "../images/fishing_pants_2.png";
import imgFishingReelAirplane from "../images/fishing_reel_airplane_model.png";
import imgFishingReelMicrophone from "../images/fishing_reel_microphone_model.png";
import imgFishingHooks from "../images/hooks.png";
import imgRandomBait from "../images/set_random_bait.png";
import imgFishSonnarBetter from "../images/fish_sonnar_better.png";
import imgTackleBox from "../images/empty_tackle_box.png";


const Shop = ({orderItems,setOrderItems}) => {


  const [items, setItems] = useState([
    {
      name: "Fishing Pole",
      description:
        "Adequate fishing pole for fishing (fishing string not included).",
      image: imgFishingPole,
      price: "45.29",
    },
    {
      name: "Semi-working fish sonnar",
      description:
        "This sonnar was once a great product that succesfully identified banks of fish in a 3 km radius. Nowdays it wouldn't be able to find the Lochness monster in a garden pond.",
      image: imgFishSonnar,
      price: "9.99",
    },
    {
      name: "Better Fish Sonnar",
      description: "It turns on.",
      image: imgFishSonnarBetter,
      price: "8.15",
    },
    {
      name: "Fishing Pants Water Repellent",
      description:
        "This pair of pants was created following a well-established process of impermeameapvhbility.",
      image: imgFishingPantsV1,
      price: "12.85",
    },
    {
      name: "Another Pair of Fishing Pants",
      description:
        "This pair of pants complements perfectly the Fishing Pants Water Repellent product.",
      image: imgFishingPantsV2,
      price: "36.39",
    },
    {
      name: "Fishing Reel Airplane",
      description:
        "This fishing reel, while not cheap, has been designed with all the aerodynamic considerations in mind.",
      image: imgFishingReelAirplane,
      price: "79.19",
    },
    {
      name: "Fishing Reel Microphone",
      description:
        "This fishing reel is equiped with state-of-the-art microphone technology to ease your fishing efforts.",
      image: imgFishingReelMicrophone,
      price: "45.29",
    },
    {
      name: "Vegan Friendly Fishing Hook x1",
      description: "Perfectly for vegan fishing enthusiasts.",
      image: imgFishingHooks,
      price: "1.99",
    },
    {
      name: "Set of random bait for fish",
      description:
        "This set provides between 1-15 random baits for you to use.",
      image: imgRandomBait,
      price: "5.29",
    },
    {
      name: "Fishing Tackle Box",
      description: "Lunch box repurposed for your hobby.",
      image: imgTackleBox,
      price: "55.00",
    },
  ]
  );

  return (
    <div className="shop-items">
      {items.map((item, index) => (
        <ItemCard
          key={item.name}
          name={item.name}
          description={item.description}
          image={item.image}
          price={item.price}
          orderItems={orderItems}
          setOrderItems={setOrderItems} 
        />
      ))}
    </div>
  );
}

export default Shop;

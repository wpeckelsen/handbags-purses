import React from "react";
import "./App.css";

import Button from "./Button";
import ButtonDisabled from "./ButtonDisabled";
import Article from "./Product";
import Tile from "./Tile";

import BagOne from "./assets/bag_1.png";
import BagTwo from "./assets/bag_2.png";
import BagThree from "./assets/bag_3.png";
import BagFour from "./assets/bag_4.png";

import BrandPic from "./assets/brand.png";
import StoryPic from "./assets/our_story.png";

function App() {
  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button description="To the collection" />

        <Button description="Shop all bags" />

        <ButtonDisabled description="Pre-order" />
      </nav>

      <main>
        <Article
          redspan="Best seller"
          image={BagOne}
          name="Handy"
          price="400"
        />

        <Article
          redspan="Best seller"
          image={BagTwo}
          name="Stylish"
          price="250"
        />

        <Article
          redspan="New Collection"
          image={BagThree}
          name="Simple"
          price="300"
        />

        <Article
          redspan="New Collection"
          image={BagFour}
          name="Trendy"
          price="150"
        />
      </main>

      <footer>
        <section>
          <Tile
            title="The Brand"
            story="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet consequatur debitis dolorum, eveniet explicabo, facere fuga fugit illum magnam non quo ratione, reprehenderit similique sint suscipit ullam voluptatem voluptatibus."
          />
        </section>

        <section>
          <Tile image={BrandPic} />
        </section>

        <section>
          <Tile image={StoryPic} />
        </section>

        <section>
          <Tile
            title="Our Story"
            story="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet consequatur debitis dolorum, eveniet explicabo, facere fuga fugit illum magnam non quo ratione, reprehenderit similique sint suscipit ullam voluptatem voluptatibus."
          />
        </section>
      </footer>
    </>
  );
}

export default App;

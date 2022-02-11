import React from "react";

const Home = () => (
  <div>
    <h1>Portfolio</h1>
    <p>
      Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis molestie urna.
      Aliquam semper ultrices varius. Aliquam faucibus sit amet magna a ultrices. Aenean
      pellentesque placerat lacus imperdiet efficitur. In felis nisl, luctus non ante euismod,
      tincidunt bibendum mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
      posuere, eget tristique dui dapibus. Maecenas fermentum elementum faucibus. Quisque nec metus
      vestibulum, egestas massa eu, sollicitudin ipsum. Nulla facilisi. Sed ut erat ligula. Nam
      tincidunt nunc in nibh dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
      conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at rhoncus. Etiam vel
      condimentum magna, quis tempor nulla.
    </p>
    <h2>
      My Work:
    </h2>
    {/* {require("./Images/Profile_picture.jpeg")} */}
    <div className="container">
      <a href="https://wolfgarb.github.io/dnd-character-creator/">DnD Generator<img src={require("../../assets/dndGen.jpg")} alt="" /></a>
      <a href="https://wanderosa.herokuapp.com/">Wanderosa<img src={require("../../assets/wanderosa.png")} alt="" /></a>
      <a href="https://band-gogh.herokuapp.com/"> Band-Gogh<img src={require("../../assets/band-gogh.png")} alt="" /></a>
      <a href="https://zbreezie.github.io/run-buddy/">Run Buddy<img src={require("../../assets/runbud.png")} alt="" /></a>
      <a href="https://zbreezie.github.io/Horiseon/">Horiseon<img src={require("../../assets/hori.png")} alt="" /></a>
      <img src={require("../../assets/placeholder.png")} alt="" />
    </div>
  </div>


);

export default Home;
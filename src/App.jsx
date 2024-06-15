import { useState } from "react"
import Search from "./components/Search"
import FoodList from "./components/FoodList"
import Nav from "./components/Nav"
import './App.css'
import Container from "./components/Container"
import InnerContainer from "./components/InnerContainer"
import RecipeDetails from "./components/RecipeDetails"



function App() {
  const [foodData, setFoodData] = useState([])
  const [foodId, setFoodId] = useState("655698")
  return (
    <div className="App">
      <Nav/>
      <Search foodData = {foodData} setFoodData = {setFoodData}/>
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData = {foodData}/>
        </InnerContainer>
        <InnerContainer>
          <RecipeDetails foodId={foodId}/>
        </InnerContainer>
      </Container>
    </div>
  )
}

export default App

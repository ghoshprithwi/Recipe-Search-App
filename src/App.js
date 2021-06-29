import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Recipes from './components/Recipes'

const API_KEY = process.env.REACT_APP_API_KEY;


class App extends Component {
    state = {
        recipes: []
    }

    getRecipe = async (e) => {
        const recipeName = e.target.elements.recipeName.value;
        const cuisineName = e.target.elements.cuisineName.value;
        e.preventDefault();

        const api_call = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${recipeName}&cuisine=${cuisineName}&number=12&apiKey=${API_KEY}`);

        const recipeResults = await api_call.json()
        this.setState({ recipes: recipeResults.results });
    }
    // componentDidMount = () => {
    //     const json = localStorage.getItem("recipes");
    //     const recipes = JSON.parse(json);
    //     this.setState({ recipes });
    // }
    // componentDidUpdate = () => {
    //     const recipes = JSON.stringify(this.state.recipes);
    //     localStorage.setItem("recipes", recipes);
    // }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Find a Recipe</h1>
                    <Form getRecipe={this.getRecipe} />
                </header>
                <Recipes recipes={this.state.recipes} />
            </div>
        );
    }
}

export default App;

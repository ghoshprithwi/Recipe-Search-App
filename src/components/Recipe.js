import React from 'react';
import { Link } from 'react-router-dom';


class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = async () => {
        const recipeId = this.props.location.state.recipe;

        const infoReq = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?includeInformation=false&apiKey=${process.env.REACT_APP_API_KEY}`);

        const infoRes = await infoReq.json()
        this.setState({ activeRecipe: infoRes });
        console.log(this.state.activeRecipe);
    }
    render() {
        const recipe = this.state.activeRecipe;
        return (
            <div className="container">
                { recipe.length !== 0 &&
                    <div className="active-recipe">
                        <img
                            className="active-recipe__img"
                            src={recipe.image}
                            alt={recipe.title} />
                        <h3 className="active-recipe__title">
                            {recipe.title}
                        </h3>
                        <h4 className="active-recipe__publisher">
                            Publisher: <span>{recipe.sourceName}</span>
                        </h4>
                        <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
                        <p>
                            Visit <a href={recipe.sourceUrl}>{recipe.sourceUrl}</a> for detailed recipe.
                        </p>
                        <button className="active-recipe__button">
                            <Link to="/">Go Home</Link>
                        </button>
                    </div>
                }
            </div>
        )
    }
}

export default Recipe;
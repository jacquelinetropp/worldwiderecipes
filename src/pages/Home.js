import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getRecipes} from '../store/recipes/recipeActions';
import LinkButton from '../components/Button/LinkButton';

const Home = ({getRecipes, recipes}) => {
    // useEffect(() => {
    //     getRecipes();
    // }, [])
    // console.log(recipes);
    return (
        <div>
            <LinkButton to="/addrecipe">Add Recipe</LinkButton>
        </div>
    )
}
const mapStateToProps = ({recipe}) => ({
    recipes: recipe.recipes
})

const mapDispatchToProps = {
    getRecipes: getRecipes
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);

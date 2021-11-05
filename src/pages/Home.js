import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getRecipes} from '../store/recipes/recipeActions';

const Home = ({getRecipes, recipes}) => {
    useEffect(() => {
        getRecipes();
    }, [])
    console.log(recipes);
    return (
        <div>
            hello
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

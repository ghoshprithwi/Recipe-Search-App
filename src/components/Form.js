import React from 'react';

const Form = props => (
    <form onSubmit={props.getRecipe} style={{ marginBottom: "2rem", marginTop: "3rem" }}>
        <input
            className="form__input"
            type="text"
            name="recipeName"
            placeholder="Search for a recipe"
        />
        <select className="form__select"
            name="cuisineName" >
            <option selected>Select a Cuisine</option>
            <option value="african">African</option>
            <option value="american">American</option>
            <option value="british">British</option>
            <option value="cajun">Cajun</option>
            <option value="caribbean">Caribbean</option>
            <option value="chinese">Chinese</option>
            <option value="french">French</option>
            <option value="indian">Indian</option>
            <option value="italian">Italian</option>
            <option value="japanese">Japanese</option>
            <option value="mexican">Mexican</option>
            <option value="mediterranean">Mediterranean</option>
            <option value="spanish">Spanish</option>
            <option value="thai">Thai</option>
            <option value="vietnamese">Vietnamese</option>
        </select>
        <button className="form__button">Search</button>
    </form>
)

export default Form;
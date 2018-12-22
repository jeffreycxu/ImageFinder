import React from 'react';
import {Field,reduxForm} from 'redux-form' //redux form is basically like the connect function

import {fetchImages} from '../../actions';
import {connect} from 'react-redux'
import './searchBar.css';


//action creater and mappropstostate
class SearchBar extends React.Component{
    renderInput(formProps){

        return (
            <div className = "field">
                <label>{formProps.label} </label>
                <input onChange = {formProps.input.onChange} value = {formProps.input.value}/>
            </div>
        );
    }
    onSubmit = formValues => {
        this.props.fetchImages(formValues.item);
    }
    render(){
        //utilize a lot of Semantic UI 
        return ( //handle submit is given by redux form
            <form onSubmit = {this.props.handleSubmit(this.onSubmit)} className = "ui form searchBar">
                <Field className = "field" name = "item" component = {this.renderInput} label = "Search Item"/>
                <button className = "ui button primary button"> Submit</button>
            </form>

        );
    }
}

const formWrapped = reduxForm({ //similar to the connect function
    form:'searchItem'
})(SearchBar);

export default connect(null, {fetchImages})(formWrapped);
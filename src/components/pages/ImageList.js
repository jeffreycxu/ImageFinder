import React from 'react';

//have to do {} bc importing a specific function
import {connect} from 'react-redux';
import {fetchImages} from '../../actions';
import './ImageList.css';
import { Message } from 'semantic-ui-react'


import ImageCard from './ImageCard'

class ImageList extends React.Component{
    constructor(props){
        super(props);
        this.state = {message: ""};
        this.message = ""
    }
    renderList(){
        //use this to keep render clean
        //the variable images is set in mapStatesToProps
        if (this.props.images.length !== 0){
            const images = this.props.images.map((image) => { //create imagecards for all the different images!
                return (
                    <ImageCard key = {image.id}  image = {image} favorite = {false} favorites = {this.props.favorites} callback = {this.showMessage}/>
                );
            });
            return <div className = "image-list"> {images} </div>
        }
        else{
            return this.renderEmpty();
        }
    }
    renderEmpty(){
        return ( 
            <div className = "ui message"> Enter in a keyword to search! If it is still empty, please your keyword may not
            have any images from the UnSplash API yet. </div>
        );
    }
    showMessage = (text) =>{ 
        if (text === "Success"){
            this.message = <div className="ui positive message"><div className="header">Image Successfully Added To Your Favorites</div><p>Go to your <b>favorites</b> page to see now.</p></div>;
        }
        else{
            this.message = <div className="ui warning message"><div className="header">Error!</div><p>This image is already in your favorites.</p></div>;
        }
        this.setState({message: this.message});         
    
    }
    render(){
        return (
            <div>
                {this.state.message}
                {this.renderList()}
            </div>
        );
    }
};

//ALWAYS need mapStateToProps! 
const mapStateToProps = state => {
    return {images:state.images,
    favorites: state.favorites}; //keep updating the value of posts
}

//connect the action creator to postlist
export default connect(mapStateToProps, {fetchImages})(ImageList); 

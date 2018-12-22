import React from 'react';
import {connect} from 'react-redux';
import ImageCard from './ImageCard'


class Favorites extends React.Component {
    constructor(props){
        super(props);
        this.state = {message: ""};
        this.message = ""
    }

    renderFavorites(){

        const images = this.props.favorites.map((image) => { //create imagecards for all the different images!
            return (
                 <ImageCard key = {image.id}  image = {image} favorite = {true} favoriteCallback = {this.showMessage}/>
            );
        });
        return <div className = "image-list"> {images} </div>
    }
    renderEmpty(){
        return <div className = "ui message"> You have no favorites right now! Click on images to favorite them!</div>
    }
    showMessage =() =>{ 
        console.log("SAFSFD");
        this.message = <div className="ui positive message"><div className="header">Image Successfully Deleted!</div></div>;
        this.setState({message: this.message});         
    
    }
    render(){     
        if (this.props.favorites.length === 0)
            return <div>{this.renderEmpty()}</div>
        else{
            return (
            <div>
                {this.state.message}
                {this.renderFavorites()}
            </div>
            );
        }
    }
}

//ALWAYS need mapStateToProps! 
const mapStateToProps = state => {
    return {favorites:state.favorites}; //keep updating the value of posts
}

//connect the action creator to postlist
export default connect(mapStateToProps)(Favorites); 


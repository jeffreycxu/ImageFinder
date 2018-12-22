import React from 'react';
import {addFavorite, removeFavorite} from '../../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';



class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };
  addImage(image){
    console.log(this.props.favorites);
    if(this.props.favorites.includes(image) === false){ //if it's undefined or the favorite list doesn't include it
      this.props.addFavorite(image);
      this.props.callback("Success"); 
    }
    else{
      this.props.callback("Error"); 
    }
  }
  removeImage(image){
    this.props.removeFavorite(this.props.image);
    this.props.favoriteCallback();
  }
  render() {
    const { description, urls } = this.props.image;
    if (this.props.favorite === false){ //if the photo is in the search side (NOT the favorite side)
      return (
        <div onClick = {() => this.addImage(this.props.image)} style={{ gridRowEnd: `span ${this.state.spans}` }}>
          <img ref={this.imageRef} alt={description} src={urls.regular} />
        </div>
      );
    }
    else{ //if you're on the favorite page 
      return (
        <div onClick = {() => this.removeImage(this.props.image)} style={{ gridRowEnd: `span ${this.state.spans}` }}>
          <img ref={this.imageRef} alt={description} src={urls.regular} />
        </div>
      );
    }
  }
}

const matchDispatchToProps = dispatch =>{ //make it so you can call the action creators inside the component
  return bindActionCreators({addFavorite}, dispatch)
}

export default connect(matchDispatchToProps, {addFavorite, removeFavorite})(ImageCard); ;
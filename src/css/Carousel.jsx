import React, { Component } from "react";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
  }

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleImageClick = (e) => {
    this.setState({ active: +e.target.dataset.index });
  };

  render() {
    return (
      <div className="flex flex-row justify-around h-72 mx-52">
        <img src={this.props.images[this.state.active]} alt="animal" />
        <div className="w-36 h-36 m-auto flex flex-row justify-around">
          {this.props.images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={
                index === this.state.active
                  ? "active rounded-full"
                  : "rounded-full"
              }
              alt="animal thumbnail"
              onClick={(e) => this.handleImageClick(e)}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;

import React, { Component } from "react";
import "./resources/allAction.css"
class AllAction extends Component {
  state = {
    like: 0,
    love: 0,
    haha: 0,
    care: 0,
    angry: 0,
    sad: 0
  };

  likeUpdate(){
    const likeCount = this.state.like + 1
    this.setState({
      like: likeCount
    })
    console.log("Like: ",likeCount);

  }
  loveUpdate(){
    const loveCount = this.state.love + 1
    this.setState({
      love: loveCount
    })
    console.log("Love: ", loveCount);

  
  }

  hahaUpdate(){
    const hahaCount = this.state.haha + 1
    this.setState({
      haha: hahaCount
    })
    console.log("Love: ", hahaCount);
  }

  careUpdate(){
    const careCount = this.state.care + 1
    this.setState({
      care: careCount
    })
    console.log("Love: ", careCount);
  }

  angryUpdate(){
    const angryCount = this.state.angry + 1
    this.setState({
      angry: angryCount
    })
    console.log("Love: ", angryCount);
  }

  sadUpdate(){
    const sadCount = this.state.sad + 1
    this.setState({
      sad: sadCount
    })
    console.log("Love: ", sadCount);
  
  }


  render() {
    return (
      <li>
        {this.state.like} <strong>Like </strong>{this.state.love} <strong>Love</strong>  {this.state.haha} <strong>Haha</strong>  {this.state.care} <strong>Care</strong>   {this.state.angry} <strong>Angry</strong>   {this.state.sad}  <strong>Sad</strong>
        <div className="social_action d-flex Action">
                <div className="icon-image-wrapper">
                        <img src="like(1).png" alt="" onClick = {()=> this.likeUpdate()}/>
                </div>

                <div className="icon-image-wrapper">
                        <img src="love(1).png" alt="" onClick = {()=> this.loveUpdate()}/>
                </div>

                <div className="icon-image-wrapper">
                        <img src="haha(1).png" alt="" onClick = {()=> this.hahaUpdate()} />
                </div>

                <div className="icon-image-wrapper">
                        <img src="care(1).png" alt="" onClick = {()=> this.careUpdate()}/>
                </div>

                <div className="icon-image-wrapper">
                        <img src="angry(1).png" alt="" onClick = {()=> this.angryUpdate()}/>
                </div>

                <div className="icon-image-wrapper">
                        <img src="sad(1).png" alt="" onClick = {()=> this.sadUpdate()}/>
                </div>
        </div>
      </li>
    );
  }
}

export default AllAction;

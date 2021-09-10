import React, { Component} from "react";
import { BsFillReplyFill, BsChatFill } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import './resources/action.css'
import CommentSection from "./Comment.component";
import AllAction from "./AllAction";


class Action extends Component {

  state = {
    count: 0,
    Like_text: 'Like',
    show_comment: false,
    show_action: false  

  };

  addComment(){
    this.setState(prevState => ({show_comment : !prevState.show_comment}))
  }
  showAction(){
    this.setState({ Like_text : 'Liked'})
    this.setState(prevState => ({show_action : !prevState.show_action}))
  }

  
  //{this.state.count <= 1 ? this.state.count +" Like" : this.state.count +" Likes" }//

  render() {
    return (
      <ul style={{ listStyleType: "none" }}>
      <li>
      {this.state.show_action && <AllAction/>} 
      
      <div className = "social d-flex justify-content-between">

          <div className = "Action">
            <p onClick={() => this.showAction()}> <AiFillLike/> { this.state.Like_text }</p>
          </div>

          <div className = "Action">
            <p onClick = {() => this.addComment()}> <BsChatFill /> Comment{" "}</p>
          </div>

          <div className = "Action">
            <BsFillReplyFill />
            Share
          </div>
          
      </div>
      </li>
      <li>
        {this.state.show_comment && <CommentSection/>}
      </li>
      </ul>

    );
  }
}

export default Action;

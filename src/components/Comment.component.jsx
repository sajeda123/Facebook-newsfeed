import React from 'react'
import './resources/comment.css'
import AllComments from './containers/AllComments';
class CommentSection extends React.Component {

    constructor(props){
       super(props);
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: ''
            }
    }
    this.handleComment = this.handleComment.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    
  }
  
    handleComment (e){
        this.setState ({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
        })
    }
    addComment (e){
        e.preventDefault();
        const newText = this.state.currentItem;
        console.log(newText);
        if(newText !== ""){
            const items = [...this.state.items, newText]
            this.setState({
                items: items,
                currentItem: {
                  text: '',
                  key: ''
                }
            })
        }
    }

    deleteComment (key){
        const filteredItems = this.state.items.filter( item => item.key !== key);
               this.setState({
                   items: filteredItems
               })
        }

    render() { 
        return <div>
         <AllComments items = {this.state.items} deleteComment = {this.deleteComment}/>
          <header>
             <form className = "CommentForm" onSubmit = {this.addComment}>
                <input type= "text" placeholder = "Enter Comment"
                value= {this.state.currentItem.text} 
                onChange= {this.handleComment}/>
                <button type= "submit"> Submit </button>
             </form>
          </header>
        </div>;
    }
}
 
export default CommentSection;
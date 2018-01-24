import React from 'react';
import  { connect } from 'react-redux';
import { fetchPosts } from '../actions'
class PostsIndex extends React.Component {
  
  //constructor(props) {
    // super(props);
    // state = {};
  // }

  render() {

    return(
    	<div>
    	Posts Index
    	</div>
    	)
  }
}

export default connect(null, { fetchPosts })( PostsIndex);


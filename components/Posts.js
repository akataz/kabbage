import createPosts from '../lib/utils'

const Posts = (props) => {
  console.log(props.postList.posts);
  return (
    <ul>{ createPosts(props.postList.posts) }</ul>
  )
}

export default Posts;

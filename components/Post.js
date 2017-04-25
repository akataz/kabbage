//import { Image } from 'react';

const Post = (props) => {
  const {
    tags,
    title,
    date,
    readMore,
    pic,
    body
  } = props.postData;
  return (
    <div>
      <div>{title}</div>
      <div>{tags}</div>
      <div>{date}</div>
      <img uri={pic}/>
      <div>{body}</div>
    </div>
  )
}

export default Post;

import Post from '../components/Post'

const createPosts = (arr) => {
  let list = arr.map((post) =>{
    return <Post postData={post}/>
  })
  return list;
}

export default createPosts;

import classes from './MyPosts.module.css'
import Post from './Post/Posts'

const MyPosts = () => {
  return (
    <div MyPost={classes.content}>
      <div>
        My posts
        <div>
         <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add post</button>
        <button>Remove</button>
        </div>
        <div className='posts'>
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  )
}

export default MyPosts


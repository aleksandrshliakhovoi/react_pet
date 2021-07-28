import classes from './MyPosts.module.css'
import Post from './Post/Posts'

const MyPosts = () => {
  return (
    <div className={classes.postBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <div>
         <textarea name="" id="" cols="30" rows="10"></textarea>
         </div>
         <div>
        <button>Add post</button>
        </div>
        <button>Remove</button>
        </div>
        <div className={classes.posts}>
          <Post message="Hi! how are you"/>
          <Post message="it`s my life"/>
          <Post message="Stop holodilnik strop morozilnik"/>
        </div>
      </div>
    </div>
  )
}

export default MyPosts


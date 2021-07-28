import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://cs4.pikabu.ru/post_img/2016/06/21/6/1466500173199718651.jpg" alt=""/>
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post


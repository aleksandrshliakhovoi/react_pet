import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://static.wikia.nocookie.net/warhammer40k/images/c/c1/Adeptus_Astartes_Icon.jpg/revision/latest?cb=20190811134053&path-prefix=ru" alt=""/>
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post


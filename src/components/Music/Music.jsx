import classes from './Music.module.css'

const Music = (props) => {
  return (
    <div className={classes.music}>
      <ul>
        <li>
          First song
        </li>
        <li>
          Second song
        </li>
      </ul>
    </div>
  )
}

export default Music
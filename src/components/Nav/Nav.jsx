import classes from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
       <a href="/profile">Profile</a> 
      </div>
      <div className={classes.item}>
      <a href="/dialogs">Messages</a> 
      </div>
      <div className={classes.item}>
      <a href="/news">News</a> 
      </div>
      <div className={classes.item}>
      <a href="">Music</a> 
      </div>
      <div className={classes.item}>
      <a href="">Settings</a> 
      </div>
    </nav>
  )
}

export default Nav
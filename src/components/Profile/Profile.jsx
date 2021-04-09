import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
      <img src="https://creativepro.com/wp-content/uploads/2019/05/imagetext01.jpg" className="header-img"/>
      </div>
      <div>
        ava + desc
        {/* <img src="https://www.mirserpen.ru/media/2014/11/210-450x297.jpg" alt=""/> */}
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile

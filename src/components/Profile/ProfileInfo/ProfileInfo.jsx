import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.profileImg}>
      <img src="https://creativepro.com/wp-content/uploads/2019/05/imagetext01.jpg" className="header-img"/>
      </div>
      <div className={classes.descriptionBlock}>
        ava + desc
      </div>
    </div>
  )
}

export default ProfileInfo

import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
      <img src="https://creativepro.com/wp-content/uploads/2019/05/imagetext01.jpg" className="header-img"/>
      </div>
      <div>
        ava + desc
        <img src="https://www.mirserpen.ru/media/2014/11/210-450x297.jpg" alt=""/>
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <div className='posts'>
          <div className={classes.item}>
            post 1
          </div>
          <div className={classes.item}>
            post 2
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Profile


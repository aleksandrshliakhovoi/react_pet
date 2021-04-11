import classes from './News.module.css'

const News = (props) => {
  return(
    <div className={classes.news}>
      <ul>
        <li>
          Title news
        </li>
        <li>
          <img src="https://besthqwallpapers.com/Uploads/23-3-2019/84440/thumb2-primarch-tlatia-artwork-warhammer-40000-wh40k-warhammer-40k.jpg" alt="" srcset=""/>
        </li>
        <li>
          Description of news
        </li>
      </ul>
    </div>
  )
}

export default News
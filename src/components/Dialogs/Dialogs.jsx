import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id

  return (
    <div className={classes.dialog + ' '+ classes.active}>
    <NavLink to={path}>{props.name}</NavLink> 
  </div>
  )
}


const Message = (props) => {
  return (
    <div className={classes.message}>{props.message}</div>
  )
}
const Dialogs = (props) => {
  return(
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
       <DialogItem name='Jerry' id='1'/>
       <DialogItem name='Terra' id='2'/>
       <DialogItem name='Candy' id='3'/>
       <DialogItem name='Summer' id='4'/>
       <DialogItem name='Ivy' id='5'/>
       <DialogItem name='Ava' id='6'/>
      </div>
      <div className={classes.messages}>
        <Message message="Hi sweetie"/>
        <Message message="Want some beer?"/>
        <Message message="Are you alone here"/>
        <Message message="Go to the party honey"/> 
      </div>
    </div>
  )
}

export default Dialogs
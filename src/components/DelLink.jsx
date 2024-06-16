import styles from '../styles/DelLinks.module.css';
//import MyLink from './MyLink';
import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {FaTrash} from 'react-icons/fa';
import { IoIosCheckmarkCircle } from "react-icons/io";


const DelLink = ({links, onDelete, onToggle}) => {
  return (
    < div className={styles.dellink} >
     
      {links.map((link)=> ( 
      <Fragment key= {link.id}>
        
        <p className={styles.dellink.p}>
          <Link to={link.url} target="_blank" >{link.url}
          </Link>

        <FaTrash  onClick = {()=>onDelete(link.id)}  
        className={styles.dellink.x} style={ {cursor:'pointer', color:'rgb(180, 51, 73)'}}
        /> 

        <IoIosCheckmarkCircle
        onDoubleClick = {()=>onToggle(link.id)}
        className={`{styles.dellink} ${styles.dellink.tick ? '.tick':'.active'}`} 
       
        />
      
      </p>
      
      </Fragment>  
      
     ))}   
       
    </div>
       
 );
 };

export default DelLink

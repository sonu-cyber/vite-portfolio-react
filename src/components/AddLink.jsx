import {PropTypes} from 'prop-types';
import styles from '../styles/Button.module.css';

const AddLink = ({links,onAdd}) => {
  return (
    <div>
        <button className={styles.btn} links={links} onClick={()=>onAdd()} >Add Link</button>
        {console.log("addLink links",links)}
       
       
    </div>
  )

 
}

export default AddLink

import {Outlet,Link } from 'react-router-dom';
import styles from '../styles/Layout.module.css';
const Layouts = () => {
  return (
    <div className={styles.layout}>
        <nav className={styles.nav}>
        
       
            <p className={styles.para}><Link to="/">Layout</Link></p>
            <p><Link to="/home">Home</Link></p>
            <p><Link to="/about">About</Link></p>
            <p><Link to="/contactme">Contact Me</Link></p>
       
        </nav>
   
    <Outlet/>
      
    </div>
  )
}

export default Layouts;

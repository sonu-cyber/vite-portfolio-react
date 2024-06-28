import {Link, useNavigate} from "react-router-dom";
import styles from "../styles/Contact.module.css";

const ContactMe = () => {
    const navigate = useNavigate();

    return (
        <div className="styles.contactme">
            <h3>Contact Me</h3>
            <p>Email: gayathriraghuram1@gmail.com</p>
            <p>
                LinkedIn:{" "}
                <Link to="https://www.linkedin.com/in/gayathriraghuram" target="_blank">
                    Go to my LinkedIn Page
                </Link>
            </p>
            <p>
                Github:{" "}
                <Link to="https://github.com/sonu-cyber/" target="_blank">
                    Go to my Github Page
                </Link>
            </p>
            <p>
                Other Portfolio Website:{" "}
                <Link to="https://portfolio-gayathri.netlify.app" target="_blank">
                    Go to my VueJs Portfolio Website
                </Link>
            </p>
            <p className={styles.goback}>
                <Link to="/">Go back</Link>
            </p>
            <button className={styles.navigate} onClick={() => navigate("/home")}>
                Go to Home
            </button>
            <button className={styles.navigate} onClick={() => navigate("/about")}>
                Go to About
            </button>
        </div>
    );
};

export default ContactMe;

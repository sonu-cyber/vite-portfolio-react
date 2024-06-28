import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import styles from "../styles/Links.module.css";
import AddLink from "./AddLink";
import DelLink from "./DelLink";

const Home = () => {
    const navigate = useNavigate();

    const [links, setLinks] = useState([
        {
            id: 1,
            url: "https://portfolio-gayathri.netlify.app",
            showLink: false,
        },

        {
            id: 2,
            url: "https://github.com/sonu-cyber",
            showLink: true,
        },

        {
            id: 3,
            url: "https://github.com/sonu-cyber/weather-api-vue",
            showLink: false,
        },
        {
            id: 4,
            url: "https://messari-crypto-vue.netlify.app",
            showLink: true,
        },

        {
            id: 5,
            url: "https://dojo-nuxt.netlify.app",
            showLink: false,
        },

        {
            id: 6,
            url: "https://pinia-task.netlify.app/",
            showLink: true,
        },

        {
            id: 7,
            url: "https://simple-port-folio.netlify.app",
            showLink: false,
        },
        {
            id: 8,
            url: "https://www.linkedin.com/in/gayathriraghuram",
            showLink: true,
        },
        {
            id: 9,
            url: "https://weather-api-proj.netlify.app",
            showLink: false,
        },

        {
            id: 10,
            url: "https://cryptonator-api-proj.netlify.app",
            showLink: true,
        },

        {
            id: 11,
            url: "https://dojo-nuxt.netlify.app",
            showLink: true,
        },

        {
            id: 12,
            url: "https://nasa-apod-proj.netlify.app",
            showLink: true,
        },

        {
            id: 13,
            url: "https://trillo-proj.netlify.app",
            showLink: false,
        },

        {
            id: 14,
            url: "https://github.com/sonu-cyber/styledcomps",
            showLink: true,
        },

        {
            id: 15,
            url: "https://github.com/sonu-cyber/tailwindcssproj",
            showLink: false,
        },
    ]);

    /* Adding a link */

    const linkAdd = () => {
        const addLink = {id: Math.floor(Math.random() * 1000), url: "https://dojo-nuxt.netlify.app", show: true};
        setLinks([...links, addLink]);
        //console.log('Add link',linkAdd);
        return addLink;
    };

    /* Toggle showLink */

    const toggleShowLink = (id) => {
        console.log("ID PASSED IS SEEN, id", id);
        setLinks(
            links.map((link) => {
                if (link.id === id) {
                    return {...links, showLink: !link.showLink};
                }
                console.log(
                    "showLink is NOW:",
                    link.showLink,
                    "link id is now:",
                    link.id,
                    "id is:",
                    id,
                    "link.url:",
                    link.url,
                    "link is now:",
                    link
                );
                return link;
            })
        );
    };

    /* Deleting a link */
    const deleteLink = (id) => {
        console.log(" delete id", id);
        setLinks(links.filter((link) => link.id !== id));
        console.log("links", links);
    };

    /* Return values */

    return (
        <div className="home">
            <h3>Home</h3>

            <div>
                {links.length > 0 ? (
                    <p>
                        <DelLink links={links} onDelete={deleteLink} onToggle={toggleShowLink} />
                    </p>
                ) : (
                    "No links to show!"
                )}
                {<AddLink links={links} onAdd={linkAdd} />}
            </div>

            <div className={styles.goback}>
                <Link to="/">Go back</Link>
            </div>

            <button className={styles.navigate} onClick={() => navigate("/contactme")}>
                Go to ContactMe
            </button>
            <button className={styles.navigate} onClick={() => navigate("/about")}>
                Go to About
            </button>
        </div>
    );
};

export default Home;

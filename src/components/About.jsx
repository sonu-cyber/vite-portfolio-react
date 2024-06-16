import {Link} from 'react-router-dom'
import styles from '../styles/About.module.css';
const About = () => {
  return (
    <div>
      <h3>About Me</h3>
      <p className="para">My name is Gayathri Raghuram. I am a Front End Developer. I am looking for opportunities to work remotely or on site or in a hybrid setting. I have 4+ years of experience working in the area of computer science. I have worked for 2 years as a Software Engineer & 2 years as an Adjunct Instructor in Computer science.</p>

<p>I have a background in HTML, CSS, Javascript, GIT,Bootstrap, Tailwind CSS and I have worked with JS Frameworks like VueJs, NuxtJs, PINIA & consuming REST API’s. I have also worked with UI/UX design tools like Adobe Illustrator, Adobe XD, Sketch etc

</p>
<p className="para">I am looking for Front End Web Developer positions. I have trained in online courses with Udemy, Eduonix etc for the past 4 yrs and worked on projects on my own too. I have worked on my own projects using the Fetch API, DOM Manipulation, Flexbox, Grid,Bootstrap, Tailwindcss, SASS(SCSS),media-Queries, Vue3,Vue Routing, Vuex, PINIA, NUXT,etc. I am familiar with ReactJs,React Hooks React Routing etc.

</p> 
<p className="para">I have also worked on my own projects using the Fetch API, DOM Manipulation, Flexbox, Media-Queries, VueJs(Routing) etc. My projects are also available on my GITHUB repository https://github.com/sonu-cyber

</p>
<p className="para">I have used ReactJs to develop this portfolio. I have also used Nested Components, Routing, Props, CSS Modules and Hooks in this project.</p>

<p className={styles.goback}><Link  to="/">Go back</Link></p>
</div>
  )
}

export default About

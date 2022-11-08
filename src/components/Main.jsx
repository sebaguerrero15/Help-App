import styles from "./Main.module.css";
import { Link } from "react-router-dom"; 
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiSass, DiNpm } from 'react-icons/di';
import { FaReact, FaBootstrap } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import { VscTerminalCmd } from 'react-icons/vsc';
import { SiTailwindcss, SiVisualstudiocode } from 'react-icons/si';
import r2d2 from "../assets/r2d2.png";

function Main() {
    return (
        <>
        
            <h1 className={styles.titulo}>Skills
            <Link to="/">
            <img src={r2d2} alt="r2d2-icon" className={styles.r2d2title}/>
            </Link>
            </h1> 
      
            <div className={styles.containermain}>
                
                <div className={styles.card}> 
                <Link to="/Menuhtml" className={styles.icons}>
                    <AiFillHtml5 />
                </Link>
                </div>

                <div className={styles.card}> 
                <Link to="/Menucss" className={styles.icons}>
                    <DiCss3 />
                </Link>
                </div>

                <div className={styles.card}> 
                <Link to="/Menureact" className={styles.icons}>
                    <FaReact />
                </Link>
                </div>

                <div className={styles.card}> 
                <Link to="/Menujs" className={styles.icons}>
                    <TbBrandJavascript />
                </Link>
                </div>

               <div className={styles.card}> 
                <Link to="/Menubootstrap" className={styles.icons}>
                    <FaBootstrap />
                </Link>
                </div>

                <div className={styles.card}> 
                <Link to="/Menutailwind" className={styles.icons}>
                    <SiTailwindcss />
                </Link>
                </div>

                <div className={styles.card}> 
                <Link to="/Menusass" className={styles.icons}>
                    <DiSass />
                </Link>
                </div>

              <div className={styles.card}> 
                <Link to="/Menugit" className={styles.icons}>
                    <AiFillGithub />
                </Link>
                </div>

                <div className={styles.card}> 
                <Link to="/Menunpm" className={styles.icons}>
                    <DiNpm />
                </Link>
                </div>

                <div className={styles.card}> 
                <Link to="/Menuvs" className={styles.icons}>
                    <SiVisualstudiocode />
                </Link>
                </div>

                <div className={styles.card}> 
                <Link to="/Menucmd" className={styles.icons}>
                    <VscTerminalCmd />
                </Link>
                </div>

            </div>
         
        </>
    );
}

export default Main;
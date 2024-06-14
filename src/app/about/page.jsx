import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We create digital experiences</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          aperiam recusandae deleniti impedit sunt fugit excepturi reprehenderit
          eveniet nesciunt. Dolorum cumque sapiente cupiditate, suscipit
          accusamu
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image fill src="/about.png" alt="About image" className={styles.img} />
      </div>
    </div>
  );
};
export default About;

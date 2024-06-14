import Image from "next/image";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          voluptates nostrum ab itaque inventore nihil molestias est sint at{" "}
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" fill alt="" className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image fill src="/hero.gif" alt="" className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;

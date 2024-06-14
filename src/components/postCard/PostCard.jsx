import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            fill
            src="https://images.pexels.com/photos/25381433/pexels-photo-25381433/free-photo-of-tree-under-clear-sky.jpeg"
            alt="post image"
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facere
          vitae in voluptate corporis perferendis, a similique quaerat, at eos
          praesentium dolore, quasi nesciunt temporibus aspernatur fugiat
          ratione. Odio, expedita.
        </p>
        <Link href="/blog/title" className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};
export default PostCard;

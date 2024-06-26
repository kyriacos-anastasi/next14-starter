import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          {post.img && (
            <Image
              fill
              src="https://images.pexels.com/photos/25381433/pexels-photo-25381433/free-photo-of-tree-under-clear-sky.jpeg"
              alt="post image"
              className={styles.img}
            />
          )}
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        <Link href={`/blog/${post.slug}`} className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};
export default PostCard;

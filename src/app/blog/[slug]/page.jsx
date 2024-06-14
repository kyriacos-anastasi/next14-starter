import Image from "next/image";
import styles from "./singlePost.module.css";
const SinglePostPage = ({ params, searchParams }) => {
  console.log(params);
  console.log(searchParams);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/25381433/pexels-photo-25381433/free-photo-of-tree-under-clear-sky.jpeg"
          alt=""
          className={styles.img}
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Single Post Title</h1>
        <div className={styles.detail}>
          <Image
            width={50}
            height={50}
            src="https://images.pexels.com/photos/25381433/pexels-photo-25381433/free-photo-of-tree-under-clear-sky.jpeg"
            alt=""
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className="styles.detailTitle">Author</span>
            <span className="styles.detailValue">Davey Dave</span>
          </div>
          <div className={styles.detailText}>
            <span className="styles.detailTitle">Published</span>
            <span className="styles.detailValue">01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quis
          illum totam repellendus tenetur, molestiae, eos perferendis maxime
          rerum incidunt nam atque quibusdam ipsa est. Aliquid officia inventore
          suscipit molestias!
        </div>
      </div>
    </div>
  );
};
export default SinglePostPage;

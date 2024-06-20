import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";
import Image from "next/image";

// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <Image
        height={50}
        width={50}
        src={user.img ? user.img : "/noavatar.png"}
        alt="post image"
        className={styles.avatar}
      />
      <div className="styles.texts">
        <span className="styles.title">Author</span>
        <span className="styles.username">{user.username}</span>
      </div>
    </div>
  );
};
export default PostUser;

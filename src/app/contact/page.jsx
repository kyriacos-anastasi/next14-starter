import Image from "next/image";
import styles from "./contact.module.css";
import dynamic from "next/dynamic";
// import HydrationTest from "@/components/HydrationTest";

// const HydrationTestNoSSR = dynamic(() => import("@/components/HydrationTest"), {
//   ssr: false,
// });

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          fill
          src="/contact.png"
          alt="Contact image"
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR /> */}

        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and surname"></input>
          <input type="email" placeholder="Email Address"></input>
          <input type="phone" placeholder="Phone Number (optional)"></input>
          <textarea placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
      <div className={styles.container}></div>
      <div className={styles.container}></div>
    </div>
  );
};
export default Contact;

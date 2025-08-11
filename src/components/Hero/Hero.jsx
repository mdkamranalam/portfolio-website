import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Md. Kamran Alam</h1>
        <p className={styles.description}>
          I'm a full-stack developer from India. I specialize in building
          responsive and user-friendly web applications, and exploring AIML. With a passion for
          learning new technologies, I enjoy solving complex problems and creating efficient, scalable solutions. I am dedicated to delivering high-quality code and collaborating with teams to bring ideas to life.
        </p>
        <a href="mailto:work.mdkamranalam@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

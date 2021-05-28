import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Rostyslav.jpg"
          alt="An image showing Rostyslav"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Rostylsav</h1>
      <p>I blog about web development - especially frontent frameworks</p>
    </section>
  );
};

export default Hero;

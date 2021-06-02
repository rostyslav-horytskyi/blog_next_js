import Image from 'next/image';
import classes from './post-header.module.css';

const PostHeader = ({ title, image }) => {
  return (
    <header>
      <h1 className={classes.header}>{title}</h1>
      <Image
        src={image}
        alt={title}
        width={200}
        height={100}
      />
    </header>
  );
};

export default PostHeader;

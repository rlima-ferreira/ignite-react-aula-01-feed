import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export default function Avatar({ hasBorder = false, ...props }: IProps) {
  return (
    <img
      className={hasBorder ? styles.avatar : styles.avatarWithoutBorder}
      {...props}
    />
  );
}

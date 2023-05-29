import { PencilLine } from 'phosphor-react';
import { IMe } from '../api/me.api';
import Avatar from './Avatar';
import styles from './Sidebar.module.css';

interface IProps {
  data: IMe;
}

export default function Sidebar({ data }: IProps) {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={data.coverUrl} />
      <div className={styles.profile}>
        <Avatar hasBorder src={data.avatarUrl} />
        <strong>{data.name}</strong>
        <span>{data.role}</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}

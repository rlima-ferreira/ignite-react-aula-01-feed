import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { IComment } from '../api/post.api';
import Avatar from './Avatar';
import styles from './Comment.module.css';

interface IProps {
  data: IComment;
  onRemove: (id: string) => void;
}

export default function Comment({ data, onRemove }: IProps) {
  const [likeCount, setLikeCount] = useState(0);

  return (
    <div className={styles.comment}>
      <Avatar src={data.author.avatarUrl} />
      <div className={styles.box}>
        <div className={styles.content}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{data.author.name}</strong>
              <time
                title={format(data.publishedAt, "d 'de' LLL 'às' HH:mm'h'", {
                  locale: ptBR,
                })}
                dateTime={data.publishedAt.toISOString()}
              >
                {formatDistanceToNow(data.publishedAt, {
                  locale: ptBR,
                  addSuffix: true,
                })}
              </time>
            </div>
            <button
              title="Deletar comentário"
              onClick={() => onRemove(data.id)}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{data.text}</p>
        </div>
        <footer>
          <button onClick={() => setLikeCount((state) => state + 1)}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

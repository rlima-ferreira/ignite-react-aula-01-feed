import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { FormEvent, InvalidEvent, useState } from 'react';
import { IPost } from '../api/post.api';
import Avatar from './Avatar';
import Comment from './Comment';
import styles from './Post.module.css';

interface IProps {
  data: IPost;
}

export default function Post({ data }: IProps) {
  const [comments, setComments] = useState<any[]>([]);
  const [isInvalid, setIsInvalid] = useState(true);

  async function handleCreateComment(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    setComments([...comments, { text: formData.get('text') }]);
    formData.set('text', '');
  }

  async function removeComment(id: string) {
    const commentsCopy = comments.filter((comment) => comment.id !== id);
    setComments(commentsCopy);
  }

  function handleInvalid(ev: InvalidEvent<HTMLTextAreaElement>) {
    const { setCustomValidity, value } = ev.target;
    setIsInvalid(value.trim().length === 0);
    if (value.trim().length === 0) {
      setCustomValidity('Este campo é obrigatório');
    }
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={data.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{data.author.name}</strong>
            <span>{data.author.role}</span>
          </div>
        </div>
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
      </header>
      <div className={styles.content}>{data.content}</div>
      <form onSubmit={handleCreateComment} className={styles.formComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="text"
          placeholder="Deixe um comentário"
          onInvalid={handleInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isInvalid}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment key={comment.id} data={comment} onRemove={removeComment} />
        ))}
      </div>
    </article>
  );
}

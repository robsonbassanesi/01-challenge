import styles from './Task.module.scss';

export function Task(props) {
  return (
    <>
      <section>
        <div className={styles.taskList}>
          <input type="checkbox" />
          <p>{props.content}</p>
          <button type="button" />
        </div>
      </section>
    </>
  );
}

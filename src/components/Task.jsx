import styles from './Task.module.scss';

export function Task(props) {
  function handleDeleteTask() {
    props.onDeleteTask(id);
  }

  return (
    <>
      <section>
        <div className={styles.taskList}>
          <input type="checkbox" />
          <p>{props.content}</p>
          <button onClick={handleDeleteTask} type="button" id={props.task.id} />
        </div>
      </section>
    </>
  );
}

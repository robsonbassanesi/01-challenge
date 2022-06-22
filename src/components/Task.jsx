import styles from './Task.module.scss';

export function Task(props) {
  function handleDeleteTask() {
    props.onDeleteTask(props.id);
  }

  function handleCompleteTask() {
    props.onIsCompleteTask(props.id);
  }

  return (
    <>
      <section>
        <div className={styles.taskList}>
          <input
            checked={props.onIsCompleted}
            type="checkbox"
            onClick={handleCompleteTask}
          />
          <p className={props.onIsCompleted ? 'completed' : ''}>
            {props.content}
          </p>
          <button onClick={handleDeleteTask} type="button" />
        </div>
      </section>
    </>
  );
}

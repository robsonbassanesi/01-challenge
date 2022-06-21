import '../global.scss';
import styles from './TaskArea.module.scss';
import clipboard from '../assets/clipboard.svg';
import { Task } from './Task';
import { PlusCircle } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export function TaskArea() {
  const [tasks, setTasks] = useState([]);

  function handleCreateNewTask() {
    event.preventDefault();

    const newTask = event.target.handleTask.value;

    setTasks(...tasks, newTask);
  }

  return (
    <>
      <div className={styles.inputTask}>
        <form action="submit" onSubmit={handleCreateNewTask}>
          <input
            name="handleTask"
            type="text"
            placeholder="Adicione uma nova tarefa"
          />
          <button type="submit">
            Criar
            <PlusCircle size={32} />
          </button>
        </form>
      </div>
      <main>
        <div className={styles.tasksArea}>
          <div className={styles.taskCounter}>
            <div className={styles.createdTaskCounter}>
              <h1>Tarefas criadas</h1>
              <h2>0</h2>
            </div>
            <div className={styles.finishedTaskCounter}>
              <h1>Concluídas</h1>
              <h2>0</h2>
            </div>
          </div>
          <div className={styles.taskList}>
            <img src={clipboard} alt="icone de prancheta" />
            <p>
              <h1>Você ainda não tem tarefas cadastradas</h1>
              <h1>Crie tarefas e organize seus itens a fazer</h1>
            </p>
          </div>
        </div>
        <div>
          {tasks.map(task => {
            return <Task content={task} />;
          })}
        </div>
      </main>
    </>
  );
}

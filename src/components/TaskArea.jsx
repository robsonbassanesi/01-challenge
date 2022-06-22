import '../global.scss';
import styles from './TaskArea.module.scss';
import { Task } from './Task';
import { PlusCircle } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { Transition } from './Transition';

export function TaskArea() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateNewTask() {
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      title: newTaskText,
      isComplete: false
    };

    setTasks([...tasks, newTask]);

    setNewTaskText('');
  }

  const countTaskDone = tasks.filter(task => task.isComplete === true).length;

  function handleNewTaskChange() {
    setNewTaskText(event.target.value);
  }

  function deleteTask(id) {
    const taskWithoutDeletedOne = tasks.filter(task => {
      return task.id !== id;
    });

    setTasks(taskWithoutDeletedOne);
  }

  function isCompleteTask(id) {
    const tasksCompleted = tasks.map(task =>
      task.id == id
        ? {
            ...task,
            isComplete: !task.isComplete
          }
        : task
    );

    setTasks(tasksCompleted);
  }

  return (
    <>
      <div className={styles.inputTask}>
        <form action="submit" onSubmit={handleCreateNewTask}>
          <input
            name="handleTask"
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChange}
            value={newTaskText}
            required
          />
          <button type="submit">
            Criar
            <PlusCircle size={32} />
          </button>
        </form>
      </div>
      <main>
        <div className={styles.counterTasks}>
          <div className={styles.taskCounter}>
            <div className={styles.createdTaskCounter}>
              <h1>Tarefas criadas</h1>
              <span>{tasks.length}</span>
            </div>
            <div className={styles.finishedTaskCounter}>
              <h1>Concluídas</h1>
              <span>
                {countTaskDone} de {tasks.length}
              </span>
            </div>
          </div>
        </div>
        {tasks.length > 0 ? (
          <div>
            {tasks.map(task => {
              return (
                <Task
                  key={task.id}
                  onDeleteTask={deleteTask}
                  content={task.title}
                  id={task.id}
                  onIsCompleteTask={isCompleteTask}
                  onIsComplete={task.isComplete}
                />
              );
            })}
          </div>
        ) : (
          <Transition />
        )}
      </main>
    </>
  );
}

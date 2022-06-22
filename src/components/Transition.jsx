import clipboard from '../assets/clipboard.svg';
import styles from './Transition.module.scss';

export function Transition() {
  return (
    <>
      <div className={styles.transitionStyle}>
        <img src={clipboard} alt="icone de prancheta" />
        <p>
          <h1>Você ainda não tem tarefas cadastradas</h1>
          <h1>Crie tarefas e organize seus itens a fazer</h1>
        </p>
      </div>
    </>
  );
}

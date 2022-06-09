import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.navContainer}>
        <li className={styles.navList}>
          <ul><a href="#">Sobre mim</a></ul>
          <ul><a href="#">Experiência</a></ul>
          <ul><a href="#">Stacks</a></ul>
        </li>
      </nav>

      <h1 className={styles.title}>Muras.<strong>code</strong></h1>

      <nav className={styles.navContainer}>
        <li className={styles.navList}>
          <ul><a href="#">Linkedin</a></ul>
          <ul><a href="#">Facebook</a></ul>
          <ul><a href="#">Instagram</a></ul>
        </li>
      </nav>
    </header>
  )
}
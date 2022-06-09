import { NextPage } from "next"
import { Header } from "../../components/Header"
import styles from './styles.module.scss'

export const HomePage: NextPage = () => {
  return(
    <>
      <Header />

      <div className={styles.homeContainer}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>Murilo Castilho de Campos</h1>
            <span className={styles.profession}>FullStack Developer</span>
            <p className={styles.description}>Sempre buscando a evolução através de código.</p>
          </div>
          
          <div className={styles.imageContainer}>
            <img 
              className={styles.image}
              src="https://github.com/MuriloCC.png" 
              alt="" 
            />
          </div>
        </div>
      </div>
    </>
  )
}
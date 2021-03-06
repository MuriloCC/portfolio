import { Grid } from "antd"
import { NextPage } from "next"
import Image from "next/image"
import { HTMLAttributes } from "react"
import styles from './styles.module.scss'

const { useBreakpoint } = Grid

const HomePage = (props: HTMLAttributes<HTMLDivElement>) => {

  const breakpoints = useBreakpoint()
  return(
    <div id={props.id} className={!breakpoints.lg ? styles.mobile : styles.homeContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>Murilo Castilho de Campos</h1>
            <span className={styles.profession}>FullStack Developer</span>
            <p className={styles.description}>Sempre buscando a evolução através de código.</p>
          </div>
          
          <div className={styles.imageContainer}>
            <Image
              width={200}
              height={200}
              className={styles.image}
              src="https://github.com/MuriloCC.png" 
              alt="Profile-photo"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
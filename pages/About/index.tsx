import { HTMLAttributes, useState } from "react";
import Lottie from 'react-lottie'

import styles from "./styles.module.scss"

import animatedGuitarist from '../../assets/gutarist.json'
import animatedDev from '../../assets/dev.json'
import { Grid } from "antd";

const {useBreakpoint} = Grid

const About = (props: HTMLAttributes<HTMLDivElement>) => {
  const breakpoints = useBreakpoint()

  const defaultOptionsMusician = {
    loop: true,
    autoplay: true,
    animationData: animatedGuitarist,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const defaultOptionsDev = {
    loop: true,
    autoplay: true,
    animationData: animatedDev,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <div id={props.id} className={styles.container}>
      <div className={styles.textContent}>
        <h1>Sobre mim</h1>
        <div className={styles.bioContainer}>
          <p>Nascido e criado em Sorocaba, no interior de SP, sempre gostei de utilizar a tecnologia e as vantagens e beleza que ela trás para a vida.</p>
          <p>Hoje com 22 anos e cerca de 7 meses de experiencia, posso dizer que consigo viver daquilo que tanto me encanta:</p>
          <p>Construção completa de softwares modernos e performáticos e todo dia aprendendo cada vez mais.</p>

          <div>
            <h2>Curiosidade</h2>
            <p>Além de Dev, também sou músico nos fins de semana tocando violão e cantando no Grupo 100 juizo.</p>
          </div>
        </div>
      </div>

      {breakpoints.lg && <div className={styles.animationContainer}>
        <Lottie 
          options={defaultOptionsDev}
          width={300}
          height={300} 
        />

        <Lottie
          style={{ marginTop: '-1rem' }} 
          options={defaultOptionsMusician}
          width={400}
          height={400} 
        />
      </div>}
    </div>
  )
}

export default About;
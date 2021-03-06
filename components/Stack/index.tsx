import Lottie from 'react-lottie'
import styles from './styles.module.scss'

interface IStack {
  imgObj: {
    loop: boolean,
    autoplay: boolean,
    animationData: any,
    rendererSettings: {
      preserveAspectRatio: string
    }
    }
  title: string
  type: string
  width: number
  height: number
  key: any
}

const Stack = ({ imgObj, title, type, width, height, key }: IStack) => {
  return (
    <div className={styles.container}>
      <Lottie 
        options={imgObj}
        width={width}
        height={height}
        key={key}
      />
      <h1>{title}</h1>
      <h2>{type}</h2>
    </div>
  )
}

export default Stack
import { Col, Row } from "antd"
import { HTMLAttributes } from "react"
import Stack from "../../components/Stack"
import { stacks } from "../stacks"
import styles from './styles.module.scss'

const Stacks = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div id={props.id} className={styles.container}>
      <h1 className={styles.title}>Essas são as stacks que trabalho</h1>
      <div className={styles.rowContainer}>
        {stacks.map(stack => (
            <Stack 
              width={stack.width} 
              height={stack.height} 
              imgObj={stack.defaultOptions} 
              title={stack.title} 
              type={stack.type} 
            />
          )
        )}
      </div>
    </div>
  )
}

export default Stacks
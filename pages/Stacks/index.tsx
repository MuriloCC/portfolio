import { Col, Row } from "antd"
import { HTMLAttributes } from "react"
import Stack from "../../components/Stack"
import styles from './styles.module.scss'
import animatedReactIcon from '../../assets/react.json'
import animatedFlutterIcon from '../../assets/flutter.json'
import animatedHtmlIcon from '../../assets/html.json'
import animatedCssIcon from '../../assets/css3.json'
import animatedNodeJsIcon from '../../assets/nodejs.json'
import animatedJsIcon from '../../assets/javascript.json'

const Stacks = (props: HTMLAttributes<HTMLDivElement>) => {
  const stacks = [
  {
    width: 100,
    height: 100,
    title: "React",
    type: "WEB e Mobile",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: animatedReactIcon,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  },

  {
    width: 120,
    height: 120,
    title: "Flutter",
    type: "MOBILE",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: animatedFlutterIcon,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  },

  {
    width: 120,
    height: 120,
    title: "HTML",
    type: "WEB",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: animatedHtmlIcon,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  },

  {
    width: 120,
    height: 120,
    title: "CSS",
    type: "WEB",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: animatedCssIcon,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  },

  {
    width: 120,
    height: 120,
    title: "NodeJs",
    type: "Backend",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: animatedNodeJsIcon,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  },

  {
    width: 120,
    height: 120,
    title: "Javascript",
    type: "Linguagem",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: animatedJsIcon,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  },
]

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
              key={stack.title}
            />
          )
        )}
      </div>
    </div>
  )
}

export default Stacks
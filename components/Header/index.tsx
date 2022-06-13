import styles from './styles.module.scss'
import { GithubFilled, InstagramOutlined, LinkedinFilled } from '@ant-design/icons'
import Link from 'next/link'
import { Grid } from 'antd'

const { useBreakpoint } = Grid

export const Header = () => {
  const breakPoints = useBreakpoint()


  return (
    <header className={breakPoints.lg ? styles.container : styles.mobile}>
      {breakPoints.lg && <nav className={styles.navContainer}>
        <li className={styles.navList}>
          <ul>
            <a href='#home'>Home</a>
          </ul>
          <ul>
            <Link href="#about">Sobre mim</Link>
          </ul>
          <ul>
            <Link href="#stacks">Stacks</Link>
          </ul>
        </li>
      </nav> }

      <h1 className={styles.title}>Muras.<strong>code</strong></h1>

      <nav className={styles.navContainer}>
        <li className={styles.navListSocial}>
          <ul>
            <a target="_blank" rel='noreferrer' href="https://linkedin.com/in/murilo-castilho-4b193b198/">
              <LinkedinFilled 
                style={{ fontSize: 30 }}
              />
            </a>
            </ul>
          <ul>
            <a target="_blank" rel='noreferrer' href="https://www.github.com/MuriloCC">
              <GithubFilled 
                style={{ fontSize: 30 }}
              />
            </a>
          </ul>
          <ul>
            <a target="_blank" rel='noreferrer' href="https://www.instagram.com/ehomuras_/">
              <InstagramOutlined style={{ fontSize: 30 }} />
            </a>
          </ul>
        </li>
      </nav>
    </header>
  )
}
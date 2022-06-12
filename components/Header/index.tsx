import styles from './styles.module.scss'
import { GithubFilled, InstagramFilled, InstagramOutlined, LinkedinFilled } from '@ant-design/icons'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.navContainer}>
        <li className={styles.navList}>
          <ul>
            <a href='#about'>Sobre mim</a>
          </ul>
          <ul>
            <Link href="/About">Sobre mim</Link>
          </ul>
          <ul>
            <Link href="/About">Sobre mim</Link>
          </ul>
        </li>
      </nav>

      <h1 className={styles.title}>Muras.<strong>code</strong></h1>

      <nav className={styles.navContainer}>
        <li className={styles.navListSocial}>
          <ul>
            <a target="_blank" rel="noreferrer" href="www.linkedin.com/in/murilo-castilho-4b193b198/">
              <LinkedinFilled 
                style={{ fontSize: 30 }}
              />
            </a>
            </ul>
          <ul>
            <a href="#">
              <GithubFilled 
                style={{ fontSize: 30 }}
              />
            </a>
          </ul>
          <ul>
            <a href="#">
              <InstagramOutlined style={{ fontSize: 30 }} />
            </a>
          </ul>
        </li>
      </nav>
    </header>
  )
}
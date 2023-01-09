import Navigation from '../navigation'
import Footer from '../footer'
import styles from '../../styles/Home.module.css'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navigation />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

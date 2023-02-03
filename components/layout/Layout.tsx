import Navigation from '../navigation'
import Footer from '../footer'
import styles from '../../styles/Home.module.css'
import { SSRProvider } from 'react-bootstrap'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SSRProvider>
      <Navigation />
      <main className={styles.main}>{children}</main>
      <Footer />
    </SSRProvider>
  )
}

export default Layout

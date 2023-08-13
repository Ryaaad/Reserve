// import Header from '../components/shared/Header'
// import Footer from '../components/shared/Footer'
import  '../styles/globals.css'
import Navbar from '../components/shared/Navbar/Navbar'
const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
     <Navbar></Navbar>
      <main className="container flex-1">{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default ClientLayout
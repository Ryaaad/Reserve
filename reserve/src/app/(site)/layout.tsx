// import Header from '../components/shared/Header'
// import Footer from '../components/shared/Footer'
import  '../../styles/globals.css'
const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <main className="container flex-1">{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default ClientLayout
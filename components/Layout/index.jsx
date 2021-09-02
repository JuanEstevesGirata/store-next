import Header from "@components/Header";
import Menu from "@components/Menu";
import NavBar from "@components/NavBar";
import Product from "@components/Product";


const Layout = ({ children }) => (
    <>
      <NavBar />
      <Header/>
     
      <Product />
      
      
    </>
  )

  export default Layout;
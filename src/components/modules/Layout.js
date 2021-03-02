import Navbar from '@/elements/NavBar';
import Footer from '@/elements/Footer';

const Layout = (props) => {

  return <div id='pageContainer'>
    <header>
      <Navbar />
    </header>
    {props.children}
    <Footer />
  </div>
};

export default Layout;
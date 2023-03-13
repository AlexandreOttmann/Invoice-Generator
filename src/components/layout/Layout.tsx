import Header from './Header';
import FooterPage from './FooterPage';

const Layout = ({ children }: any) => {
 return (
  <div className="relative">
   <Header />

   {children}

   <FooterPage />
  </div>
 );
};

export default Layout;

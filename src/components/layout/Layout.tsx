import Header from './Header';
import FooterPage from './FooterPage';

const Layout = ({ children }: any) => {
 return (
  <div className="relative min-w-[32rem]">
   <Header />

   {children}

   <FooterPage />
  </div>
 );
};

export default Layout;

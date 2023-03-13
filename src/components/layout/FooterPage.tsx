const FooterPage = () => {
 return (
  <footer className="p-4 relative z-10 bottom-0 w-full mt-20 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 ">
   <span className="text-sm text-gray-500 sm:text-center ">
    © 2023{' '}
    <a
     href="https://github.com/AlexandreOttmann/Dev-Portfolio"
     target={'_blank'}
     className="hover:underline"
    >
     Alexandre OTTMANN & Nicolas DE RAEMY
    </a>
    . All Rights Reserved.
   </span>
   <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500  sm:mt-0">
    <li>
     <a href="#" className="mr-4 hover:underline md:mr-6 ">
      About
     </a>
    </li>
    <li>
     <a href="/mentions-legales" className="mr-4 hover:underline md:mr-6">
      Privacy Policy
     </a>
    </li>
    <li>
     <a href="#" className="hover:underline">
      Contact
     </a>
    </li>
   </ul>
  </footer>
 );
};

export default FooterPage;

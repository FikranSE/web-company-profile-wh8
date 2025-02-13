
const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4 py-10">
      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-16">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-sky-600">
            WH8
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-row md:space-x-6 flex-wrap justify-center gap-4 text-sm">
          <a href="/about-us" className="text-gray-600 hover:text-gray-900">ABOUT US</a>
          <a href="/products" className="text-gray-600 hover:text-gray-900">PRODUCTS</a>
          <a href="/press" className="text-gray-600 hover:text-gray-900">PRESS</a>
          <a href="/careers" className="text-gray-600 hover:text-gray-900">CAREERS</a>
          <a href="/contact-us" className="text-gray-600 hover:text-gray-900">CONTACT US</a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a href="https://twitter.com" className="text-gray-600 shadow-md p-2 rounded-full hover:text-gray-900">
            <span className="sr-only">Twitter</span>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
            </svg>
          </a>
          <a href="https://google.com" className="text-gray-600 shadow-md p-2 rounded-full hover:text-gray-900">
            <span className="sr-only">Google</span>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
            </svg>
          </a>
          <a href="https://facebook.com" className="text-gray-600 shadow-md p-2 rounded-full hover:text-gray-900">
            <span className="sr-only">Facebook</span>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
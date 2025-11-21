import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="py-8 bg-white dark:bg-slate-900 text-center border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} Caleb Joseph. <br className="sm:hidden" />
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
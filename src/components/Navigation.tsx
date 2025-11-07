import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    }
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.05
    }
  }
};

const menuItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 }
};

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { 
      label: 'About Us', 
      dropdown: [
        { path: '/about', label: 'About Us' },
        { path: '/blog', label: 'Blog' },
        { path: '/careers', label: 'Career' }
      ]
    },
    { path: '/services', label: 'Services' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-[#1E90FF]/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-gradient relative"
              whileHover={{ scale: 1.05 }}
            >
              NeoTeq
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] opacity-0 blur-lg"
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative"
              >
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setAboutDropdownOpen(true)}
                    onMouseLeave={() => setAboutDropdownOpen(false)}
                  >
                    <button
                      className="flex items-center gap-1 text-white hover:text-[#00FFFF] transition-colors"
                    >
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item.label}
                      </motion.span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {aboutDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-48 glass-effect rounded-xl border border-[#1E90FF]/30 overflow-hidden"
                        >
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`block px-4 py-3 transition-colors ${
                                location.pathname === subItem.path
                                  ? 'text-[#1E90FF] bg-[#1E90FF]/10'
                                  : 'text-white hover:text-[#00FFFF] hover:bg-white/5'
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`relative transition-colors ${
                      location.pathname === item.path
                        ? 'text-[#1E90FF]'
                        : 'text-white hover:text-[#00FFFF]'
                    }`}
                  >
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.label}
                    </motion.span>
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#1E90FF] to-[#00FFFF]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden"
            >
              <div className="pb-4 space-y-2">
                {navItems.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={menuItemVariants}
                  >
                    {item.dropdown ? (
                      <div>
                        <div className="py-2 px-4 text-white/60 text-sm">
                          {item.label}
                        </div>
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setIsOpen(false)}
                            className={`block py-2 px-6 rounded-lg transition-all ${
                              location.pathname === subItem.path
                                ? 'text-[#1E90FF] bg-[#1E90FF]/10'
                                : 'text-white hover:text-[#00FFFF] hover:bg-white/5'
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block py-2 px-4 rounded-lg transition-all ${
                          location.pathname === item.path
                            ? 'text-[#1E90FF] bg-[#1E90FF]/10'
                            : 'text-white hover:text-[#00FFFF] hover:bg-white/5'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

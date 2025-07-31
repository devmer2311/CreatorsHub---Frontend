'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Search, 
  Briefcase, 
  User as uicon, 
  Menu,
  X,
  Users,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getCurrentUser, logout, type User } from '@/lib/auth';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/explore', label: 'Explore', icon: Users },
    { href: '/jobs', label: 'Jobs', icon: Briefcase },
  ];

  // Add Feed to nav items only if user is logged in
  const getNavItems = () => {
    if (currentUser?.isLoggedIn) {
      return [...navItems, { href: '/feed', label: 'Feed', icon: Search }];
    }
    return navItems;
  };

  useEffect(() => {
    setCurrentUser(getCurrentUser());
  }, []);

  const isActive = (href: string) => pathname === href;

  const handleNavigation = (href: string) => {
    router.push(href);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
    router.push('/');
    setIsMobileMenuOpen(false);
  };

  const handleMyProfile = () => {
    router.push('/profile/current-user');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CH</span>
              </div>
              <span className="text-xl font-bold text-gray-900">CreatorsHub</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {getNavItems().map(({ href, label, icon: Icon }) => (
              <motion.button
                key={href}
                onClick={() => handleNavigation(href)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive(href)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
                <span className="font-medium">{label}</span>
              </motion.button>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {currentUser?.isLoggedIn ? (
              <>
                <Button
                  variant="ghost"
                  onClick={handleMyProfile}
                  className="text-gray-600 hover:text-blue-600"
                >
                  <User className="w-4 h-4 mr-2" />
                  My Profile
                </Button>
                <Button
                  variant="ghost"
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-red-600"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  onClick={() => handleNavigation('/auth/signup')}
                  className="text-gray-600 hover:text-blue-600"
                >
                  Sign In
                </Button>
                <Button
                  onClick={() => handleNavigation('/auth/signup')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 bg-white"
            >
              <div className="px-2 pt-2 pb-3 space-y-2">
                {getNavItems().map(({ href, label, icon: Icon }) => (
                  <motion.button
                    key={href}
                    onClick={() => handleNavigation(href)}
                    className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-colors ${
                      isActive(href)
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{label}</span>
                  </motion.button>
                ))}
                
                <div className="border-t border-gray-200 pt-3 space-y-2">
                  {currentUser?.isLoggedIn ? (
                    <>
                      <Button
                        variant="ghost"
                        onClick={handleMyProfile}
                        className="w-full justify-start text-gray-600 hover:text-blue-600"
                      >
                        <uicon className="w-4 h-4 mr-2" />
                        My Profile
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={handleLogout}
                        className="w-full justify-start text-gray-600 hover:text-red-600"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="ghost"
                        onClick={() => handleNavigation('/auth/signup')}
                        className="w-full justify-start text-gray-600 hover:text-blue-600"
                      >
                        Sign In
                      </Button>
                      <Button
                        onClick={() => handleNavigation('/auth/signup')}
                        className="w-full bg-blue-600 hover:bg-blue-700"
                      >
                        Sign Up
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

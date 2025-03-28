"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Bell, 
  Home,
  Target,
  Star,
  CheckCircle2,
  MessageSquare,
  BarChart2,
  Settings,
  User,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking outside
  const handleOverlayClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path: string) => pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Overlay - Only visible on mobile when menu is open */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
      )}

      {/* Sidebar - Fixed */}
      <div 
        className={`fixed inset-y-0 left-0 w-64 bg-slate-900/95 backdrop-blur-md border-r border-white/10 transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        } md:translate-x-0 z-50`}
      >
        {/* Close button - Only visible on mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 md:hidden"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col h-full p-4 pt-16 md:pt-4">
          {/* Logo section */}
          <div className="flex items-center gap-3 mb-8 px-2">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
              <span className="text-lg font-bold text-white">EP</span>
            </div>
            <span className="text-lg font-semibold text-white">Performance</span>
          </div>

          {/* Navigation */}
          <nav className="space-y-1 flex-1">
            <Link 
              href="/employee/dashboard" 
              className={`flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/employee/dashboard')
                  ? 'bg-white/10 text-white'
                  : 'text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link 
              href="/employee/goals" 
              className={`flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/employee/goals')
                  ? 'bg-white/10 text-white'
                  : 'text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Target className="h-4 w-4" />
              Goal Setting
            </Link>
            <Link 
              href="/employee/goals/approval" 
              className={`flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/employee/goals/approval')
                  ? 'bg-white/10 text-white'
                  : 'text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <CheckCircle2 className="h-4 w-4" />
              Goal Approval
            </Link>
            <Link 
              href="/employee/self-rating" 
              className={`flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/employee/self-rating')
                  ? 'bg-white/10 text-white'
                  : 'text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Star className="h-4 w-4" />
              Self Rating
            </Link>
            <Link 
              href="/employee/feedback" 
              className={`flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/employee/feedback')
                  ? 'bg-white/10 text-white'
                  : 'text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <MessageSquare className="h-4 w-4" />
              Feedback
            </Link>
            <Link 
              href="/employee/reports" 
              className={`flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/employee/reports')
                  ? 'bg-white/10 text-white'
                  : 'text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <BarChart2 className="h-4 w-4" />
              Reports
            </Link>
          </nav>

         
        </div>
      </div>

      {/* Mobile menu button - Fixed */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="fixed top-4 left-4 md:hidden z-50 p-2 rounded-lg bg-slate-900/95 backdrop-blur-md border border-white/10 text-white hover:bg-white/10"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Main Content - Scrollable */}
      <div className="flex-1 md:pl-64">
        <main className="min-h-screen">
          <div className="px-6 md:px-8 py-6">
            <div className="max-w-[1920px] mx-auto">
              {/* Header - Sticky */}
              <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-md mb-6 -mx-6 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-semibold text-white ml-8 md:ml-0">
                    {pathname === '/employee/dashboard' && 'Dashboard'}
                    {pathname === '/employee/goals' && 'Goal Setting'}
                    {pathname === '/employee/goals/approval' && 'Goal Approval'}
                    {pathname === '/employee/self-rating' && 'Self Rating'}
                    {pathname === '/employee/feedback' && 'Feedback'}
                    {pathname === '/employee/reports' && 'Performance Reports'}
                    {pathname === '/settings' && 'Settings'}
                  </h1>
                  <div className="flex items-center gap-3">
                    <Button variant="ghost" size="icon" className="relative text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200">
                      <Bell className="h-5 w-5" />
                      <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                    </Button>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Page Content */}
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 
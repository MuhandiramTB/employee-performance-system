"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { 
  Home,
  Target,
  Star,
  MessageSquare,
  BarChart2,
  LogOut,
  Menu,
  X,
  Users
} from 'lucide-react';
import Link from 'next/link';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

function ClientDashboardLayout({ children }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex">
      {/* Sidebar - Fixed */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-slate-900/95 backdrop-blur-md border-r border-white/10 transform transition-transform duration-200 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-30 flex flex-col`}>
        <div className="flex flex-col h-full p-4">
          {/* Logo section */}
          <div className="flex items-center gap-3 mb-8 px-2">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
              <span className="text-lg font-bold text-white">EP</span>
            </div>
            <span className="text-lg font-semibold text-white">Performance</span>
          </div>

          {/* Navigation */}
          <nav className="space-y-1 flex-1">
            <Link href="/employee/dashboard" className={`flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg ${pathname === '/employee/dashboard' ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/10 hover:text-white'} transition-colors`}>
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link href="/employee/goals" className={`flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg ${pathname === '/employee/goals' ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/10 hover:text-white'} transition-colors`}>
              <Target className="h-4 w-4" />
              Goal Setting
            </Link>
            <Link href="/employee/goals/approval" className={`flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg ${pathname === '/employee/goals/approval' ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/10 hover:text-white'} transition-colors`}>
              <Star className="h-4 w-4" />
              Goal Approval
            </Link>
            <Link href="/employee/self-rating" className={`flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg ${pathname === '/employee/self-rating' ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/10 hover:text-white'} transition-colors`}>
              <Star className="h-4 w-4" />
              Self Rating
            </Link>
            <Link href="/employee/feedback" className={`flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg ${pathname === '/employee/feedback' ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/10 hover:text-white'} transition-colors`}>
              <MessageSquare className="h-4 w-4" />
              Feedback
            </Link>
            <Link href="/employee/reports" className={`flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg ${pathname === '/employee/reports' ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/10 hover:text-white'} transition-colors`}>
              <BarChart2 className="h-4 w-4" />
              Reports
            </Link>
          </nav>

          {/* User section */}
          <div className="border-t border-white/10 pt-4">
            <button className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg text-slate-400 hover:bg-white/10 hover:text-white transition-colors w-full">
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu button - Fixed */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 md:hidden z-40 p-2 rounded-lg bg-slate-900/95 backdrop-blur-md border border-white/10 text-white hover:bg-white/10"
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMobileMenuOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content - Scrollable */}
      <div className="flex-1 md:pl-64 min-h-screen">
        <main className="h-full">
          <div className="px-6 md:px-8 py-6">
            <div className="max-w-[1920px] mx-auto">
              {/* Header - Sticky */}
              <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-md mb-6 -mx-6 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-semibold text-white">Performance</h1>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
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

// Server component wrapper
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <ClientDashboardLayout>{children}</ClientDashboardLayout>;
} 
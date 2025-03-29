"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { 
  Users,
  Target,
  Star,
  MessageSquare,
  BarChart2,
  LogOut,
  Menu,
  X,
  UserCheck,
  Calendar,
  Award,
  Briefcase,
  Bell,
  LayoutDashboard
} from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
    <div className="min-h-screen bg-[#020817] bg-gradient-to-b from-indigo-950/50 to-[#020817]">
      {/* Sidebar - Fixed */}
      <div className={`fixed inset-y-0 left-0 w-72 bg-white/5 backdrop-blur-md border-r border-white/10 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-30 flex flex-col`}>
        <div className="flex flex-col h-full p-6">
          {/* Logo section */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
              <span className="text-lg font-bold text-white">M</span>
            </div>
            <div>
              <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">Manager Portal</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1 flex-1">
            <Link href="/manager/dashboard" className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg ${pathname === '/manager/dashboard' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'} transition-all duration-300`}>
              <LayoutDashboard className="h-4 w-4" />
              Overview
            </Link>
            <Link href="/manager/team" className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg ${pathname === '/manager/team' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'} transition-all duration-300`}>
              <Users className="h-4 w-4" />
              Team Management
            </Link>
            <Link href="/manager/goals" className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg ${pathname === '/manager/goals' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'} transition-all duration-300`}>
              <Target className="h-4 w-4" />
              Goal Setting
            </Link>
            <Link href="/manager/approvals" className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg ${pathname === '/manager/approvals' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'} transition-all duration-300`}>
              <UserCheck className="h-4 w-4" />
              Goal Approvals
            </Link>
            <Link href="/manager/reviews" className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg ${pathname === '/manager/reviews' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'} transition-all duration-300`}>
              <Star className="h-4 w-4" />
              Performance Reviews
            </Link>
            <Link href="/manager/feedback" className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg ${pathname === '/manager/feedback' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'} transition-all duration-300`}>
              <MessageSquare className="h-4 w-4" />
              Team Feedback
            </Link>
            <Link href="/manager/reports" className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg ${pathname === '/manager/reports' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'} transition-all duration-300`}>
              <BarChart2 className="h-4 w-4" />
              Reports
            </Link>
            <Link href="/manager/schedule" className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg ${pathname === '/manager/schedule' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'} transition-all duration-300`}>
              <Calendar className="h-4 w-4" />
              Review Schedule
            </Link>
            <Link href="/manager/achievements" className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg ${pathname === '/manager/achievements' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'} transition-all duration-300`}>
              <Award className="h-4 w-4" />
              Team Achievements
            </Link>
            <Link href="/manager/projects" className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg ${pathname === '/manager/projects' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'} transition-all duration-300`}>
              <Briefcase className="h-4 w-4" />
              Projects
            </Link>
          </nav>

          {/* User section */}
          <div className="border-t border-white/10 pt-4 mt-4">
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5">
              <Avatar className="h-8 w-8 ring-2 ring-indigo-500/30">
                <AvatarImage src="/avatars/manager.png" />
                <AvatarFallback className="bg-gradient-to-r from-indigo-500 to-purple-500">MG</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">Manager User</p>
                <p className="text-xs text-slate-400">manager@company.com</p>
              </div>
            </div>
            <button className="flex items-center gap-3 px-4 py-2.5 mt-2 text-sm font-medium rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition-all duration-300 w-full">
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu button - Fixed */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 md:hidden z-40 p-2 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
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

      {/* Main Content */}
      <div className="md:pl-72">
        <main className="min-h-screen">
          <div className="px-6 md:px-8 py-6">
            <div className="max-w-[1920px] mx-auto">
              {/* Header */}
              <div className="sticky top-0 z-20 bg-white/5 backdrop-blur-md mb-6 -mx-6 px-6 py-4 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">
                    {pathname === '/manager/dashboard' ? 'Overview' :
                     pathname === '/manager/team' ? 'Team Management' :
                     pathname === '/manager/goals' ? 'Goal Setting' :
                     pathname === '/manager/approvals' ? 'Goal Approvals' :
                     pathname === '/manager/reviews' ? 'Performance Reviews' :
                     pathname === '/manager/feedback' ? 'Team Feedback' :
                     pathname === '/manager/reports' ? 'Reports' :
                     pathname === '/manager/schedule' ? 'Review Schedule' :
                     pathname === '/manager/achievements' ? 'Team Achievements' :
                     pathname === '/manager/projects' ? 'Projects' : 'Manager Portal'}
                  </h1>
                  <div className="flex items-center gap-4">
                    <button className="relative p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 group">
                      <Bell className="h-5 w-5" />
                      <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-indigo-500 ring-2 ring-[#020817] group-hover:ring-white/10" />
                    </button>
                    <Avatar className="h-8 w-8 ring-2 ring-indigo-500/30 transition-all duration-300 hover:ring-indigo-500">
                      <AvatarImage src="/avatars/manager.png" />
                      <AvatarFallback className="bg-gradient-to-r from-indigo-500 to-purple-500">MG</AvatarFallback>
                    </Avatar>
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
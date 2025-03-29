"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { 
  Users,
  Settings,
  Shield,
  FileText,
  BarChart2,
  LogOut,
  Menu,
  X,
  Building2,
  UserCog,
  Bell,
  LayoutDashboard,
  Lock,
  Target,
  Database
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
              <span className="text-lg font-bold text-white">A</span>
            </div>
            <div>
              <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">Admin Portal</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1 flex-1">
            <Link href="/admin/dashboard" className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg ${pathname === '/admin/dashboard' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'} transition-all duration-300`}>
              <LayoutDashboard className="h-4 w-4" />
              Overview
            </Link>
            <Link href="/admin/users" className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg ${pathname === '/admin/users' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'} transition-all duration-300`}>
              <Users className="h-4 w-4" />
              User Management
            </Link>
            <Link href="/admin/departments" className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg ${pathname === '/admin/departments' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'} transition-all duration-300`}>
              <Building2 className="h-4 w-4" />
              Departments
            </Link>
            <Link href="/admin/goals" className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg ${pathname === '/admin/goals' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'} transition-all duration-300`}>
              <Target className="h-4 w-4" />
              Performance Goals
            </Link>
            <Link href="/admin/roles" className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg ${pathname === '/admin/roles' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'} transition-all duration-300`}>
              <UserCog className="h-4 w-4" />
              Role Management
            </Link>
            <Link href="/admin/reports" className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg ${pathname === '/admin/reports' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'} transition-all duration-300`}>
              <BarChart2 className="h-4 w-4" />
              Reports & Analytics
            </Link>
            <Link href="/admin/audit" className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg ${pathname === '/admin/audit' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'} transition-all duration-300`}>
              <FileText className="h-4 w-4" />
              Audit Logs
            </Link>
            <Link href="/admin/settings" className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg ${pathname === '/admin/settings' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'} transition-all duration-300`}>
              <Settings className="h-4 w-4" />
              System Settings
            </Link>
            <Link href="/admin/security" className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg ${pathname === '/admin/security' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'} transition-all duration-300`}>
              <Shield className="h-4 w-4" />
              Security
            </Link>
            <Link href="/admin/backup" className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg ${pathname === '/admin/backup' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'} transition-all duration-300`}>
              <Database className="h-4 w-4" />
              Backup & Restore
            </Link>
          </nav>

          {/* User section */}
          <div className="border-t border-white/10 pt-4 mt-4">
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5">
              <Avatar className="h-8 w-8 ring-2 ring-indigo-500/30">
                <AvatarImage src="/avatars/admin.png" />
                <AvatarFallback className="bg-gradient-to-r from-indigo-500 to-purple-500">AD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">Admin User</p>
                <p className="text-xs text-slate-400">admin@company.com</p>
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
                    {pathname === '/admin/dashboard' ? 'Overview' :
                     pathname === '/admin/users' ? 'User Management' :
                     pathname === '/admin/departments' ? 'Departments' :
                     pathname === '/admin/goals' ? 'Performance Goals' :
                     pathname === '/admin/roles' ? 'Role Management' :
                     pathname === '/admin/reports' ? 'Reports & Analytics' :
                     pathname === '/admin/audit' ? 'Audit Logs' :
                     pathname === '/admin/settings' ? 'System Settings' :
                     pathname === '/admin/security' ? 'Security' :
                     pathname === '/admin/backup' ? 'Backup & Restore' : 'Admin Portal'}
                  </h1>
                  <div className="flex items-center gap-4">
                    <button className="relative p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 group">
                      <Bell className="h-5 w-5" />
                      <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-indigo-500 ring-2 ring-[#020817] group-hover:ring-white/10" />
                    </button>
                    <Avatar className="h-8 w-8 ring-2 ring-indigo-500/30 transition-all duration-300 hover:ring-indigo-500">
                      <AvatarImage src="/avatars/admin.png" />
                      <AvatarFallback className="bg-gradient-to-r from-indigo-500 to-purple-500">AD</AvatarFallback>
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
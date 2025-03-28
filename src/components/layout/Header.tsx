"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Home,
  Target,
  MessageSquare,
  BarChart2,
  Settings,
  LogOut,
  HelpCircle
} from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
      <div className="w-full px-6 md:px-8">
        <div className="flex items-center justify-between h-16 max-w-[1920px] mx-auto">
          {/* Logo and Company Name */}
          <Link href="/employee/dashboard" className="flex items-center gap-3 group">
            <div className="transform transition-transform group-hover:scale-105">
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:to-purple-300 transition-all">TecBiz</h1>
              <p className="text-xs text-slate-400">Performance Management</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/employee/dashboard" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-all">
              <Home className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link href="/employee/goals" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-all">
              <Target className="h-4 w-4" />
              <span>Goals</span>
            </Link>
            <Link href="/employee/feedback" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-all">
              <MessageSquare className="h-4 w-4" />
              <span>Feedback</span>
            </Link>
            <Link href="/employee/reports" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-all">
              <BarChart2 className="h-4 w-4" />
              <span>Reports</span>
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-white/10 transition-all">
              <HelpCircle className="h-4 w-4 mr-2" />
              Support
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-white/10 transition-all">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-slate-300 hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-slate-900/95 backdrop-blur-md">
            <nav className="flex flex-col gap-2 max-w-[1920px] mx-auto">
              <Link 
                href="/employee/dashboard" 
                className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/10 rounded-lg group transition-all"
              >
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-purple-500/30">
                  <Home className="h-4 w-4" />
                </div>
                Dashboard
              </Link>
              <Link 
                href="/employee/goals" 
                className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/10 rounded-lg group transition-all"
              >
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-purple-500/30">
                  <Target className="h-4 w-4" />
                </div>
                Goals
              </Link>
              <Link 
                href="/employee/feedback" 
                className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/10 rounded-lg group transition-all"
              >
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-purple-500/30">
                  <MessageSquare className="h-4 w-4" />
                </div>
                Feedback
              </Link>
              <Link 
                href="/employee/reports" 
                className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/10 rounded-lg group transition-all"
              >
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-purple-500/30">
                  <BarChart2 className="h-4 w-4" />
                </div>
                Reports
              </Link>
              <div className="border-t border-white/10 mt-2 pt-2">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 
"use client";

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                <span className="text-lg font-bold text-white">TB</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">TecBiz</h3>
                <p className="text-sm text-slate-400">Performance Management</p>
              </div>
            </div>
            <p className="text-sm text-slate-400">
              Empowering businesses with modern performance management solutions.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="/employee/dashboard" className="block text-sm text-slate-400 hover:text-white transition-colors">
                Dashboard
              </Link>
              <Link href="/employee/goals" className="block text-sm text-slate-400 hover:text-white transition-colors">
                Goal Setting
              </Link>
              <Link href="/employee/feedback" className="block text-sm text-slate-400 hover:text-white transition-colors">
                Feedback
              </Link>
              <Link href="/employee/reports" className="block text-sm text-slate-400 hover:text-white transition-colors">
                Reports
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <nav className="space-y-2">
              <Link href="#" className="block text-sm text-slate-400 hover:text-white transition-colors">
                Help Center
              </Link>
              <Link href="#" className="block text-sm text-slate-400 hover:text-white transition-colors">
                Documentation
              </Link>
              <Link href="#" className="block text-sm text-slate-400 hover:text-white transition-colors">
                API Reference
              </Link>
              <Link href="#" className="block text-sm text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="h-4 w-4 text-indigo-500" />
                <span>support@tecbiz.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="h-4 w-4 text-indigo-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                <span>123 Business Street, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} TecBiz. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
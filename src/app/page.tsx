"use client";

import Link from 'next/link';
import { ArrowRight, Mail, Settings, LogOut, Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
<Header />

      {/* Main Content */}
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <div className="inline-block mb-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg transform transition-transform hover:scale-105">
                  <span className="text-xl font-bold text-white">EP</span>
                </div>
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 sm:text-5xl">
                Employee Performance System
              </h1>
              <p className="mb-8 text-lg text-slate-300 max-w-2xl mx-auto">
                Streamline your performance management process with our comprehensive solution.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all hover:shadow-lg hover:shadow-indigo-500/20">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center mb-3">
                  <span className="text-lg font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Set Goals</h3>
                <p className="text-sm text-slate-300">Define clear objectives and track progress effectively</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all hover:shadow-lg hover:shadow-indigo-500/20">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center mb-3">
                  <span className="text-lg font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Track Progress</h3>
                <p className="text-sm text-slate-300">Monitor achievements and identify areas for improvement</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all hover:shadow-lg hover:shadow-indigo-500/20">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center mb-3">
                  <span className="text-lg font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Get Feedback</h3>
                <p className="text-sm text-slate-300">Receive valuable insights and grow professionally</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/auth/login"
                className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-indigo-500/20 transition-all flex items-center justify-center gap-2"
              >
                Sign In
                <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/auth/register"
                className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/15 transition-all hover:shadow-lg hover:shadow-indigo-500/20"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>

  <Footer />
      
    </div>
  );
}

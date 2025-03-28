import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  LogOut, 
  Target, 
  CheckCircle, 
  Star, 
  MessageSquare, 
  BarChart2,
  Users,
  Settings,
  AlertCircle,
  Home,
  Mail,
  Search
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Overview of your performance and tasks',
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 fixed h-full shadow-xl">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
              <span className="text-lg font-bold text-white">EP</span>
            </div>
            <h1 className="text-lg font-semibold text-white">Performance</h1>
          </div>

          <nav className="space-y-1">
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-white">
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link href="/goals" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-slate-300 hover:bg-white/10 hover:text-white transition-colors">
              <Target className="h-4 w-4" />
              Goal Setting
            </Link>
            <Link href="/approval" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-slate-300 hover:bg-white/10 hover:text-white transition-colors">
              <CheckCircle className="h-4 w-4" />
              Goal Approval
            </Link>
            <Link href="/rating" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-slate-300 hover:bg-white/10 hover:text-white transition-colors">
              <Star className="h-4 w-4" />
              Self Rating
            </Link>
            <Link href="/feedback" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-slate-300 hover:bg-white/10 hover:text-white transition-colors">
              <MessageSquare className="h-4 w-4" />
              Feedback
            </Link>
            <Link href="/reports" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-slate-300 hover:bg-white/10 hover:text-white transition-colors">
              <BarChart2 className="h-4 w-4" />
              Reports
            </Link>
          </nav>
        </div>

        <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-slate-900/90 to-transparent">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm">
            <div className="relative">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                <span className="text-sm font-medium text-white">TecBiz</span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-slate-900" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">TecBiz</p>
              <p className="text-xs text-slate-400 truncate">Senior Manager</p>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-300 hover:text-white hover:bg-white/10">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 pl-64">
        <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <h1 className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  Welcome back, Tecbiz
                </h1>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                  <Search className="h-4 w-4 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="bg-transparent border-none text-sm focus:outline-none text-foreground w-40"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="relative rounded-xl border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600">
                  <Mail className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-[10px] text-white flex items-center justify-center font-medium">
                    3
                  </span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-xl border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600">
                  <Settings className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Metrics */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/60">Pending Tasks</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/60">Completed Goals</p>
                    <p className="text-2xl font-bold">8</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/60">Feedback Given</p>
                    <p className="text-2xl font-bold">24</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Star className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/60">Performance Score</p>
                    <p className="text-2xl font-bold">4.8</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Recent Activities */}
            <div className="col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Target className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">New Goal Added</p>
                        <p className="text-sm text-foreground/60">Improve team collaboration metrics by 25%</p>
                        <p className="text-xs text-foreground/40 mt-1">2 hours ago</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Goal Approved</p>
                        <p className="text-sm text-foreground/60">Q1 Sales Target Achievement</p>
                        <p className="text-xs text-foreground/40 mt-1">Yesterday</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium">New Feedback Received</p>
                        <p className="text-sm text-foreground/60">From Team Lead regarding project completion</p>
                        <p className="text-xs text-foreground/40 mt-1">2 days ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Notifications */}
            <div className="col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Notifications</h2>
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-red-50 border border-red-100">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-red-900">Performance review due in 2 days</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-100">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-yellow-900">Goal setting deadline approaching</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-blue-900">3 new feedback requests</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-green-50 border border-green-100">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-green-900">Monthly report generated</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
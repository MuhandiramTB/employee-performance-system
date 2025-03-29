"use client";

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ArrowUp,
  ArrowDown,
  Target,
  Users,
  Star,
  MessageSquare,
  ChevronRight,
  Calendar
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardEmployee';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Stats Cards */}
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-200">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Goals Completed</p>
                <p className="text-2xl font-semibold text-white mt-1">85%</p>
              </div>
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-emerald-500" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              <ArrowUp className="h-4 w-4 text-emerald-500" />
              <span className="text-sm font-medium text-emerald-500">12%</span>
              <span className="text-sm text-slate-400">from last month</span>
            </div>
          </div>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-200">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Team Members</p>
                <p className="text-2xl font-semibold text-white mt-1">24</p>
              </div>
              <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              <ArrowUp className="h-4 w-4 text-emerald-500" />
              <span className="text-sm font-medium text-emerald-500">4%</span>
              <span className="text-sm text-slate-400">from last month</span>
            </div>
          </div>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-200">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Average Rating</p>
                <p className="text-2xl font-semibold text-white mt-1">4.8</p>
              </div>
              <div className="h-12 w-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                <Star className="h-6 w-6 text-yellow-500" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              <ArrowDown className="h-4 w-4 text-red-500" />
              <span className="text-sm font-medium text-red-500">2%</span>
              <span className="text-sm text-slate-400">from last month</span>
            </div>
          </div>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-200">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Feedback Given</p>
                <p className="text-2xl font-semibold text-white mt-1">156</p>
              </div>
              <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-purple-500" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              <ArrowUp className="h-4 w-4 text-emerald-500" />
              <span className="text-sm font-medium text-emerald-500">8%</span>
              <span className="text-sm text-slate-400">from last month</span>
            </div>
          </div>
        </Card>

        {/* Recent Goals */}
        <Card className="md:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-200">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Recent Goals</h2>
              <Button variant="ghost" className="text-slate-400 hover:text-white">
                View All
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-indigo-500/50 transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Improve Code Quality</h3>
                    <p className="text-sm text-slate-400">Due in 5 days</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-500">In Progress</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-indigo-500/50 transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Complete Project Documentation</h3>
                    <p className="text-sm text-slate-400">Due in 2 days</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-500">Completed</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-indigo-500/50 transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Team Training Session</h3>
                    <p className="text-sm text-slate-400">Due tomorrow</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-500/10 text-red-500">Overdue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Upcoming Reviews */}
        <Card className="md:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-200">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Upcoming Reviews</h2>
              <Button variant="ghost" className="text-slate-400 hover:text-white">
                View All
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-indigo-500/50 transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Q1 Performance Review</h3>
                    <p className="text-sm text-slate-400">March 15, 2025</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-slate-400" />
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-indigo-500/50 transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Project Milestone Review</h3>
                    <p className="text-sm text-slate-400">March 20, 2025</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-slate-400" />
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-indigo-500/50 transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Team Performance Review</h3>
                    <p className="text-sm text-slate-400">March 25, 2025</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-slate-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
} 
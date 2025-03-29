"use client";

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  MessageSquare,
  CheckCircle,
  Clock,
  AlertCircle,
  User,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardManager';

export default function FeedbackPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-200">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Total Feedback</p>
                  <p className="text-2xl font-semibold text-white mt-1">156</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-emerald-500" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-200">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Pending Review</p>
                  <p className="text-2xl font-semibold text-white mt-1">8</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-yellow-500" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-200">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Completed</p>
                  <p className="text-2xl font-semibold text-white mt-1">142</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-200">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Overdue</p>
                  <p className="text-2xl font-semibold text-white mt-1">6</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-red-500" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Feedback Items */}
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-200">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-white mb-6">Recent Feedback</h2>
            <div className="space-y-4">
              {/* Feedback Item */}
              <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-indigo-500/50 transition-all duration-200">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">John Doe</h3>
                        <p className="text-sm text-slate-400">Team Lead • 2 hours ago</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-500">Pending Response</span>
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Great work on the recent project! Your attention to detail and problem-solving skills were exceptional. Keep up the excellent work.</p>
                  </div>

                  <div className="space-y-3">
                    <Textarea 
                      placeholder="Add your response..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent min-h-[80px]"
                    />
                    <div className="flex justify-end">
                      <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600">
                        Send Response
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-indigo-500/50 transition-all duration-200">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Jane Smith</h3>
                        <p className="text-sm text-slate-400">Project Manager • 5 hours ago</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-500">Responded</span>
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Your leadership in the team training sessions has been invaluable. The team&apos;s productivity has significantly improved thanks to your efforts.</p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <p className="text-sm text-slate-400">Thank you for the feedback! I&apos;m glad I could contribute to the team&apos;s growth.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-white/10">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-400">Page 1 of 3</span>
              </div>
              <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-white/10">
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}

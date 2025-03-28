"use client";

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  CheckCircle,
  Clock,
  Star,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function GoalApprovalPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                  <p className="text-sm text-slate-400">Approved</p>
                  <p className="text-2xl font-semibold text-white mt-1">24</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-200">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Needs Revision</p>
                  <p className="text-2xl font-semibold text-white mt-1">3</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <Star className="h-6 w-6 text-red-500" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-200">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Team Members</p>
                  <p className="text-2xl font-semibold text-white mt-1">12</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Star className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Goals for Review */}
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-200">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-white mb-6">Goals for Review</h2>
            <div className="space-y-4">
              {/* Goal Review Item */}
              <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-indigo-500/50 transition-all duration-200">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
                        <Star className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">John Doe</h3>
                        <p className="text-sm text-slate-400">Submitted 2 hours ago</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-500">Pending Review</span>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-2">Improve Code Quality</h4>
                    <p className="text-sm text-slate-400">Implement better testing practices and increase code coverage to 80% across all projects.</p>
                  </div>

                  <div className="space-y-3">
                    <Textarea 
                      placeholder="Add your feedback..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent min-h-[80px]"
                    />
                    <div className="flex items-center justify-end gap-3">
                      <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-white/10">
                        Request Revision
                      </Button>
                      <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600">
                        Approve Goal
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
                        <Star className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Jane Smith</h3>
                        <p className="text-sm text-slate-400">Submitted 5 hours ago</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-500">Pending Review</span>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-2">Team Training Program</h4>
                    <p className="text-sm text-slate-400">Develop and conduct monthly training sessions on emerging technologies for the development team.</p>
                  </div>

                  <div className="space-y-3">
                    <Textarea 
                      placeholder="Add your feedback..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent min-h-[80px]"
                    />
                    <div className="flex items-center justify-end gap-3">
                      <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-white/10">
                        Request Revision
                      </Button>
                      <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600">
                        Approve Goal
                      </Button>
                    </div>
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

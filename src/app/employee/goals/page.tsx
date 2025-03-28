"use client";

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Bell, 
  Filter, 
  ArrowUpDown,
  MoreVertical,
  User,
  Plus,
  Home,
  Target,
  CheckCircle,
  Star,
  MessageSquare,
  BarChart2,
  Settings,
  LogOut,
  Menu,
  X,
  Users,
  Calendar,
  Edit2,
  Trash2,
  XCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import Link from 'next/link';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function GoalsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNewGoalForm, setShowNewGoalForm] = useState(false);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* New Goal Form */}
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-200">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Set New Goal</h2>
              <Button
                onClick={() => setShowNewGoalForm(!showNewGoalForm)}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Goal
              </Button>
            </div>

            {showNewGoalForm && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Goal Title</label>
                  <Input 
                    type="text"
                    placeholder="Enter goal title"
                    className="w-full bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Description</label>
                  <Textarea 
                    placeholder="Describe your goal in detail"
                    className="w-full bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent min-h-[100px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Category</label>
                    <Select>
                      <SelectTrigger className="w-full bg-white/5 border border-white/10 text-white">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="personal">Personal Development</SelectItem>
                        <SelectItem value="professional">Professional Growth</SelectItem>
                        <SelectItem value="team">Team Collaboration</SelectItem>
                        <SelectItem value="project">Project Specific</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Priority</label>
                    <Select>
                      <SelectTrigger className="w-full bg-white/5 border border-white/10 text-white">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Start Date</label>
                    <div className="relative">
                      <Input 
                        type="text"
                        placeholder="yyyy-mm-dd"
                        className="w-full bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                      <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-slate-400" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Due Date</label>
                    <div className="relative">
                      <Input 
                        type="text"
                        placeholder="yyyy-mm-dd"
                        className="w-full bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                      <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-slate-400" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <Button
                    variant="ghost"
                    onClick={() => setShowNewGoalForm(false)}
                    className="text-slate-400 hover:text-white hover:bg-white/10"
                  >
                    Cancel
                  </Button>
                  <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600">
                    Save Goal
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Current Goals */}
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-200">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-white mb-6">Current Goals</h2>
            <div className="space-y-4">
              {/* Goal Item */}
              <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-indigo-500/50 transition-all duration-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="text-white font-medium">Improve Code Quality</h3>
                        <p className="text-sm text-slate-400 mt-1">Implement better testing practices and increase code coverage to 80%</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-500">In Progress</span>
                          <span className="text-xs text-slate-400">Due in 5 days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/10">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/10">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-indigo-500/50 transition-all duration-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="text-white font-medium">Complete Project Documentation</h3>
                        <p className="text-sm text-slate-400 mt-1">Update all technical documentation and create user guides</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-500">Completed</span>
                          <span className="text-xs text-slate-400">Due in 2 days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/10">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/10">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-indigo-500/50 transition-all duration-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="text-white font-medium">Team Training Session</h3>
                        <p className="text-sm text-slate-400 mt-1">Conduct training session on new development tools</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-500/10 text-red-500">Overdue</span>
                          <span className="text-xs text-slate-400">Due yesterday</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/10">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/10">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Goal Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-200">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Completed</p>
                  <p className="text-2xl font-semibold text-white mt-1">12</p>
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
                  <p className="text-sm text-slate-400">In Progress</p>
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
                  <p className="text-sm text-slate-400">Not Started</p>
                  <p className="text-2xl font-semibold text-white mt-1">5</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <XCircle className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-200">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Overdue</p>
                  <p className="text-2xl font-semibold text-white mt-1">2</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-red-500" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
} 
"use client";

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Calendar,
  Eye,
  Download,
  LineChart,
  Check
} from 'lucide-react';
import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function ReportsPage() {
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([]);

  // Toggle metric selection
  const toggleMetric = (metric: string) => {
    setSelectedMetrics(prev => 
      prev.includes(metric) 
        ? prev.filter(m => m !== metric)
        : [...prev, metric]
    );
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Report Generation Options */}
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-200">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-white mb-6">Report Generation Options</h2>
            <div className="space-y-6">
              {/* Date Range */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Date Range</label>
                <div className="flex items-center gap-3">
                  <div className="relative flex-1">
                    <Input 
                      type="text"
                      placeholder="yyyy-mm-dd"
                      className="w-full bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-slate-400" />
                  </div>
                  <span className="text-slate-400">to</span>
                  <div className="relative flex-1">
                    <Input 
                      type="text"
                      placeholder="yyyy-mm-dd"
                      className="w-full bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Department */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Department</label>
                <Select>
                  <SelectTrigger className="w-full bg-white/5 border border-white/10 text-white">
                    <SelectValue placeholder="All Departments" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Performance Metrics */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-slate-300">Performance Metrics</label>
                <div className="space-y-2">
                  {/* Custom Checkbox Items */}
                  <button
                    onClick={() => toggleMetric('productivity')}
                    className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className={`h-5 w-5 rounded border ${
                      selectedMetrics.includes('productivity')
                        ? 'bg-indigo-500 border-indigo-500'
                        : 'border-white/10'
                    } flex items-center justify-center`}>
                      {selectedMetrics.includes('productivity') && (
                        <Check className="h-3 w-3 text-white" />
                      )}
                    </div>
                    <span className="text-sm text-slate-300">Productivity</span>
                  </button>

                  <button
                    onClick={() => toggleMetric('attendance')}
                    className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className={`h-5 w-5 rounded border ${
                      selectedMetrics.includes('attendance')
                        ? 'bg-indigo-500 border-indigo-500'
                        : 'border-white/10'
                    } flex items-center justify-center`}>
                      {selectedMetrics.includes('attendance') && (
                        <Check className="h-3 w-3 text-white" />
                      )}
                    </div>
                    <span className="text-sm text-slate-300">Attendance</span>
                  </button>

                  <button
                    onClick={() => toggleMetric('goals')}
                    className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className={`h-5 w-5 rounded border ${
                      selectedMetrics.includes('goals')
                        ? 'bg-indigo-500 border-indigo-500'
                        : 'border-white/10'
                    } flex items-center justify-center`}>
                      {selectedMetrics.includes('goals') && (
                        <Check className="h-3 w-3 text-white" />
                      )}
                    </div>
                    <span className="text-sm text-slate-300">Goal Achievement</span>
                  </button>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600">
                Generate Report
              </Button>
            </div>
          </div>
        </Card>

        {/* Available Reports */}
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-200">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-white mb-6">Available Reports</h2>
            <div className="space-y-4">
              {/* Report Items */}
              <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-indigo-500/50 transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Q1 Performance Report</h3>
                    <p className="text-sm text-slate-400">Generated on Mar 15, 2025</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/10">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/10">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-indigo-500/50 transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Engineering Team Report</h3>
                    <p className="text-sm text-slate-400">Generated on Mar 10, 2025</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/10">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/10">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-indigo-500/50 transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Sales Team Report</h3>
                    <p className="text-sm text-slate-400">Generated on Mar 5, 2025</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/10">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/10">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Report Preview */}
        <Card className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-200">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-white mb-6">Report Preview</h2>
            <div className="aspect-[16/9] bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
              <LineChart className="h-16 w-16 text-slate-400" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <p className="text-sm text-slate-400">Average Productivity</p>
                <p className="text-2xl font-semibold text-white mt-1">87%</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <p className="text-sm text-slate-400">Attendance Rate</p>
                <p className="text-2xl font-semibold text-white mt-1">95%</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <p className="text-sm text-slate-400">Goals Completed</p>
                <p className="text-2xl font-semibold text-white mt-1">92%</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}

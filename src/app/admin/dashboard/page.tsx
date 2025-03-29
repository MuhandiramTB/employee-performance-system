"use client";

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Users,
  MoreVertical,
  Bell,
  Shield,
  UserPlus,
  UserMinus,
  Settings,
  Lock,
  Key,
  Search
} from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';
import DashboardAdmin from '@/components/layout/DashboardAdmin';

export default function AdminDashboardPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  return (
    <DashboardAdmin>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Management */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">
              User Management
            </h2>
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant="outline" 
                className="text-slate-400 border-white/10 hover:bg-white/5 hover:text-white transition-all duration-300 hover:border-indigo-500/50"
              >
                <UserMinus className="w-4 h-4" />
              </Button>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
              >
                <UserPlus className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input 
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/5 border-white/10 text-white placeholder:text-slate-400 pl-10 transition-all duration-300 focus:bg-white/10 focus:border-indigo-500/50"
            />
          </div>
          <div className="space-y-3">
            {[
              { name: 'Sarah Wilson', role: 'Admin', image: '/avatars/sarah.png', status: 'Active' },
              { name: 'Mike Johnson', role: 'User', image: '/avatars/mike.png', status: 'Active' },
              { name: 'Alex Thompson', role: 'Manager', image: '/avatars/alex.png', status: 'Away' }
            ].map((user, index) => (
              <div 
                key={index} 
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10 ring-2 ring-indigo-500/30 transition-all duration-300 group-hover:ring-indigo-500/50">
                        <AvatarImage src={user.image} />
                        <AvatarFallback className="bg-gradient-to-r from-indigo-500 to-purple-500">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-sm font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-200 transition-all duration-300">
                          {user.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-slate-400">{user.role}</p>
                          <span className={`text-xs px-2 py-0.5 rounded-full transition-all duration-300 ${
                            user.status === 'Active' 
                              ? 'bg-emerald-500/10 text-emerald-300' 
                              : 'bg-amber-500/10 text-amber-300'
                          }`}>
                            {user.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 hover:shadow-lg">
                        <Key className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 hover:shadow-lg">
                        <Shield className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 hover:shadow-lg">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Settings */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">
              System Settings
            </h2>
            <Button 
              size="sm" 
              variant="outline" 
              className="text-slate-400 border-white/10 hover:bg-white/5 hover:text-white transition-all duration-300 hover:border-indigo-500/50"
            >
              <Settings className="w-4 h-4" />
            </Button>
          </div>
          <Card className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200 mb-4">
                  General Settings
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-400 block mb-1.5">System Name</label>
                    <Input 
                      defaultValue="Admin Portal" 
                      className="bg-white/5 border-white/10 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 focus:bg-white/10" 
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 block mb-1.5">Time Zone</label>
                    <Select defaultValue="utc">
                      <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 focus:bg-white/10">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900/95 backdrop-blur-xl border-white/10">
                        <SelectItem value="utc" className="text-white hover:bg-white/10">UTC (00:00)</SelectItem>
                        <SelectItem value="est" className="text-white hover:bg-white/10">EST (-05:00)</SelectItem>
                        <SelectItem value="pst" className="text-white hover:bg-white/10">PST (-08:00)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200 mb-4">
                  Security Settings
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between group p-3 rounded-lg border border-white/5 hover:border-indigo-500/30 transition-all duration-300">
                    <div>
                      <p className="text-sm font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-200">
                        Two-Factor Authentication
                      </p>
                      <p className="text-sm text-slate-400">Require 2FA for all admin accounts</p>
                    </div>
                    <Switch
                      checked={twoFactorEnabled}
                      onCheckedChange={setTwoFactorEnabled}
                      className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-indigo-500 data-[state=checked]:to-purple-500"
                    />
                  </div>
                  <div className="flex items-center justify-between group p-3 rounded-lg border border-white/5 hover:border-indigo-500/30 transition-all duration-300">
                    <div>
                      <p className="text-sm font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-200">
                        Password Policy
                      </p>
                      <p className="text-sm text-slate-400">Enforce strong password requirements</p>
                    </div>
                    <Switch
                      checked={true}
                      className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-indigo-500 data-[state=checked]:to-purple-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Audit Logs */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">
              Audit Logs
            </h2>
            <Button 
              size="sm" 
              variant="outline" 
              className="text-slate-400 border-white/10 hover:bg-white/5 hover:text-white transition-all duration-300 hover:border-indigo-500/50"
            >
              <Lock className="w-4 h-4" />
            </Button>
          </div>
          <Card className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
            <div className="p-6 space-y-4">
              {[
                { action: 'User account modified', time: '2025-03-15 14:30:22', type: 'Security' },
                { action: 'System settings updated', time: '2025-03-15 13:45:10', type: 'System' },
                { action: 'New user created', time: '2025-03-15 11:20:05', type: 'User' },
                { action: 'Password policy updated', time: '2025-03-15 10:15:00', type: 'Security' }
              ].map((log, index) => (
                <div 
                  key={index} 
                  className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:border-indigo-500/50 transition-all duration-300 p-4 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-200">
                          {log.action}
                        </p>
                        <span className={`text-xs px-2 py-0.5 rounded-full transition-all duration-300 ${
                          log.type === 'Security' 
                            ? 'bg-rose-500/10 text-rose-300' 
                            : log.type === 'System'
                            ? 'bg-sky-500/10 text-sky-300'
                            : 'bg-emerald-500/10 text-emerald-300'
                        }`}>
                          {log.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">{log.time}</p>
                    </div>
                  </div>
                </div>
              ))}
              <Button 
                variant="ghost" 
                className="w-full text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                View All Logs
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </DashboardAdmin>
  );
} 
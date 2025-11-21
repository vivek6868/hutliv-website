'use client'

import { 
  Search, 
  Bell, 
  Settings, 
  User, 
  LayoutDashboard, 
  Users, 
  Clock, 
  FileText, 
  Briefcase, 
  Receipt, 
  TrendingUp,
  ChevronDown,
  MoreVertical,
  CheckCircle,
  AlertCircle,
  Calendar
} from 'lucide-react'

export default function DashboardMockup() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="relative bg-[#f7f7f9] rounded-xl border border-gray-200 overflow-hidden shadow-2xl" style={{ aspectRatio: '16/9' }}>
        {/* Top Navigation Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">H</span>
              </div>
              <span className="text-gray-900 font-semibold text-sm">Hutliv</span>
            </div>
            
            <div className="flex-1 max-w-md ml-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search leads, contacts, jobs..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors">
              <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="flex h-[calc(100%-57px)]">
          {/* Left Sidebar */}
          <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
            <nav className="flex-1 px-3 py-4 space-y-1">
              <a href="#" className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium">
                <LayoutDashboard className="w-5 h-5" />
                <span className="text-sm">Dashboard</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Users className="w-5 h-5" />
                <span className="text-sm">Leads</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Clock className="w-5 h-5" />
                <span className="text-sm">Follow-ups</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Users className="w-5 h-5" />
                <span className="text-sm">Contacts</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Briefcase className="w-5 h-5" />
                <span className="text-sm">Jobs</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <FileText className="w-5 h-5" />
                <span className="text-sm">Quotes</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Receipt className="w-5 h-5" />
                <span className="text-sm">Invoices</span>
              </a>
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto bg-[#f7f7f9] p-6">
            <div className="max-w-7xl mx-auto space-y-6">
              {/* Page Header */}
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">Dashboard</h1>
                <p className="text-sm text-gray-500">Welcome back! Here's what's happening with your business.</p>
              </div>

              {/* Metric Cards */}
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">New Leads Today</span>
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">47</div>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-xs font-medium text-emerald-600">+12% from yesterday</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Hot Leads</span>
                    <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">23</div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-gray-500">Requires immediate attention</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Follow-ups Due</span>
                    <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-amber-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">18</div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-gray-500">Scheduled for today</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Conversion Rate</span>
                    <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">34%</div>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-xs font-medium text-emerald-600">+5% this week</span>
                  </div>
                </div>
              </div>

              {/* Chart and Leads Table Row */}
              <div className="grid grid-cols-3 gap-4">
                {/* Lead Flow Chart */}
                <div className="col-span-2 bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-gray-900">Lead Flow (last 7 days)</h3>
                    <button className="text-xs text-gray-600 hover:text-gray-900 font-medium">View report</button>
                  </div>
                  <div className="h-48 flex items-end justify-between gap-2">
                    {[65, 78, 52, 89, 71, 95, 82].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center group">
                        <div className="w-full relative">
                          <div 
                            className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t transition-all group-hover:from-blue-700 group-hover:to-blue-500"
                            style={{ height: `${height}%` }}
                          ></div>
                          <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
                              {height} leads
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500 mt-2 font-medium">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Hutliv Pro Overview</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-gray-600">Active Jobs</span>
                        <span className="text-sm font-semibold text-gray-900">12</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-gray-600">Site Visits</span>
                        <span className="text-sm font-semibold text-gray-900">8</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-gray-600">Quotes Sent</span>
                        <span className="text-sm font-semibold text-gray-900">15</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-gray-600">Invoices Paid</span>
                        <span className="text-sm font-semibold text-gray-900">$24.5K</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leads Table */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-900">Recent Leads</h3>
                  <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">View all</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                        <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Company</th>
                        <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                        <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Source</th>
                        <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Last Contact</th>
                        <th className="px-5 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[
                        { name: 'Sarah Chen', company: 'Tech Solutions Inc.', status: 'Hot', source: 'Website', time: '2m ago', color: 'red' },
                        { name: 'Mike Johnson', company: 'Design Studio', status: 'Warm', source: 'Referral', time: '15m ago', color: 'amber' },
                        { name: 'Emma Davis', company: 'Creative Agency', status: 'Hot', source: 'LinkedIn', time: '1h ago', color: 'red' },
                        { name: 'David Wilson', company: 'Marketing Pro', status: 'Cold', source: 'Email', time: '3h ago', color: 'blue' },
                        { name: 'Lisa Anderson', company: 'Business Corp', status: 'Warm', source: 'Website', time: '5h ago', color: 'amber' },
                      ].map((lead, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-semibold">{lead.name.split(' ').map(n => n[0]).join('')}</span>
                              </div>
                              <span className="text-sm font-medium text-gray-900">{lead.name}</span>
                            </div>
                          </td>
                          <td className="px-5 py-4">
                            <span className="text-sm text-gray-700">{lead.company}</span>
                          </td>
                          <td className="px-5 py-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              lead.status === 'Hot' ? 'bg-red-100 text-red-800' :
                              lead.status === 'Warm' ? 'bg-amber-100 text-amber-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {lead.status}
                            </span>
                          </td>
                          <td className="px-5 py-4">
                            <span className="text-sm text-gray-600">{lead.source}</span>
                          </td>
                          <td className="px-5 py-4">
                            <span className="text-sm text-gray-500">{lead.time}</span>
                          </td>
                          <td className="px-5 py-4 text-right">
                            <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Hutliv Pro Jobs Section */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { 
                    title: 'Interior Design - Downtown Office', 
                    client: 'Tech Corp Inc.', 
                    status: 'Active', 
                    progress: 75,
                    value: '$12,500',
                    tags: ['Design', 'Paint'],
                    color: 'emerald'
                  },
                  { 
                    title: 'Residential Paint Job', 
                    client: 'Smith Residence', 
                    status: 'Quote', 
                    progress: 0,
                    value: '$3,200',
                    tags: ['Quote'],
                    color: 'blue'
                  },
                ].map((project, i) => (
                  <div key={i} className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">{project.title}</h4>
                        <p className="text-xs text-gray-500 mb-2">{project.client}</p>
                        <div className="text-sm font-bold text-gray-900">{project.value}</div>
                      </div>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                        project.status === 'Active' 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    {project.progress > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-medium text-gray-600">Progress</span>
                          <span className="text-xs font-semibold text-gray-900">{project.progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              project.color === 'emerald' ? 'bg-emerald-500' : 'bg-blue-500'
                            }`}
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tagI) => (
                        <span key={tagI} className="text-xs font-medium px-2 py-0.5 rounded bg-gray-50 text-gray-600 border border-gray-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

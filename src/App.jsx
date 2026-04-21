import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('overview')
  const [darkMode, setDarkMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [notifications, setNotifications] = useState(3)

  const stats = [
    { label: 'Total Revenue', value: '$45,231', change: '+12.5%', positive: true, progress: 75 },
    { label: 'Active Users', value: '2,543', change: '+8.2%', positive: true, progress: 60 },
    { label: 'Conversion Rate', value: '3.2%', change: '-2.1%', positive: false, progress: 45 },
    { label: 'Avg. Order Value', value: '$128', change: '+5.4%', positive: true, progress: 85 }
  ]

  const chartData = [
    { name: 'Jan', sales: 4000, revenue: 2400 },
    { name: 'Feb', sales: 3000, revenue: 1398 },
    { name: 'Mar', sales: 2000, revenue: 9800 },
    { name: 'Apr', sales: 2780, revenue: 3908 },
    { name: 'May', sales: 1890, revenue: 4800 },
    { name: 'Jun', sales: 2390, revenue: 3800 }
  ]

  const pieData = [
    { name: 'Products', value: 45, color: '#3b82f6' },
    { name: 'Services', value: 30, color: '#10b981' },
    { name: 'Subscriptions', value: 15, color: '#f59e0b' },
    { name: 'Other', value: 10, color: '#ef4444' }
  ]

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', role: 'Admin', joinDate: '2024-01-15' },
    { id: 2, name: 'Sarah Smith', email: 'sarah@example.com', status: 'active', role: 'User', joinDate: '2024-02-20' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', status: 'inactive', role: 'User', joinDate: '2024-03-10' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', status: 'active', role: 'Moderator', joinDate: '2024-01-25' },
    { id: 5, name: 'Alex Wilson', email: 'alex@example.com', status: 'active', role: 'User', joinDate: '2024-04-05' }
  ]

  const activities = [
    { user: 'John Doe', action: 'completed purchase', item: 'Premium Plan', time: '2 minutes ago', type: 'success' },
    { user: 'Sarah Smith', action: 'signed up', item: 'New account', time: '15 minutes ago', type: 'info' },
    { user: 'Mike Johnson', action: 'updated profile', item: 'Settings changed', time: '1 hour ago', type: 'warning' },
    { user: 'Emily Davis', action: 'left review', item: '5 stars', time: '2 hours ago', type: 'success' },
    { user: 'Alex Wilson', action: 'reported issue', item: 'Bug #123', time: '3 hours ago', type: 'error' }
  ]

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'users', label: 'Users', icon: '👥' },
    { id: 'products', label: 'Products', icon: '📦' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ]

  const analyticsData = {
    traffic: [
      { date: '2024-01-01', visitors: 1200, pageViews: 3400, bounceRate: 45 },
      { date: '2024-01-02', visitors: 1350, pageViews: 3800, bounceRate: 42 },
      { date: '2024-01-03', visitors: 1100, pageViews: 3100, bounceRate: 48 },
      { date: '2024-01-04', visitors: 1450, pageViews: 4200, bounceRate: 40 },
      { date: '2024-01-05', visitors: 1600, pageViews: 4600, bounceRate: 38 },
      { date: '2024-01-06', visitors: 1300, pageViews: 3700, bounceRate: 44 },
      { date: '2024-01-07', visitors: 1550, pageViews: 4400, bounceRate: 39 }
    ],
    devices: [
      { type: 'Desktop', users: 45, percentage: 45, color: '#3b82f6' },
      { type: 'Mobile', users: 35, percentage: 35, color: '#10b981' },
      { type: 'Tablet', users: 20, percentage: 20, color: '#f59e0b' }
    ],
    topPages: [
      { page: '/dashboard', views: 5432, avgTime: '3:45', bounceRate: 32 },
      { page: '/products', views: 4321, avgTime: '2:30', bounceRate: 28 },
      { page: '/analytics', views: 3210, avgTime: '4:15', bounceRate: 35 },
      { page: '/users', views: 2876, avgTime: '2:10', bounceRate: 42 },
      { page: '/settings', views: 1543, avgTime: '1:45', bounceRate: 48 }
    ],
    conversionFunnel: [
      { stage: 'Visitors', count: 10000, percentage: 100, color: '#3b82f6' },
      { stage: 'Sign-ups', count: 2500, percentage: 25, color: '#10b981' },
      { stage: 'Active Users', count: 1500, percentage: 15, color: '#f59e0b' },
      { stage: 'Paying Customers', count: 750, percentage: 7.5, color: '#ef4444' }
    ]
  }

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const bgColor = darkMode ? '#0f172a' : '#f8fafc'
  const sidebarBg = darkMode ? '#1e293b' : '#1e293b'
  const cardBg = darkMode ? '#1e293b' : 'white'
  const textColor = darkMode ? '#f1f5f9' : '#1e293b'
  const subTextColor = darkMode ? '#94a3b8' : '#64748b'

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: bgColor, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Sidebar */}
      <div style={{ width: '250px', backgroundColor: sidebarBg, color: 'white', padding: '20px' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '28px' }}>🚀</span>
          Dashboard
        </div>
        <nav>
          {menuItems.map(item => (
            <div
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                padding: '12px 16px',
                marginBottom: '8px',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: activeTab === item.id ? '#3b82f6' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== item.id) e.target.style.backgroundColor = '#334155'
              }}
              onMouseLeave={(e) => {
                if (activeTab !== item.id) e.target.style.backgroundColor = 'transparent'
              }}
            >
              <span style={{ fontSize: '18px' }}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, overflow: 'auto' }}>
        {/* Header */}
        <div style={{ backgroundColor: cardBg, padding: '20px 30px', borderBottom: darkMode ? '1px solid #334155' : '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '28px', color: textColor, fontWeight: '600' }}>Dashboard Overview</h1>
            <p style={{ margin: '5px 0 0 0', color: subTextColor }}>Welcome back! Here's what's happening today.</p>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: '10px 15px',
                backgroundColor: darkMode ? '#334155' : '#f1f5f9',
                border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: '14px',
                color: textColor,
                width: '200px'
              }}
            />
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                padding: '10px 15px',
                backgroundColor: darkMode ? '#334155' : '#f1f5f9',
                border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              {darkMode ? 'ðŸŒ‘' : 'ðŸŒž'}
            </button>
            <div style={{ position: 'relative' }}>
              <button style={{
                padding: '10px 15px',
                backgroundColor: darkMode ? '#334155' : '#f1f5f9',
                border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px'
              }}>
                ðŸ“¨
              </button>
              {notifications > 0 && (
                <div style={{
                  position: 'absolute',
                  top: '-5px',
                  right: '-5px',
                  backgroundColor: '#ef4444',
                  color: 'white',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {notifications}
                </div>
              )}
            </div>
            <button style={{
              padding: '10px 20px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              â New Report
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{ padding: '30px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
            {stats.map((stat, index) => (
              <div key={index} style={{
                backgroundColor: cardBg,
                padding: '24px',
                borderRadius: '12px',
                boxShadow: darkMode ? '0 1px 3px rgba(0,0,0,0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
                border: darkMode ? '1px solid #334155' : '1px solid #e2e8f0'
              }}>
                <div style={{ color: subTextColor, fontSize: '14px', marginBottom: '8px' }}>{stat.label}</div>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: textColor, marginBottom: '8px' }}>{stat.value}</div>
                <div style={{ fontSize: '14px', color: stat.positive ? '#10b981' : '#ef4444', fontWeight: '500', marginBottom: '12px' }}>
                  {stat.positive ? '' : ''} {stat.change} from last month
                </div>
                <div style={{ backgroundColor: darkMode ? '#334155' : '#e2e8f0', borderRadius: '4px', height: '8px', overflow: 'hidden' }}>
                  <div style={{
                    backgroundColor: stat.positive ? '#10b981' : '#ef4444',
                    height: '100%',
                    width: `${stat.progress}%`,
                    transition: 'width 0.3s ease'
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* Charts and Activity */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginBottom: '30px' }}>
            {/* Chart */}
            <div style={{
              backgroundColor: cardBg,
              padding: '24px',
              borderRadius: '12px',
              boxShadow: darkMode ? '0 1px 3px rgba(0,0,0,0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
              border: darkMode ? '1px solid #334155' : '1px solid #e2e8f0'
            }}>
              <h3 style={{ margin: '0 0 20px 0', color: textColor, fontSize: '18px' }}>Revenue Overview</h3>
              <div style={{ height: '300px', display: 'flex', alignItems: 'flex-end', gap: '15px' }}>
                {chartData.map((item, index) => (
                  <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{
                      width: '100%',
                      backgroundColor: '#3b82f6',
                      borderRadius: '4px 4px 0 0',
                      height: `${(item.revenue / 10000) * 250}px`,
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '-25px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '12px',
                        color: subTextColor,
                        fontWeight: '500'
                      }}>
                        ${item.revenue}
                      </div>
                    </div>
                    <div style={{ marginTop: '8px', fontSize: '12px', color: subTextColor }}>{item.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pie Chart */}
            <div style={{
              backgroundColor: cardBg,
              padding: '24px',
              borderRadius: '12px',
              boxShadow: darkMode ? '0 1px 3px rgba(0,0,0,0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
              border: darkMode ? '1px solid #334155' : '1px solid #e2e8f0'
            }}>
              <h3 style={{ margin: '0 0 20px 0', color: textColor, fontSize: '18px' }}>Revenue Breakdown</h3>
              <div style={{ height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: `conic-gradient(${pieData.map(item => `${item.color} ${item.value}deg`).join(', ')})` }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {pieData.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '12px', height: '12px', backgroundColor: item.color, borderRadius: '2px' }} />
                    <span style={{ fontSize: '14px', color: textColor }}>{item.name}: {item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {activeTab === 'overview' && (
            <>
              {/* Activity Feed and Users Table */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
                {/* Activity Feed */}
                <div style={{
                  backgroundColor: cardBg,
                  padding: '24px',
                  borderRadius: '12px',
                  boxShadow: darkMode ? '0 1px 3px rgba(0,0,0,0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
                  border: darkMode ? '1px solid #334155' : '1px solid #e2e8f0'
                }}>
                  <h3 style={{ margin: '0 0 20px 0', color: textColor, fontSize: '18px' }}>Recent Activity</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {activities.map((activity, index) => (
                      <div key={index} style={{
                        padding: '12px',
                        backgroundColor: darkMode ? '#334155' : '#f8fafc',
                        borderRadius: '8px',
                        borderLeft: `3px solid ${activity.type === 'success' ? '#10b981' : activity.type === 'error' ? '#ef4444' : activity.type === 'warning' ? '#f59e0b' : '#3b82f6'}`
                      }}>
                        <div style={{ fontWeight: '500', color: textColor, marginBottom: '4px' }}>
                          {activity.user} {activity.action}
                        </div>
                        <div style={{ fontSize: '14px', color: subTextColor, marginBottom: '4px' }}>
                          {activity.item}
                        </div>
                        <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                          {activity.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Users Table */}
                <div style={{
                  backgroundColor: cardBg,
                  padding: '24px',
                  borderRadius: '12px',
                  boxShadow: darkMode ? '0 1px 3px rgba(0,0,0,0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
                  border: darkMode ? '1px solid #334155' : '1px solid #e2e8f0'
                }}>
                  <h3 style={{ margin: '0 0 20px 0', color: textColor, fontSize: '18px' }}>User Management</h3>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ borderBottom: darkMode ? '1px solid #334155' : '1px solid #e2e8f0' }}>
                          <th style={{ padding: '12px', textAlign: 'left', color: subTextColor, fontSize: '14px', fontWeight: '600' }}>Name</th>
                          <th style={{ padding: '12px', textAlign: 'left', color: subTextColor, fontSize: '14px', fontWeight: '600' }}>Email</th>
                          <th style={{ padding: '12px', textAlign: 'left', color: subTextColor, fontSize: '14px', fontWeight: '600' }}>Status</th>
                          <th style={{ padding: '12px', textAlign: 'left', color: subTextColor, fontSize: '14px', fontWeight: '600' }}>Role</th>
                          <th style={{ padding: '12px', textAlign: 'left', color: subTextColor, fontSize: '14px', fontWeight: '600' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredUsers.map((user, index) => (
                          <tr key={user.id} style={{ borderBottom: darkMode ? '1px solid #334155' : '1px solid #e2e8f0' }}>
                            <td style={{ padding: '12px', color: textColor, fontSize: '14px' }}>{user.name}</td>
                            <td style={{ padding: '12px', color: subTextColor, fontSize: '14px' }}>{user.email}</td>
                            <td style={{ padding: '12px' }}>
                              <span style={{
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontSize: '12px',
                                fontWeight: '500',
                                backgroundColor: user.status === 'active' ? '#dcfce7' : '#fee2e2',
                                color: user.status === 'active' ? '#166534' : '#991b1b'
                              }}>
                                {user.status}
                              </span>
                            </td>
                            <td style={{ padding: '12px', color: textColor, fontSize: '14px' }}>{user.role}</td>
                            <td style={{ padding: '12px' }}>
                              <button style={{
                                padding: '6px 12px',
                                backgroundColor: '#3b82f6',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '12px',
                                marginRight: '8px'
                              }}>
                                Edit
                              </button>
                              <button style={{
                                padding: '6px 12px',
                                backgroundColor: '#ef4444',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '12px'
                              }}>
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'analytics' && (
            <>
              {/* Analytics Page */}
              <div style={{ display: 'grid', gap: '30px' }}>
                {/* Traffic Overview */}
                <div style={{
                  backgroundColor: cardBg,
                  padding: '24px',
                  borderRadius: '12px',
                  boxShadow: darkMode ? '0 1px 3px rgba(0,0,0,0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
                  border: darkMode ? '1px solid #334155' : '1px solid #e2e8f0'
                }}>
                  <h3 style={{ margin: '0 0 20px 0', color: textColor, fontSize: '20px' }}>Traffic Overview</h3>
                  <div style={{ height: '300px', display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
                    {analyticsData.traffic.map((day, index) => (
                      <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{
                          width: '100%',
                          backgroundColor: '#3b82f6',
                          borderRadius: '4px 4px 0 0',
                          height: `${(day.visitors / 2000) * 250}px`,
                          position: 'relative'
                        }}>
                          <div style={{
                            position: 'absolute',
                            top: '-25px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            fontSize: '11px',
                            color: subTextColor,
                            fontWeight: '500'
                          }}>
                            {day.visitors}
                          </div>
                        </div>
                        <div style={{ marginTop: '8px', fontSize: '11px', color: subTextColor }}>
                          {new Date(day.date).toLocaleDateString('en', { month: 'short', day: 'numeric' })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Analytics Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {/* Device Analytics */}
                  <div style={{
                    backgroundColor: cardBg,
                    padding: '24px',
                    borderRadius: '12px',
                    boxShadow: darkMode ? '0 1px 3px rgba(0,0,0,0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
                    border: darkMode ? '1px solid #334155' : '1px solid #e2e8f0'
                  }}>
                    <h3 style={{ margin: '0 0 20px 0', color: textColor, fontSize: '18px' }}>Device Analytics</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {analyticsData.devices.map((device, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: device.color,
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold'
                          }}>
                            {device.percentage}%
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: '500', color: textColor, marginBottom: '4px' }}>{device.type}</div>
                            <div style={{ backgroundColor: darkMode ? '#334155' : '#e2e8f0', borderRadius: '4px', height: '8px', overflow: 'hidden' }}>
                              <div style={{
                                backgroundColor: device.color,
                                height: '100%',
                                width: `${device.percentage}%`,
                                transition: 'width 0.3s ease'
                              }} />
                            </div>
                          </div>
                          <div style={{ fontSize: '14px', color: subTextColor, minWidth: '50px' }}>
                            {device.users}%
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Conversion Funnel */}
                  <div style={{
                    backgroundColor: cardBg,
                    padding: '24px',
                    borderRadius: '12px',
                    boxShadow: darkMode ? '0 1px 3px rgba(0,0,0,0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
                    border: darkMode ? '1px solid #334155' : '1px solid #e2e8f0'
                  }}>
                    <h3 style={{ margin: '0 0 20px 0', color: textColor, fontSize: '18px' }}>Conversion Funnel</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {analyticsData.conversionFunnel.map((stage, index) => (
                        <div key={index} style={{
                          padding: '12px',
                          backgroundColor: darkMode ? '#334155' : '#f8fafc',
                          borderRadius: '8px',
                          borderLeft: `4px solid ${stage.color}`,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <div>
                            <div style={{ fontWeight: '500', color: textColor }}>{stage.stage}</div>
                            <div style={{ fontSize: '12px', color: subTextColor }}>{stage.count.toLocaleString()} users</div>
                          </div>
                          <div style={{
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: stage.color
                          }}>
                            {stage.percentage}%
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Top Pages */}
                <div style={{
                  backgroundColor: cardBg,
                  padding: '24px',
                  borderRadius: '12px',
                  boxShadow: darkMode ? '0 1px 3px rgba(0,0,0,0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
                  border: darkMode ? '1px solid #334155' : '1px solid #e2e8f0'
                }}>
                  <h3 style={{ margin: '0 0 20px 0', color: textColor, fontSize: '18px' }}>Top Pages</h3>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ borderBottom: darkMode ? '1px solid #334155' : '1px solid #e2e8f0' }}>
                          <th style={{ padding: '12px', textAlign: 'left', color: subTextColor, fontSize: '14px', fontWeight: '600' }}>Page</th>
                          <th style={{ padding: '12px', textAlign: 'left', color: subTextColor, fontSize: '14px', fontWeight: '600' }}>Views</th>
                          <th style={{ padding: '12px', textAlign: 'left', color: subTextColor, fontSize: '14px', fontWeight: '600' }}>Avg. Time</th>
                          <th style={{ padding: '12px', textAlign: 'left', color: subTextColor, fontSize: '14px', fontWeight: '600' }}>Bounce Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        {analyticsData.topPages.map((page, index) => (
                          <tr key={index} style={{ borderBottom: darkMode ? '1px solid #334155' : '1px solid #e2e8f0' }}>
                            <td style={{ padding: '12px', color: textColor, fontSize: '14px', fontWeight: '500' }}>{page.page}</td>
                            <td style={{ padding: '12px', color: subTextColor, fontSize: '14px' }}>{page.views.toLocaleString()}</td>
                            <td style={{ padding: '12px', color: subTextColor, fontSize: '14px' }}>{page.avgTime}</td>
                            <td style={{ padding: '12px' }}>
                              <span style={{
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontSize: '12px',
                                fontWeight: '500',
                                backgroundColor: page.bounceRate < 35 ? '#dcfce7' : page.bounceRate < 45 ? '#fef3c7' : '#fee2e2',
                                color: page.bounceRate < 35 ? '#166534' : page.bounceRate < 45 ? '#92400e' : '#991b1b'
                              }}>
                                {page.bounceRate}%
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default App

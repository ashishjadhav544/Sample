import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { label: 'Total Revenue', value: '$45,231', change: '+12.5%', positive: true },
    { label: 'Active Users', value: '2,543', change: '+8.2%', positive: true },
    { label: 'Conversion Rate', value: '3.2%', change: '-2.1%', positive: false },
    { label: 'Avg. Order Value', value: '$128', change: '+5.4%', positive: true }
  ]

  const chartData = [
    { name: 'Jan', sales: 4000, revenue: 2400 },
    { name: 'Feb', sales: 3000, revenue: 1398 },
    { name: 'Mar', sales: 2000, revenue: 9800 },
    { name: 'Apr', sales: 2780, revenue: 3908 },
    { name: 'May', sales: 1890, revenue: 4800 },
    { name: 'Jun', sales: 2390, revenue: 3800 }
  ]

  const activities = [
    { user: 'John Doe', action: 'completed purchase', item: 'Premium Plan', time: '2 minutes ago' },
    { user: 'Sarah Smith', action: 'signed up', item: 'New account', time: '15 minutes ago' },
    { user: 'Mike Johnson', action: 'updated profile', item: 'Settings changed', time: '1 hour ago' },
    { user: 'Emily Davis', action: 'left review', item: '5 stars', time: '2 hours ago' }
  ]

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'users', label: 'Users', icon: '👥' },
    { id: 'products', label: 'Products', icon: '📦' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ]

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Sidebar */}
      <div style={{ width: '250px', backgroundColor: '#1e293b', color: 'white', padding: '20px' }}>
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
        <div style={{ backgroundColor: 'white', padding: '20px 30px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '28px', color: '#1e293b', fontWeight: '600' }}>Dashboard Overview</h1>
            <p style={{ margin: '5px 0 0 0', color: '#64748b' }}>Welcome back! Here's what's happening today.</p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button style={{
              padding: '10px 20px',
              backgroundColor: '#f1f5f9',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              📅 Last 30 days
            </button>
            <button style={{
              padding: '10px 20px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              ➕ New Report
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{ padding: '30px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
            {stats.map((stat, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                padding: '24px',
                borderRadius: '12px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ color: '#64748b', fontSize: '14px', marginBottom: '8px' }}>{stat.label}</div>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>{stat.value}</div>
                <div style={{ fontSize: '14px', color: stat.positive ? '#10b981' : '#ef4444', fontWeight: '500' }}>
                  {stat.positive ? '↑' : '↓'} {stat.change} from last month
                </div>
              </div>
            ))}
          </div>

          {/* Charts and Activity */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
            {/* Chart */}
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{ margin: '0 0 20px 0', color: '#1e293b', fontSize: '18px' }}>Revenue Overview</h3>
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
                        color: '#64748b',
                        fontWeight: '500'
                      }}>
                        ${item.revenue}
                      </div>
                    </div>
                    <div style={{ marginTop: '8px', fontSize: '12px', color: '#64748b' }}>{item.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Feed */}
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{ margin: '0 0 20px 0', color: '#1e293b', fontSize: '18px' }}>Recent Activity</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {activities.map((activity, index) => (
                  <div key={index} style={{
                    padding: '12px',
                    backgroundColor: '#f8fafc',
                    borderRadius: '8px',
                    borderLeft: '3px solid #3b82f6'
                  }}>
                    <div style={{ fontWeight: '500', color: '#1e293b', marginBottom: '4px' }}>
                      {activity.user} {activity.action}
                    </div>
                    <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '4px' }}>
                      {activity.item}
                    </div>
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                      {activity.time}
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

export default App

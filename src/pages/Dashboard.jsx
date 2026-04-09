import { useState } from 'react';

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('7d');

  const dashboardMetrics = [
    { label: 'Active Members', value: '1,245', change: '+12%', icon: '👥', color: 'primary' },
    { label: 'Monthly Revenue', value: '$34.8K', change: '+8.2%', icon: '💳', color: 'accent' },
    { label: 'Attendance Rate', value: '87%', change: '+5.3%', icon: '✓', color: 'success' },
    { label: 'Churn Rate', value: '2.1%', change: '-0.8%', icon: '📊', color: 'warning' }
  ];

  const activityData = [
    { time: '2 hours ago', action: 'New member registration', member: 'John Doe', type: 'registration' },
    { time: '4 hours ago', action: 'Payment received', member: 'Jane Smith', amount: '$49.99', type: 'payment' },
    { time: '6 hours ago', action: 'Class booking', member: 'Mike Johnson', class: 'Yoga 101', type: 'booking' },
    { time: '8 hours ago', action: 'Profile updated', member: 'Sarah Williams', type: 'update' },
    { time: '10 hours ago', action: 'New trainer assigned', member: 'Tom Brown', trainer: 'Alex', type: 'assignment' }
  ];

  const topClasses = [
    { name: 'CrossFit Elite', members: 156, capacity: 200, fill: 78 },
    { name: 'Yoga Flow', members: 142, capacity: 150, fill: 95 },
    { name: 'HIIT Blast', members: 128, capacity: 120, fill: 107 },
    { name: 'Pilates Core', members: 98, capacity: 100, fill: 98 },
  ];

  const revenueData = [
    { day: 'Mon', amount: 4800 },
    { day: 'Tue', amount: 3800 },
    { day: 'Wed', amount: 5200 },
    { day: 'Thu', amount: 4600 },
    { day: 'Fri', amount: 6100 },
    { day: 'Sat', amount: 5900 },
    { day: 'Sun', amount: 4300 },
  ];

  const maxRevenue = Math.max(...revenueData.map(d => d.amount));

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>Enterprise Dashboard</h1>
          <p className="header-subtitle">Real-time gym performance metrics and analytics</p>
        </div>
        <div className="header-controls">
          <div className="time-range-selector">
            {['24h', '7d', '30d', '90d'].map(range => (
              <button
                key={range}
                className={`range-btn ${timeRange === range ? 'active' : ''}`}
                onClick={() => setTimeRange(range)}
              >
                {range}
              </button>
            ))}
          </div>
          <button className="btn btn-primary btn-small">Export Report</button>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="metrics-grid">
        {dashboardMetrics.map((metric, index) => (
          <div key={index} className={`metric-card metric-${metric.color}`}>
            <div className="metric-header">
              <span className="metric-icon">{metric.icon}</span>
              <span className="metric-change positive">{metric.change}</span>
            </div>
            <div className="metric-value">{metric.value}</div>
            <div className="metric-label">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="dashboard-grid-2col">
        {/* Revenue Chart */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Revenue Trend</h3>
            <span className="badge">Last 7 days</span>
          </div>
          <div className="chart-container">
            <div className="bar-chart">
              {revenueData.map((data, index) => (
                <div key={index} className="bar-item">
                  <div className="bar-wrapper">
                    <div
                      className="bar"
                      style={{
                        height: `${(data.amount / maxRevenue) * 100}%`
                      }}
                      title={`$${data.amount}`}
                    ></div>
                  </div>
                  <span className="bar-label">{data.day}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="chart-total">
            Total Revenue: <strong>$34,800</strong>
          </div>
        </div>

        {/* Member Growth */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Member Growth</h3>
            <span className="badge success">+12%</span>
          </div>
          <div className="growth-stats">
            <div className="growth-item">
              <span className="growth-label">New Members</span>
              <span className="growth-value">156</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div className="growth-item">
              <span className="growth-label">Renewals</span>
              <span className="growth-value">298</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="growth-item">
              <span className="growth-label">Cancellations</span>
              <span className="growth-value">26</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '15%' }}></div>
              </div>
            </div>
            <div className="growth-item">
              <span className="growth-label">Total Active</span>
              <span className="growth-value">1,245</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Section */}
      <div className="dashboard-grid-2col">
        {/* Top Classes */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Popular Classes</h3>
            <a href="#" className="view-all">View All →</a>
          </div>
          <div className="class-list">
            {topClasses.map((gymClass, index) => (
              <div key={index} className="class-item">
                <div className="class-info">
                  <h4>{gymClass.name}</h4>
                  <p>{gymClass.members} of {gymClass.capacity} members</p>
                </div>
                <div className="class-capacity">
                  <div className="capacity-bar">
                    <div
                      className={`capacity-fill ${gymClass.fill > 100 ? 'overflow' : ''}`}
                      style={{ width: `${Math.min(gymClass.fill, 100)}%` }}
                    ></div>
                  </div>
                  <span className="capacity-percent">{gymClass.fill}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Recent Activity</h3>
            <a href="#" className="view-all">View All →</a>
          </div>
          <div className="activity-list">
            {activityData.map((activity, index) => (
              <div key={index} className={`activity-item activity-${activity.type}`}>
                <div className="activity-icon">
                  {activity.type === 'registration' && '📝'}
                  {activity.type === 'payment' && '💳'}
                  {activity.type === 'booking' && '📅'}
                  {activity.type === 'update' && '✏️'}
                  {activity.type === 'assignment' && '👤'}
                </div>
                <div className="activity-content">
                  <h4>{activity.action}</h4>
                  <p>{activity.member}</p>
                </div>
                <div className="activity-meta">
                  {activity.amount && <span className="amount">{activity.amount}</span>}
                  {activity.class && <span className="class-name">{activity.class}</span>}
                  {activity.trainer && <span className="trainer-name">{activity.trainer}</span>}
                  <span className="time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="dashboard-card">
        <div className="card-header">
          <h3>Quick Actions</h3>
        </div>
        <div className="quick-actions">
          <button className="action-btn">
            <span className="action-icon">➕</span>
            <span>New Member</span>
          </button>
          <button className="action-btn">
            <span className="action-icon">📅</span>
            <span>Schedule Class</span>
          </button>
          <button className="action-btn">
            <span className="action-icon">📊</span>
            <span>Generate Report</span>
          </button>
          <button className="action-btn">
            <span className="action-icon">💬</span>
            <span>Send Notification</span>
          </button>
          <button className="action-btn">
            <span className="action-icon">💰</span>
            <span>Process Payment</span>
          </button>
          <button className="action-btn">
            <span className="action-icon">⚙️</span>
            <span>Settings</span>
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="summary-section">
        <h3>Performance Summary</h3>
        <div className="summary-grid">
          <div className="summary-item">
            <label>Member Retention</label>
            <div className="stat-display">
              <span className="stat-value">94.2%</span>
              <span className="stat-trend positive">↑ 2.1%</span>
            </div>
          </div>
          <div className="summary-item">
            <label>Average Revenue per Member</label>
            <div className="stat-display">
              <span className="stat-value">$79.50</span>
              <span className="stat-trend positive">↑ $4.20</span>
            </div>
          </div>
          <div className="summary-item">
            <label>Peak Hours</label>
            <div className="stat-display">
              <span className="stat-value">6-8 PM</span>
              <span className="stat-subtext">Capacity: 92%</span>
            </div>
          </div>
          <div className="summary-item">
            <label>Class Completion Rate</label>
            <div className="stat-display">
              <span className="stat-value">88.5%</span>
              <span className="stat-trend positive">↑ 3.2%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

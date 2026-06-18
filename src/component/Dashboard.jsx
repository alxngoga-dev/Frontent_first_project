import React, { useState } from "react";
import "../assets/Style/dashboard.css";

import {
    FiHome,
    FiShoppingBag,
    FiUsers,
    FiBox,
    FiBarChart2,
    FiTag,
    FiMessageSquare,
    FiSettings,
    FiBell,
    FiSearch,
    FiMessageCircle,
    FiPercent,
    FiGrid,
    FiGift,
    FiFileText,
    FiTruck,
    FiHelpCircle,
    FiCreditCard
} from "react-icons/fi";




import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    BarChart,
    Bar,

} from "recharts";

const salesData = [
    { name: "May 1", sales: 2500 },
    { name: "May 4", sales: 3200 },
    { name: "May 8", sales: 8500 },
    { name: "May 12", sales: 15000 },
    { name: "May 15", sales: 13000 },
    { name: "May 18", sales: 18000 },
    { name: "May 21", sales: 18500 },
    { name: "May 24", sales: 17000 },
    { name: "May 27", sales: 24000 },
    { name: "May 29", sales: 29000 },
];

const ordersData = [
    { day: "1", orders: 10 },
    { day: "5", orders: 20 },
    { day: "10", orders: 30 },
    { day: "15", orders: 45 },
    { day: "20", orders: 60 },
    { day: "25", orders: 70 },
    { day: "29", orders: 90 },
];

const Dashboard = () => {
    const [month, setMonth] = useState("This Month");

    return (
        <div className="dashboard">

            {/* SIDEBAR */}

            <aside className="sidebar">

                <div>

                    <h1 className="logo">
                        Alexis Ngoga<span>.</span>
                    </h1>

                    <ul className="menu">

                        <li className="active">
                            <FiHome />
                            <span>Dashboard</span>
                        </li>

                        <li>
                            <FiShoppingBag />
                            <span>Orders</span>
                            <span className="badge">23</span>
                        </li>

                        <li>
                            <FiTag />
                            <span>Products</span>
                        </li>

                        <li>
                            <FiUsers />
                            <span>Customers</span>
                        </li>

                        <li>
                            <FiBox />
                            <span>Inventory</span>
                        </li>

                        <li>
                            <FiBarChart2 />
                            <span>Analytics</span>
                        </li>

                        <li>
                            <FiPercent />
                            <span>Discounts</span>
                        </li>

                        <li>
                            <FiTruck />
                            <span>Shipping</span>
                        </li>

                        <li>
                            <FiMessageSquare />
                            <span>Reviews</span>
                        </li>

                        <li>
                            <FiHelpCircle />
                            <span>Support</span>
                        </li>

                        <li>
                            <FiSettings />
                            <span>Settings</span>
                        </li>

                        <li><FiGrid />
                            <span>Categories</span>
                        </li>
                        <li>
                            <FiGrid />
                            <span>Categories</span>
                        </li>

                        <li>
                            <FiPercent />
                            <span>Coupons</span>
                        </li>

                        <li>
                            <FiGift />
                            <span>Marketing</span>
                        </li>

                        <li>
                            <FiFileText />
                            <span>Reports</span>
                        </li>

                        <li>
                            <FiBarChart2 />
                            <span>Transactions</span>
                        </li>

                        <li>
                            <FiCreditCard />
                            <span>Payments</span>
                        </li>

                        <li>
                            <FiTruck />
                            <span>Shipping</span>
                        </li>

                        <li>
                            <FiHelpCircle />
                            <span>Support</span>
                        </li>


                    </ul>

                    <div className="upgrade-card">

                        <h4>Grow your store</h4>

                        <p>
                            Upgrade to unlock advanced
                            reports and analytics.
                        </p>

                        <button>
                            Upgrade Now
                        </button>

                    </div>

                </div>

                <div className="user-box">

                    <div className="avatar">
                        AN
                    </div>

                    <div>
                        <h4>Alexis Ngoga</h4>
                        <p>Store Owner</p>
                    </div>

                </div>

            </aside>

            {/* MAIN CONTENT */}

            <main className="main-content">

                {/* TOPBAR */}

                <header className="topbar">

                    <div>

                        <h2>
                            Welcome back, Alexis! 👋
                        </h2>

                        <p>
                            Here's what's happening with your store today.
                        </p>

                    </div>

                    <div className="top-right">

                        <div className="search-box">
                            <FiSearch />

                            <input
                                type="text"
                                placeholder="Search products, orders, customers..."
                            />
                        </div>

                        <div className="notification">
                            <FiBell />
                            <span>3</span>
                        </div>

                        <div className="notification">
                            <FiMessageCircle />
                            <span>2</span>
                        </div>

                    </div>

                </header>

                {/* STATS CARDS */}

                <section className="stats-grid">

                    <div className="stat-card">

                        <div className="stat-icon">
                            💰
                        </div>

                        <div>
                            <p>Total Sales</p>
                            <h3>$24,560.00</h3>
                            <span className="green">
                                ↑ 12.5%
                            </span>
                        </div>

                    </div>

                    <div className="stat-card">

                        <div className="stat-icon">
                            🛒
                        </div>

                        <div>
                            <p>Total Orders</p>
                            <h3>320</h3>
                            <span className="green">
                                ↑ 8.3%
                            </span>
                        </div>

                    </div>

                    <div className="stat-card">

                        <div className="stat-icon">
                            📦
                        </div>

                        <div>
                            <p>Products</p>
                            <h3>158</h3>
                            <span className="green">
                                ↑ 5.2%
                            </span>
                        </div>

                    </div>

                    <div className="stat-card">

                        <div className="stat-icon">
                            👥
                        </div>

                        <div>
                            <p>Customers</p>
                            <h3>2,450</h3>
                            <span className="green">
                                ↑ 16.7%
                            </span>
                        </div>

                    </div>

                </section>

                {/* CHARTS */}

                <section className="charts-grid">

                    {/* SALES OVERVIEW */}

                    <div className="chart-card sales-chart">

                        <div className="section-header">

                            <h3>Sales Overview</h3>

                            <div className="section-header">


                                <div className="sales-overview">
                                      <h3>Sales Overview</h3>
                                </div>
                               

                                <select
                                    className="month-select"
                                    value={month}
                                    onChange={(e) => setMonth(e.target.value)}
                                >
                                    <option>This Month</option>
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                            </div>

                        </div>

                        <div className="sales-amount">

                            <h2>$24,560.00</h2>

                            <span className="green">
                                ↑ 12.5% vs last month
                            </span>

                        </div>

                        <ResponsiveContainer
                            width="100%"
                            height={300}
                        >

                            <LineChart data={salesData}>

                                <CartesianGrid stroke="#f1f1f1" />

                                <XAxis dataKey="name" />

                                <YAxis />

                                <Tooltip />

                                <Line
                                    type="monotone"
                                    dataKey="sales"
                                    stroke="#d4a017"
                                    strokeWidth={4}
                                    dot={{
                                        fill: "#d4a017",
                                        r: 5,
                                    }}
                                />

                            </LineChart>

                        </ResponsiveContainer>

                    </div>

                    {/* ORDERS OVERVIEW */}

                    <div className="chart-card orders-chart">

                        <div className="section-header">
                            <h3>Sales Overview</h3>

                            <select
                                className="month-select"
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                            >
                                <option>This Month</option>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>
                        </div>

                        <ResponsiveContainer
                            width="100%"
                            height={300}
                        >

                            <BarChart data={ordersData}>

                                <XAxis dataKey="day" />

                                <YAxis />

                                <Tooltip />

                                <Bar
                                    dataKey="orders"
                                    fill="#d4a017"
                                    radius={[6, 6, 0, 0]}
                                />

                            </BarChart>

                        </ResponsiveContainer>

                    </div>

                </section>

                {/* PRODUCTS + ORDERS */}

                <div className="bottom-grid">

                    <div className="products-card">

                        <div className="section-header">
                            <h3>Best Selling Products</h3>
                            <span>View all</span>
                        </div>

                        <div className="product-item">
                            <div>
                                <h4>Modern Accent Chair</h4>
                                <p>235 sold</p>
                            </div>
                            <strong>$9,850.00</strong>
                        </div>

                        <div className="product-item">
                            <div>
                                <h4>Wooden Coffee Table</h4>
                                <p>189 sold</p>
                            </div>
                            <strong>$7,560.00</strong>
                        </div>

                        <div className="product-item">
                            <div>
                                <h4>Minimalist Side Table</h4>
                                <p>156 sold</p>
                            </div>
                            <strong>$3,900.00</strong>
                        </div>

                        <div className="product-item">
                            <div>
                                <h4>Ceramic Vase</h4>
                                <p>98 sold</p>
                            </div>
                            <strong>$2,450.00</strong>
                        </div>

                        <div className="product-item">
                            <div>
                                <h4>Linen Cushion Cover</h4>
                                <p>87 sold</p>
                            </div>
                            <strong>$1,740.00</strong>
                        </div>

                    </div>

                    {/* RECENT ORDERS */}

                    <div className="orders-card">

                        <div className="section-header">
                            <h3>Recent Orders</h3>
                            <span>View all</span>
                        </div>

                        <table>

                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Customer</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td>#1005</td>
                                    <td>Sophia Johnson</td>
                                    <td>$450.00</td>
                                    <td>
                                        <span className="status delivered">
                                            Delivered
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1004</td>
                                    <td>Liam Martinez</td>
                                    <td>$320.00</td>
                                    <td>
                                        <span className="status processing">
                                            Processing
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1003</td>
                                    <td>Olivia Brown</td>
                                    <td>$210.00</td>
                                    <td>
                                        <span className="status shipped">
                                            Shipped
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1002</td>
                                    <td>Noah Wilson</td>
                                    <td>$180.00</td>
                                    <td>
                                        <span className="status delivered">
                                            Delivered
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1001</td>
                                    <td>Emma Davis</td>
                                    <td>$45.00</td>
                                    <td>
                                        <span className="status processing">
                                            Processing
                                        </span>
                                    </td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* INVENTORY + PERFORMANCE */}

                <div className="inventory-grid">

                    <div className="inventory-card">

                        <div className="section-header">
                            <h3>Inventory Status</h3>
                        </div>

                        <div className="inventory-item">
                            <span>Modern Accent Chair</span>
                            <strong>8 left</strong>
                        </div>

                        <div className="inventory-item">
                            <span>Wooden Coffee Table</span>
                            <strong>12 left</strong>
                        </div>

                        <div className="inventory-item">
                            <span>Minimalist Side Table</span>
                            <strong>15 left</strong>
                        </div>

                        <div className="inventory-item">
                            <span>Ceramic Vase</span>
                            <strong>18 left</strong>
                        </div>

                    </div>

                    <div className="performance-card">

                        <div className="section-header">
                            <h3>Store Performance</h3>
                        </div>

                        <div className="performance-grid">

                            <div>
                                <h2>2.45%</h2>
                                <p>Conversion Rate</p>
                            </div>

                            <div>
                                <h2>18,624</h2>
                                <p>Total Visitors</p>
                            </div>

                            <div>
                                <h2>$76.75</h2>
                                <p>Average Order Value</p>
                            </div>

                        </div>

                    </div>

                </div>

                {/* LATEST REVIEWS */}

                <div className="review-card">

                    <div className="section-header">
                        <h3>Latest Reviews</h3>
                        <span>View all</span>
                    </div>

                    <div className="review-content">

                        <div className="review-avatar">
                            SM
                        </div>

                        <div>
                            <h4>Sophie Martin ⭐⭐⭐⭐⭐</h4>

                            <p>
                                Absolutely love the quality!
                                The chair looks perfect in my living room.
                                Fast delivery and excellent customer service.
                            </p>
                        </div>

                    </div>

                    <div className="review-content">

                        <div className="review-avatar">
                            JM
                        </div>

                        <div>
                            <h4>James Miller ⭐⭐⭐⭐</h4>

                            <p>
                                Product quality is excellent.
                                Packaging was great and delivery arrived on time.
                            </p>
                        </div>

                    </div>

                    <div className="review-content">

                        <div className="review-avatar">
                            EB
                        </div>

                        <div>
                            <h4>Emma Brown ⭐⭐⭐⭐⭐</h4>

                            <p>
                                Amazing shopping experience.
                                I will definitely order again.
                            </p>
                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
};

export default Dashboard;
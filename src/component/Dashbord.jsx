import { useMemo, useState } from "react";
import {
  FiBell,
  FiBox,
  FiChevronDown,
  FiGrid,
  FiHome,
  FiLayers,
  FiMenu,
  FiMoon,
  FiMoreVertical,
  FiPackage,
  FiSearch,
  FiSettings,
  FiShoppingBag,
  FiShoppingCart,
  FiSliders,
  FiTrendingUp,
} from "react-icons/fi";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "../App.css";

const menuItems = [
  { id: "home", label: "Dashboard Home", icon: FiHome },
  { id: "orders", label: "Orders", icon: FiShoppingCart },
  { id: "category", label: "Category", icon: FiGrid },
  { id: "products", label: "Products", icon: FiPackage },
  { id: "settings", label: "Settings", icon: FiSettings },
];

const stats = [
  { label: "Active Deal", value: "$120,369", change: "+20%", trend: "up" },
  { label: "Revenue Total", value: "$234,210", change: "+9.0%", trend: "up" },
  { label: "Closed Deals", value: "874", change: "-4.5%", trend: "down" },
];

const salesData = [
  { month: "Jan", profit: 180, revenue: 40 },
  { month: "Feb", profit: 190, revenue: 30 },
  { month: "Mar", profit: 170, revenue: 50 },
  { month: "Apr", profit: 160, revenue: 40 },
  { month: "May", profit: 175, revenue: 55 },
  { month: "Jun", profit: 165, revenue: 42 },
  { month: "Jul", profit: 170, revenue: 65 },
  { month: "Aug", profit: 205, revenue: 96 },
  { month: "Sep", profit: 230, revenue: 108 },
  { month: "Oct", profit: 210, revenue: 120 },
  { month: "Nov", profit: 240, revenue: 150 },
  { month: "Dec", profit: 236, revenue: 140 },
];

const categoryData = [
  { name: "Affiliate Program", value: 48, color: "#FFA832", products: "2,040" },
  { name: "Direct Buy", value: 33, color: "#8fb3ff", products: "1,402" },
  { name: "Adsense", value: 19, color: "#dce8ff", products: "806" },
];

const orders = [
  { id: "#ORD-1206", customer: "Sophia Carter", product: "Modern Lounge Chair", status: "Paid", total: "$420.00", date: "19 Jun" },
  { id: "#ORD-1205", customer: "Mike Johnson", product: "Oak Coffee Table", status: "Pending", total: "$289.00", date: "18 Jun" },
  { id: "#ORD-1204", customer: "Lina Brooks", product: "Minimal Desk Lamp", status: "Shipped", total: "$96.00", date: "18 Jun" },
  { id: "#ORD-1203", customer: "Noah Wilson", product: "Studio Sofa", status: "Paid", total: "$1,250.00", date: "17 Jun" },
];

const products = [
  { name: "Modern Lounge Chair", sku: "CH-204", stock: 42, price: "$420", image: "/Images/chair1.png" },
  { name: "Nordic Accent Chair", sku: "CH-118", stock: 18, price: "$315", image: "/Images/chair4.png" },
  { name: "Soft Studio Chair", sku: "CH-097", stock: 27, price: "$260", image: "/Images/chair7.png" },
  { name: "Classic Wood Chair", sku: "CH-061", stock: 13, price: "$190", image: "/Images/chair8.png" },
];

function Dahboard() {
  const [activePage, setActivePage] = useState("home");
  const currentTitle = menuItems.find((item) => item.id === activePage)?.label;

  return (
    <main className="dashboard-shell">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <section className="dashboard-main">
        <Topbar title={currentTitle} />
        <div className="page-content">
          {activePage === "home" && <DashboardHome />}
          {activePage === "orders" && <OrdersPage />}
          {activePage === "category" && <CategoryPage />}
          {activePage === "products" && <ProductsPage />}
          {activePage === "settings" && <SettingsPage />}
        </div>
      </section>
      
    </main>
  );
}

function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-mark">
          <FiLayers />
        </span>
        <span>Miniture</span>
      </div>

      <p className="sidebar-label">Menu</p>
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              className={`nav-item ${activePage === item.id ? "active" : ""}`}
              key={item.id}
              onClick={() => setActivePage(item.id)}
              type="button"
            >
              <Icon />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-card">
        <FiTrendingUp />
        <div>
          <strong>Monthly target</strong>
          <span>84% completed</span>
        </div>
      </div>
    </aside>
  );
}

function Topbar({ title }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="icon-button" type="button" aria-label="Open menu">
          <FiMenu />
        </button>
        <label className="search-box">
          <FiSearch />
          <input placeholder="Search or type command..." />
          <kbd>Ctrl K</kbd>
        </label>
      </div>
      <div className="page-title">{title}</div>
      <div className="topbar-actions">
        <button className="icon-button" type="button" aria-label="Theme">
          <FiMoon />
        </button>
        <button className="icon-button has-dot" type="button" aria-label="Notifications">
          <FiBell />
        </button>
        <div className="profile">
          <img src="/img/image1.png" alt="User profile" />
          <span>Admin dashboard</span>
          <FiChevronDown />
        </div>
      </div>
    </header>
  );
}

function DashboardHome() {
  return (
    <>
      <section className="stat-grid">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <h2>{stat.value}</h2>
            <div>
              <span>{stat.label}</span>
              <small className={stat.trend}>{stat.change}</small>
              <em>last month</em>
            </div>
          </article>
        ))}
      </section>

      <section className="dashboard-grid">
        <ChartCard />
        <RevenueCard />
        <SalesCategory />
        <ScheduleCard />
      </section>
    </>
  );
}

function ChartCard() {
  return (
    <article className="panel chart-panel">
      <PanelHeader title="Statistics" subtitle="Target you've set for each month" />
      <div className="chart-summary">
        <div>
          <strong>$212,142.12</strong>
          <small className="up">+23.2%</small>
          <span>Avg. Yearly Profit</span>
        </div>
        <div>
          <strong>$30,321.23</strong>
          <small className="down">-12.3%</small>
          <span>Avg. Yearly Revenue</span>
        </div>
        <div className="segmented">
          <button type="button" className="active">Monthly</button>
          <button type="button">Quarterly</button>
          <button type="button">Annually</button>
        </div>
      </div>
      <div className="chart-box">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={salesData} margin={{ top: 12, right: 8, left: -24, bottom: 0 }}>
            <defs>
              <linearGradient id="profit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFA832" stopOpacity={0.22} />
                <stop offset="95%" stopColor="#FFA832" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#e8edf7" vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip />
            <Area type="monotone" dataKey="profit" stroke="#FFA832" strokeWidth={2} fill="url(#profit)" />
            <Area type="monotone" dataKey="revenue" stroke="#FFA832" strokeWidth={2} fill="transparent" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}

function RevenueCard() {
  return (
    <article className="panel revenue-panel">
      <PanelHeader title="Estimated Revenue" subtitle="Target you've set for each month" menu />
      <div className="gauge">
        <div className="arc" />
        <span>June Goals</span>
        <strong>$90</strong>
      </div>
      <div className="progress-list">
        <Progress label="Marketing" value="$30,569.00" percent={85} />
        <Progress label="Sales" value="$20,486.00" percent={55} />
      </div>
    </article>
  );
}

function SalesCategory() {
  return (
    <article className="panel category-panel">
      <PanelHeader title="Sales Category" menu />
      <div className="donut-layout">
        <div className="donut-wrap">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={categoryData} dataKey="value" innerRadius={66} outerRadius={102} paddingAngle={0}>
                {categoryData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="donut-center">
            <strong>Total 3.5K</strong>
            <span>2450</span>
          </div>
        </div>
        <div className="legend-list">
          {categoryData.map((item) => (
            <div className="legend-item" key={item.name}>
              <i style={{ background: item.color }} />
              <div>
                <strong>{item.name}</strong>
                <span>{item.value}% - {item.products} Products</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function ScheduleCard() {
  const schedule = [
    ["Wed, 11 Jan", "09:20 AM", "Business Analytics Press", "Exploring the Future of Data-Driven +6 more"],
    ["Fri, 15 Feb", "10:35 AM", "Business Sprint", "Techniques from Business Sprint +2 more"],
    ["Thu, 10 Mar", "01:15 PM", "Customer Review Meeting", "Review feedback and priority requests"],
  ];

  return (
    <article className="panel schedule-panel">
      <PanelHeader title="Upcoming Schedule" menu />
      <div className="schedule-list">
        {schedule.map(([date, time, title, detail]) => (
          <div className="schedule-item" key={title}>
            <span className="check" />
            <div className="date">
              <span>{date}</span>
              <strong>{time}</strong>
            </div>
            <div>
              <strong>{title}</strong>
              <span>{detail}</span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function OrdersPage() {
  return (
    <section className="single-page">
      <PageHero icon={FiShoppingBag} title="Orders" text="Track recent purchases, payment state, and fulfillment status." />
      <article className="panel table-panel">
        <PanelHeader title="Recent Orders" subtitle="Latest customer activity" menu />
        <DataTable rows={orders} />
      </article>
    </section>
  );
}

function CategoryPage() {
  const bars = useMemo(() => categoryData.map((item) => ({ name: item.name.split(" ")[0], value: item.value })), []);

  return (
    <section className="single-page">
      <PageHero icon={FiGrid} title="Category" text="Compare category strength and quickly see where stock is moving." />
      <div className="split-grid">
        <SalesCategory />
        <article className="panel">
          <PanelHeader title="Category Growth" subtitle="Share by conversion" />
          <div className="bar-box">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bars}>
                <CartesianGrid stroke="#e8edf7" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Bar dataKey="value" fill="#FFA832" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>
      </div>
    </section>
  );
}

function ProductsPage() {
  return (
    <section className="single-page">
      <PageHero icon={FiBox} title="Products" text="Manage your featured products, pricing, and available inventory." />
      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.sku}>
            <img src={product.image} alt={product.name} />
            <div>
              <span>{product.sku}</span>
              <h3>{product.name}</h3>
              <p>{product.stock} units in stock</p>
            </div>
            <strong>{product.price}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function SettingsPage() {
  return (
    <section className="single-page">
      <PageHero icon={FiSliders} title="Settings" text="Adjust storefront information, alerts, and dashboard preferences." />
      <div className="settings-grid">
        <article className="panel form-panel">
          <PanelHeader title="Store Profile" subtitle="Public business details" />
          <label>Store name<input defaultValue="MinitureAdmin Commerce" /></label>
          <label>Email<input defaultValue="admin@example.com" /></label>
          <label>Currency<select defaultValue="usd"><option value="usd">USD</option><option value="eur">EUR</option></select></label>
          <button className="primary-button" type="button">Save Changes</button>
        </article>
        <article className="panel form-panel">
          <PanelHeader title="Notifications" subtitle="Choose what needs attention" />
          <label className="toggle-row"><span>New orders</span><input type="checkbox" defaultChecked /></label>
          <label className="toggle-row"><span>Low stock alerts</span><input type="checkbox" defaultChecked /></label>
          <label className="toggle-row"><span>Weekly summary</span><input type="checkbox" /></label>
        </article>
      </div>
    </section>
  );
}

function PanelHeader({ title, subtitle, menu = false }) {
  return (
    <div className="panel-header">
      <div>
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {menu && (
        <button type="button" className="ghost-button" aria-label={`${title} menu`}>
          <FiMoreVertical />
        </button>
      )}
    </div>
  );
}

function Progress({ label, value, percent }) {
  return (
    <div className="progress-row">
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
      <div className="progress-track">
        <i style={{ width: `${percent}%` }} />
      </div>
      <b>{percent}%</b>
    </div>
  );
}

function PageHero({ icon: Icon, title, text }) {
  return (
    <article className="page-hero">
      <span><Icon /></span>
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </article>
  );
}

function DataTable({ rows }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Status</th>
            <th>Total</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.customer}</td>
              <td>{row.product}</td>
              <td><span className={`status ${row.status.toLowerCase()}`}>{row.status}</span></td>
              <td>{row.total}</td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dahboard;

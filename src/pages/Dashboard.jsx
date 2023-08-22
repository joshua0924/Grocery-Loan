import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Menu, Table, Select, Row, Col, Tabs, Typography } from 'antd';
import { CaretDownOutlined, CalendarOutlined } from '@ant-design/icons';
import {
  fetchPopularProducts, selectPopularProductsForTimePeriod,
} from '../reducers/popularProductsSlice';
import { Line } from '@ant-design/charts';
import moment from 'moment';
import './net.css'
const { TabPane } = Tabs;
const { Title } = Typography;


const { Option } = Select;
const dailyData = [
  { date: '9:00AM', sales: 300 },
  { date: '12:00PM', sales: 400 },
  { date: '3:00PM', sales: 250 },
  { date: '6:00PM', sales: 550 },

];
const weeklyData = [
  { week: 'Week 1', sales: 1800 },
  { week: 'Week 2', sales: 2400 },
  { week: 'Week 3', sales: 2000 },
  { week: 'Week 4', sales: 2800 },
];
const monthlyData = [
  { month: 'January', sales: 10000 },
  { month: 'February', sales: 12000 },
  { month: 'March', sales: 14000 },
  { month: 'April', sales: 11000 },
  { month: 'May', sales: 13000 },
  { month: 'June', sales: 15000 },
];
const salesData = {
  daily: dailyData,
  weekly: weeklyData,
  monthly: monthlyData,
};
const { Item } = Menu;
function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularProducts('Today'));
    dispatch(fetchPopularProducts('Week'));
    dispatch(fetchPopularProducts('Month'));
  }, [dispatch]);
  const [timeRange, setTimeRange] = useState('Today');
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = (e) => {
    setTimeRange(e.key);
    setMenuOpen(false);
  };
  const todayPopularProducts = useSelector(selectPopularProductsForTimePeriod('Today'));
  const weekPopularProducts = useSelector(selectPopularProductsForTimePeriod('Week'));
  const monthPopularProducts = useSelector(selectPopularProductsForTimePeriod('Month'));
  let popularProducts = [];
  if (timeRange === 'Today') {
    popularProducts = todayPopularProducts;
  } else if (timeRange === 'Week') {
    popularProducts = weekPopularProducts;
  } else if (timeRange === 'Month') {
    popularProducts = monthPopularProducts;
  }
  console.log("🚀 ~ file: Dashboard.jsx:36 ~ Dashboard ~ popularProducts:", popularProducts)
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Item key="Today">Today</Item>
      <Item key="Week">This Week</Item>
      <Item key="Month">This Month</Item>
    </Menu>
  );
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('daily');
  const handleTimeFrameChange = (value) => {
    setSelectedTimeFrame(value);
  };
  const data = salesData[selectedTimeFrame];
  const chartConfig = {
    data,
    xField: selectedTimeFrame === 'daily' ? 'date' : selectedTimeFrame === 'weekly' ? 'week' : 'month',
    yField: 'sales',
    height: 250,
    tooltip: {
      title: 'Sales',
    },
  };
}

export default Dashboard;
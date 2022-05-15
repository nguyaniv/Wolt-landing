import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/global.css';
import Layout from './Layout/Layout';
import Header from './Layout/Header';
import Benefits from './cmps/Benefits';
import OrderOnMobile from './cmps/OrderOnMobile';
import Contacts from './cmps/Contacts';
import Footer from './Layout/Footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Layout>
    <Header />
    <Benefits />
    <OrderOnMobile />
    <Contacts />
    <Footer />
  </Layout>
);

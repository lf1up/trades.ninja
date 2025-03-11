import React, { useState, useEffect } from 'react';
import './MainContent.css';

const MainContent = () => {
  const exchanges = ["Binance", "ByBit", "Kraken", "OKX", "Hyperliquid", "Kucoin and etc."];
  const [currentExchange, setCurrentExchange] = useState(exchanges[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExchange(prev => {
        const currentIndex = exchanges.indexOf(prev);
        const nextIndex = (currentIndex + 1) % exchanges.length;
        return exchanges[nextIndex];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-content">
      <h1>Outage proof of {currentExchange} bot trading</h1>
      <p>
        Take your freedom back and start to run stand-alone {currentExchange} trading bots inside our cloud.
        Write your own Python strategy code or select from a wide range of pre-built strategies.
        We provide a secure and reliable cloud environment to run your bots 24/7.
        Connect your {currentExchange} account and start trading in minutes.
      </p>
      <div className="features">
        <span>🌍 190+ countries</span>
        <span>📶 Guaranteed uptime</span>
        <span>❤️ 5,000+ customers</span>
      </div>
      <button className="cta-button">Get {currentExchange} Bots Free</button>
    </div>
  );
};

export default MainContent;
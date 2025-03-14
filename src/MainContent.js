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
      <h1>Outage proof of automated <span className="exchange-name"> 💸 {currentExchange} 💸 </span> trading</h1>
      <p>
        Take your freedom back and start to run stand-alone trading bots inside our cloud.
        <br />
        Write your own Python strategy code or select from a wide range of pre-built strategies.
        <br />
        We provide a secure and reliable cloud environment to <b>run your bots 24/7</b>.
        <br />
        <br />
        <b>Connect your exchange (sub)account and start trading in minutes</b>.
      </p>
      <div className="features">
        <span>🌍 190+ countries</span>
        <span>📶 Guaranteed uptime</span>
        <span>❤️ 5,000+ customers</span>
      </div>
      <a className="cta-button" href="mailto:support@trades.ninja">Get Auto-trading Bots Free</a>
    </div>
  );
};

export default MainContent;
import React, {Component} from 'react';
import CountdownTimer from './CountdownTimer/CountdownTimer';
import MobileDetect from 'mobile-detect';
import Colors from 'utils/ColorCollection';

const styles = require('./App.css');

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    const deviceDetect = new MobileDetect(window.navigator.userAgent);
    const isMobile = deviceDetect.mobile();
    console.log(isMobile);
    const format = 'year-day-hour-minute-second';
    const fontSize = isMobile ? 24 : 32;
    const size = isMobile ? '120px' : '180px';
    return (
      <section className={styles.root}>
        <div className={styles.content_container}>
            <div className={styles.header_container}>
              <h3 className={styles.header}>Time Left</h3>
              <h4 className={styles.header_sm}>to Haze-Free ASEAN</h4>
            </div>
        </div>
        <CountdownTimer
          deadline={'Oct 29 2020 00:00:50 UTC+0800'}
          isMobile={isMobile}
          options={{format}}
          size={size}
          fontSize={fontSize}
          colorFinished={Colors.white}
          colorGoing={Colors.grey800}
          textColor={Colors.grey800} />
        <div className={styles.background}></div>
      </section>
    );
  }
}

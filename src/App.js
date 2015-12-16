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
    const format = 'year-day-hour-minute-second';
    const fontSize = isMobile ? 24 : 32;
    const size = isMobile ? '120px' : '180px';
    return (
      <div className={styles.root}>
          <section className={styles.main_container}>
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
        <a name="about" style={{fontSize: 0}}>&nbsp;</a>
        <article className={styles.text_container}>
          <div className={styles.text_wrapper}>
            <h2><strong>ASEAN Leaders’ Commitment</strong></h2>
                <p>At the 11th Meeting of the Conference of the Parties to ASEAN Agreement on Transboundary Haze Pollution (29 Oct 2015), ASEAN leaders agreed to commit to a haze-free ASEAN by 2020. This means that details of government-to-government collaborations must be ironed out and implemented within 5 years to restore to the ASEAN people the basic right to breathe clean air.</p>
                <p>
                  <a href="http://www.asean.org/news/asean-secretariat-news/item/11th-meeting-of-the-conference-of-the-parties-to-the-asean-agreement-on-transboundary-haze-pollution" target="_blank">
                    Read more about the 11th ASEAN meeting here
                  </a>
                </p>
                <h3>The clock is ticking</h3>
                <p>This countdown clock reminds us of the time that remains for ASEAN leaders to fulfil their commitments. PM.Haze urges governments to act with urgency in implementing concrete actions, national strategies and collaborative measures to stop haze.</p>
                <p>Along the way, PM.Haze will keep track of ASEAN government actions or inaction towards the haze-free 2020 goal.</p>
          </div>
        </article>
      </div>
    );
  }
}

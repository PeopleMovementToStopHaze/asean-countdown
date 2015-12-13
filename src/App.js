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
                <p>At the 11th Meeting of the Conference of the Parties to ASEAN Agreement on Transboundary Haze Pollution (29 Oct 2015), ASEAN leaders agreed to commit to a haze-free ASEAN by 2020. This means details of government-to-government collaborations will be ironed out and implemented so that the ASEAN people will get to enjoy clean air in 5 years time.</p>
                <p>
                  <a
                    href="http://www.asean.org/news/asean-secretariat-news/item/11th-meeting-of-the-conference-of-the-parties-to-the-asean-agreement-on-transboundary-haze-pollution" target="_blank">Read more about the 11th ASEAN meeting here</a>
                  </p>
                <p>Haze is the environmental crisis that should be the priority among ASEAN governments. PM.Haze urges governments to transform the sense of urgency to concrete actions in terms of collaboration and national strategies from all ASEAN countries.</p>
                <p>The clock is ticking. This countdown clock reminds us of time left from 29 Oct 2020 to haze-free ASEAN, according to the leaders’ commitment.</p>
                <p>PM.Haze will keep track of the milestones of ASEAN government actions and inactions. The ASEAN people will support in all possible ways, so that in 2020, we can declare victory over haze.</p>
          </div>
        </article>
      </div>
    );
  }
}

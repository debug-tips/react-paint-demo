import React, { Component } from 'react';
import Loading from './Loading';
import CloseButton from './CloseButton';
import Browser from './Browser';
import EmptyFavicon from './EmptyFavicon';
import Favicon from './Favicon';
import ImageHolder from './ImageHolder';
import Image from './Image';

const FPS = 1000 / 60;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: !isNaN(parseFloat(props.load)),
      time: 0,
      timeBase: performance.now(),
      slowFactor: this.getSlowFactor(),
    };
  }

  componentDidMount() {
    this.playAnimation();
  }

  getSlowFactor() {
    const metrics = this.getMetrics();
    const max = Math.max(...Object.keys(metrics).map(key => metrics[key]));

    if (max < 5000) {
      return 4;
    } else if (max < 10000) {
      return 3;
    } else if (max < 20000) {
      return 2;
    }

    return 1;
  }

  getMetrics(props = this.props) {
    const { load, fp, fcp, fmp } = props;
    const finalLoad = parseFloat(load) || 0;
    const finalFp = parseFloat(fp) || 0;
    const finalFcp = parseFloat(fcp) || 0;
    const finalFmp = parseFloat(fmp) || 0;

    return {
      finalLoad,
      finalFcp,
      finalFmp,
      finalFp,
    };
  }

  updateTimer = (stopTime) => {
    requestAnimationFrame(() => {
      const newTime = performance.now() -  this.state.timeBase;
      if (stopTime > newTime) {
        this.setState({
          time: newTime,
        });

        const { finalFcp, finalFmp, finalLoad, finalFp } = this.getMetrics();
        const arr = [finalFcp, finalFmp, finalFp, finalLoad].sort((a, b) => a - b);
        arr.pop();
        const isMetStopPoint = !arr.every(t => Math.abs(newTime / this.state.slowFactor - t) > FPS);

        if (isMetStopPoint) {
          this.setState({
            time: newTime + FPS * this.state.slowFactor,
          });
          setTimeout(() => {
            this.updateTimer(stopTime);
          }, 2000);
        } else {
          this.updateTimer(stopTime);
        }
      } else {
        this.setState({
          time: stopTime,
        });
      }
    });
  }

  playAnimation = () => {
    const { finalFcp, finalFmp, finalLoad, finalFp } = this.getMetrics();
    if (this.state.loading) {
      setTimeout(() => {
        this.setState({
          loading: false,
        });
      }, finalLoad * this.state.slowFactor);
    }

    this.updateTimer(Math.max(finalLoad, finalFp, finalFcp, finalFmp) * this.state.slowFactor);
  }

  handleReplay = () => {
    this.setState({
      loading: true,
      time: 0,
      timeBase: performance.now(),
    }, this.playAnimation);
  }

  handleSlow = () => {
    this.setState({
      slowFactor: this.state.slowFactor === 1 ? 2 : 1,
      time: 0,
      timeBase: performance.now(),
      loading: true,
    }, this.playAnimation);
  }

  renderContentByTime = (time) => {
    const { pageTitle } = this.props;
    const { finalFcp, finalFmp, finalLoad, finalFp } = this.getMetrics();

    const isFp = time > finalFp && time < Math.min(finalFcp, finalFmp);
    const isFcp = time > finalFcp && time > finalFp;
    const isFmp = time >= finalFmp;

    if (isFmp) {
      return (
        <div className="page-demo" style={{"position":"relative","top":"-6px","width":"100%","display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center"}}>
          <div className="header" style={{"height":"30px","width":"100%","background":"#f40"}}>
            <span className="page-demo-title" style={{"color":"#fff","lineHeight":"1.6","marginLeft":"10px"}}>{pageTitle || 'Demo Page'}</span>
          </div>
          <div className="content" style={{"height":"170px","width":"100%","background":"#f8f8f8", "paddingLeft": 10 }}>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              {finalFmp < finalLoad && <li>{ time > finalLoad - 100 ? <Image /> : <ImageHolder />}</li>}
              <li>Curabitur tristique eros tortor, eu dignissim enim egestas in. Cras facilisis risus accumsan venenatis vulputate.</li>
              <li>Vivamus quis libero ac sapien placerat viverra.</li>
            </ul>
          </div>
          <div className="footer" style={{"height":"32px","width":"100%","background":"#ddd"}}>
            <span className="page-demo-footer" style={{"fontSize":"10px","color":"#999","lineHeight":"3","marginLeft":"10px"}}>&copy; MyCompany 2010-2019</span>
          </div>
        </div>
      );
    }

    if (isFcp) {
      return (
        <div className="page-demo" style={{"position":"relative","top":"-6px","width":"100%","display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center"}}>
          <div className="header" style={{"height":"30px","width":"100%","background":"#f40"}}>
            <span className="page-demo-title" style={{"color":"#fff","lineHeight":"1.6","marginLeft":"10px"}}>{pageTitle || 'Demo Page'}</span>
          </div>
          <div className="content" style={{"height":"170px","width":"100%","background":"#f8f8f8", "paddingLeft": 10 }}>
            {finalFmp > finalLoad && (
              <span>loading...</span>
            )}
          </div>
          <div className="footer" style={{"height":"32px","width":"100%","background":"#ddd"}}>
            <span className="page-demo-footer" style={{"fontSize":"10px","color":"#999","lineHeight":"3","marginLeft":"10px"}}>&copy; MyCompany 2010-2019</span>
          </div>
        </div>
      );
    }

    if (isFp) {
      return (
        <div className="page-demo" style={{"position":"relative","top":"-6px","width":"100%","display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center"}}>
          <div className="header" style={{"height":"30px","width":"100%","background":"#f40"}}></div>
          <div className="content" style={{"height":"170px","width":"100%","background":"#f8f8f8"}}></div>
          <div className="footer" style={{"height":"32px","width":"100%","background":"#ddd"}}></div>
        </div>
      );
    }
  }

  render() {
    const { loading, time, slowFactor } = this.state;
    const { pageTitle, pageUrl } = this.props;

    const { finalFcp, finalFmp, finalLoad, finalFp } = this.getMetrics();
    const lastTime = Math.max(finalLoad, finalFp, finalFcp, finalFmp);
    const arr = [
      { key: 'First Paint', value: finalFp },
      { key: 'First Contentful Paint', value: finalFcp },
      { key: 'First Meaningful Paint', value: finalFmp },
      { key: 'Page Load', value: finalLoad }
    ].sort((a, b) => b.value - a.value);

    const finalTime = time / slowFactor;

    return (
      <div className="paint-demo-wrapper" style={{ position: "relative", width: 480, height: 280, overflow: "hidden" }}>
        <span className="page-title" style={{"position":"absolute","fontSize":"10px","top":"12px","left":"75px"}}>{pageTitle || 'Demo Page'}</span>
        <span className="page-url" style={{"position":"absolute","fontSize":"10px","top":"30px","left":"60px"}}>{pageUrl || 'https://www.example.com'}</span>
        { !loading && <CloseButton /> }
        { loading && <Loading /> }
        { loading && <EmptyFavicon /> }
        { !loading && <Favicon /> }
        <Browser />
        <div className="timer-wrapper" style={{"position":"absolute","bottom":"0","right":"0","padding":"2px","background":"rgba(255, 255, 255, .9)","border":"1px #999 solid","zIndex":"1","textAlign":"right","width":"215px"}}>
          {/* <span className="slow-btn" onClick={this.handleSlow}>{ slowFactor === 1 ? '2x slow' : 'normal'}</span> */}
          { finalTime >= lastTime && <span className="reload-btn" onClick={this.handleReplay} style={{"position":"absolute","bottom":"6px","left":"10px","fontSize":"10px","color":"#999","textDecoration":"underline","cursor":"pointer"}}>replay</span> }
          {arr.map((item, index) => {
            if (item.value <= finalTime && item.value > 0) {
              return <span style={{"display":"block","fontSize":"12px","color":"#999"}} className="timer-entry" key={index}>{item.key}: {item.value.toFixed(2)}ms</span>;
            }
            return null;
          })}
          <span className="timer" style={{"fontFamily":"monospace","fontSize":"16px"}}>{finalTime.toFixed(2)}ms</span>
        </div>
        {this.renderContentByTime(finalTime)}
      </div>
    );
  }
}

export default App;

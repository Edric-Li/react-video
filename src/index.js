import React from 'react';
import PureComponent from '@shealtiel/react-pure-component';

class Video extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none'
    }
  }

  componentDidMount() {
    const element = document.getElementById(this.props.id || 'video');
    if (element) {
      // 已经完成了一段的预加载,可以播放
      element.oncanplay = this.handleShowVideo.bind(this);
      // 发生错误
      element.onerror = this.handleShowVideo.bind(this);
    }
  }

  handleShowVideo() {
    this.setState({display: 'inline-block'});
  }

  render() {
    const {style, text, ...other} = this.props;
    return (
      <video {...other} style={Object.assign(style, {display: this.state.display})}>
        <track kind="captions"/>
        {text || '您的浏览器不支持视频播放.'}
      </video>
    );
  }
}

export default Video;

class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {  
      videos: window.exampleVideoData,
      video: window.exampleVideoData[0],
    
    };
  }
  
  onVideoListClick(event) {
    this.setState({
      video: this.state.videos[event.currentTarget.id]
    });
  }
  
  
  searchButtonClick(event) {
    searchYouTube();
    console.log('hello');
  }
  
  componentDidMount() {
    // console.log('parent mounted');
    // console.log(this.);
  }


  render() {
    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search click={this.searchButtonClick.bind(this)}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} onVideoListClick={this.onVideoListClick.bind(this)}/>
        </div>
      </div>
    </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

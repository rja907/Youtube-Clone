import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyA1DqrDNHqeCPxUNOjCVv7RIlN1rUjOgmI';

//functional component
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// };

//class based component.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
    // YTSearch({ key: API_KEY, term: 'surfboards' }, function(data) {
    //   console.log(data);
    // });
    YTSearch({ key: API_KEY, term: 'surfboards' }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      //{videos:videos}
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

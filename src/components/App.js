import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList/VideoList';
import VideoDetail from './VideoDetail/VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onSearchBarSubmit = async (keyword) => {
    const results = await youtube.get('/search', {
      params: { q: keyword },
    });

    const videos = results.data.items;
    this.setState({ videos });
    if (videos.length > 0) {
      this.setState({ selectedVideo: results.data.items[0] });
    }
  };

  onVideoSelected = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchBarSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelected={this.onVideoSelected}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

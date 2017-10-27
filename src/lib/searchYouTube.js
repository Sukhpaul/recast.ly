var searchYouTube = (options, callback) => {
  
  console.log('options.key', options.key);
  
  var info = {
    q: options.query,
    key: options.key,
    maxResults: options.max,
    type: 'video',
    videoEmbeddable: true,
    part: 'snippet'
    
  };
  
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: info,
    success: function(data) {
      console.log(data);
      callback(data.items);
      // data.items.callback();
      // componentDidMount() {
      //   return data.items;
      // }
    },
    error: function(data) {
      console.log('failed get');
    }
  });
};

window.searchYouTube = searchYouTube;

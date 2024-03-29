// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio id="music" controls autoplay class="player" preload="auto" />',

  initialize: function() {
    var playingSong = this;
    this.$el.on('ended', function(){
      playingSong.model.ended();
    })
  },

  setSong: function(song){
    if (song) {
      this.model = song;
      this.render();
    } else {
      this.el.pause();
      this.el.currentTime = 0;
    }
  },

  render: function(){
     return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});

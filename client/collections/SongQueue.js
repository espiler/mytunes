// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(){
    this.on('ended', function() {
      this.endSong();
    })
  },

  playFirst : function(){
    this.at(0).play();
  },


  endSong: function(){
    this.shift();
    this.playFirst();
  }


});



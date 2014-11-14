// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(){
    this.on('ended', function() {
      this.endSong();
    });
    this.on('add', function() {
      this.checkQueueLength();
      this.makeEntryView();
    });
    this.on('dequeue', function(song){
      if (song !== this.at(0)) {
        this.remove(song);
        return;
      }
      this.endSong();
    })

  },

  playFirst : function(){
    this.at(0).play();
  },


  endSong: function(){
    this.shift();
    if (this.length === 0){
      this.trigger("noSongs", this);
      return;
    }
    this.playFirst();
  },

  checkQueueLength: function(){
    if(this.length === 1 ){
      this.playFirst();
    }
  },

  makeEntryView: function(){
    new SongQueueEntryView({ model: this.at(this.length-1) });
  }

});



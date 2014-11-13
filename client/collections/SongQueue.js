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
      console.log(this)
    });
    this.on('dequeue', function(song){
      this.remove(song);
    })

  },

  playFirst : function(){
    this.at(0).play();
  },


  endSong: function(){
    this.shift();
    if(this.length > 0){
      this.playFirst();
    }
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



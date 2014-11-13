// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: "queuedSong",


  initialize: function(){
    this.render();
  },

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),


  render: function(){
    $('.songQueue').append('<tr><td>('+ this.model.get("artist") + ') </td><td>' + this.model.get('title') + '</td></tr>');
  }

});

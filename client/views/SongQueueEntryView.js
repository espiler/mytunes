// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: "tr",

  initialize: function(){
    this.render();
    var songView = this.$el;
    var song = this;
    this.$('button').on("click", function(){
      song.model.dequeue();
      songView.remove();
    });
  },

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><button>dequeue</button></td>'),


  render: function(){
    $('.songQueue').append(this.$el.html(this.template(this.model.attributes)));
  }

});

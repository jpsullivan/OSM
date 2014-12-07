"use strict";

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var BackboneBrace = require('backbone-brace');
Backbone.$ = $;

var OSM = {

  init: function () {
    var self = this;

    // Load plugin and soundfonts
    MIDI.loadPlugin({
      soundfontUrl: "/static/soundfont/",
      instrument: "acoustic_grand_piano",
      callback: function() {
        // Load sample
        MIDI.Player.loadFile('/static/samples/kashmir.mid', self.startMusic);
      }
    });

    // Note buttons
    _.each(MIDI.noteToKey, function(note, value) {
      $('div.note-list').append('<button class="btn btn-xs btn-note" data-note=' + value + ' >' + note + '</button>');
    });

    // Handlers
    $('.btn-note').on('click', function() {
      MIDI.noteOn(0, $(this).attr('data-note'), 120, 0);
    });
    $('.btn-stop').on('click', function() {
      MIDI.Player.stop();
    });
    $('.btn-play').on('click', function() {
      MIDI.Player.start();
    });

    // Listener
    MIDI.Player.addListener(function(data) {
      switch(data.message) {
      case 128:
        var btn = self.findNote(data.note);
        btn.removeClass('btn-danger');
        break;
      case 144:
        var btn = self.findNote(data.note);
        btn.addClass('btn-danger');
        break;
      }
    });
  },

  startMusic: function () {
    MIDI.Player.start();
  },

  findNote: function (dn) {
    return $('.btn-note[data-note="' + dn + '"]');
  }
};

$(document).ready(function() {
  OSM.init();
});

module.exports = OSM;

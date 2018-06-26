// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
// TODO: ここで jquery-ujs importしなくても大丈夫？ jquery3で大丈夫？
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require rails-ujs
//= require activestorage
//= require_tree .

// ES6って一応使えるのか?
// (() => {
//   $(document).on('click', '.toggle-window', (e) => {
//     e.preventDefault()
//     let panel = $(this).parent().parent()
//     let message_list = panel.find('message-list')

//     panel.find('.panel-body').toggle()
//     panel.attr('class', 'panel panel-default')

//     if (panel.find('.panel-body').is(':visible')) {
//       const height = message_list[0].scrollHeight
//       message_list.scrollTop(height)
//     }
//   })
// })()

(function() {
  $(document).on('click', '.toggle-window', function(e) {
    e.preventDefault();
    var panel = $(this).parent().parent();
    var messages_list = panel.find('.messages-list');

    panel.find('.panel-body').toggle();
    panel.attr('class', 'panel panel-default');

    if (panel.find('.panel-body').is(':visible')) {
      var height = messages_list[0].scrollHeight;
      messages_list.scrollTop(height);
    }
  });
})();
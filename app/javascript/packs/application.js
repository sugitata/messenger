// TODO: webpackerの設定
global.$ = global.jQuery = require('jquery3')
// require('jquery3')
//= require_tree .
require('popper')
require('bootstrap-sprockets')
require('rails-ujs')
require('activestorage')

(() => {
  $(document).on('click', '.toggle-window', (e) => {
    e.preventDefault();
    let panel = $(this).parent().parent();
    let messages_list = panel.find('.messages-list');

    panel.find('.panel-body').toggle();
    panel.attr('class', 'panel panel-default');

    if (panel.find('.panel-body').is(':visible')) {
      var height = messages_list[0].scrollHeight;
      messages_list.scrollTop(height);
    }
  });
})();

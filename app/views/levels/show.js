define([
    'jQuery',
    'Underscore',
    'Backbone',
    'collections/levels',
    'text!templates/levels/show.html',
    'game/assets/loader',
    'game/scenes/level'
], function($, _, Backbone, levels, _show, assetsLoader, levelScene) {

    var Show = Backbone.View.extend({
        el: $("#wrapper"),
        render: function(id) {
            assetsLoader("levels", {
                onLoad: function() {
                    levelScene.load();
                }
            });
            var data = { level: levels.at(parseInt(id,10)-1), _: _ };
            this.el.html(_.template(_show, data));
            $("#ig_menu button").click(function() {
               window.location.replace("#"); 
            });
        }
    });

    return new Show;

});

App = Ember.Application.create({LOG_TRANSITIONS: true,
LOG_TRANSITIONS_INTERNAL: true});


App.Router.map(function () {
    this.resource('tasks', { path: '/' }, function() {
      this.resource('add');
      });
    });


App.TasksRoute = Ember.Route.extend({

    model: function () {
         return $.getJSON('http://localhost/laravel4.2/public/tasks', function (data) {
              $('#tasks').html(data);
            });
    },
});

App.TasksController = Ember.ObjectController.extend({

    total: function () {
        var tasks = this.get('tasks');
        return tasks.length;
    }.property('total', 'tasks'),

    actions: {
        remove: function() {
          var id = $(event.target).siblings('.out').children('#id').html();
          //console.log(id);
          var request = $.getJSON('http://localhost/laravel4.2/public/tasks/destroy/' + id , function () {
          })
          .done(function() {
                location.reload();
              });
        }


      }

});

App.AddController = Ember.ObjectController.extend({
    actions: {
        store: function() {
          var newName = $( "#newName" ).val();
          var request = $.get("http://localhost/laravel4.2/public/tasks/store"+ newName);
          request.done(function( msg ) {
                 console.log(JSON.stringify(msg));
               });
          request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
            console.error(
              "The following error occurred: "+
              textStatus, errorThrown
        );
    });
        }
    }
});

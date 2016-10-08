App = Ember.Application.create({LOG_TRANSITIONS: true,
LOG_TRANSITIONS_INTERNAL: true});


App.Router.map(function () {
    this.resource('tasks', { path: '/' }, function() {
      this.resource('add');
      });
    });


App.TasksRoute = Ember.Route.extend({

    model: function () {
         return $.getJSON('tasks', function (data) {
              $('#tasks').html(data);
            });
    },
});

App.TasksController = Ember.ObjectController.extend({

    total: function () {
        var tasks = this.get('tasks');
        return tasks.length;
    }.property('total', 'tasks'),

    completed: function () {
        var tasks = this.get('tasks');
        return tasks.filterBy('done').length;
    }.property('completed', 'tasks'),

    toComplete: function () {
        var tasks = this.get('tasks');
        return tasks.filterBy('done', 0).length;
    }.property('toComplete', 'tasks'),

    actions: {
        check: function() {
          console.log(event.target);
        },
        remove: function() {
          var id = $(event.target).siblings('.out').children('#id').html();
          //console.log(id);
          var request = $.getJSON('tasks/destroy/' + id , function () {
          })
          .done(function() {
                location.reload();
              });
        },
        checked: function() {
          $(event.target).siblings('#del-button').prop('disabled', true);
          var item = $(event.target).siblings('.out');
          item.addClass("done");
          var id = item.children('#id').html();

          var request = $.getJSON('tasks/' + id + '/edit', function () {
          })
          .done(function() {
                //location.reload();
              });
        }
      }
});

App.AddController = Ember.ObjectController.extend({
    actions: {
        store: function() {
          var newName = $( "#newName" ).val();
          var request = $.post("tasks", { name: newName });
          request.done(function( ) {
                 location.reload();
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

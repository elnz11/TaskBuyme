<!doctype html>
<html class="no-js" lang="he">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Laravel | Welcome</title>

  </head>

  <body>

    <script type="text/x-handlebars"  id="tasks">
      <div dir="rtl">
        <div class="container-fluid">
          <h4>משימות</h4>
          {{#link-to 'add'}}<button class="glyphicon glyphicon-plus"></button>{{/link-to}}
        </div>
        <table class="table">
          <tr class="list-group">
            {{#each task in tasks}}
              <td class="list-group-item" >
                <input type="checkbox" name="done" value="Done">
                <strong {{bind-attr class="task.done:done"}}><span id="id">{{task.id}}</span>.{{task.name}}</strong>
                <a href="#" id="del-button" {{action 'remove'}}>X</a>
              </td>
            {{/each}}
          </tr>
          {{outlet}}
        </table>

      <div id="footer">
        <tr class="alert alert-warning">
          <td class="foot">
               :סה"כ {{total}}
          </td>
          <td class="foot">
               :הושלמו {{completed}}
          </td>
          <td class="foot">
               :לסיום {{toComplete}}
          </td>
        </tr>
      </div>
      </div>
    </script>


    <script type="text/x-handlebars"  data-template-name="add">
      <tr>
        <td>
          <input type="text" id="newName" value="משימה חדשה">
          {{#link-to 'tasks'}}<input type="submit" value="שמור" {{action 'store'}}>{{/link-to}}
        </td>
      </tr>
    </script>

    <script src="js/libs/jquery-1.10.2.js"></script>
    <script src="js/libs/ember-1.10.0.debug.js"></script>
    <script src="js/libs/ember-template-compiler-1.10.0.js"></script>
    <script src="js/app.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="<?php echo URL::asset('css/styles.css'); ?>">

  </body>

</html>

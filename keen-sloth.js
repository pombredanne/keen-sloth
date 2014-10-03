(function(context) {

  // instances

  var KeenSloth = function(parameters) {

    this.parameters = parameters;

    // form element is supplied automatically wire it up (make sure to provide callback!)
    if (typeof this.parameters["formElement"] !== 'undefined') {

      var projectId = this.parameters['projectId'];
      var readKey = this.parameters['readKey'];

      var extraParams = "";
      if (projectId !== undefined) {
        extraParams += " --project " + projectId;
      }
      if (readKey !== undefined) {
        extraParams += " --read-key " + readKey;
      }

      KeenSloth.bindForm(this.parameters["formElement"], extraParams, this.parameters['callback']);

    }

  }

  // statics

  KeenSloth.postCommand = function(text, callback) {

    $.post("http://keen-cli-server.herokuapp.com/crawl", { command : text }, function(json) {
        callback(json);
      }
    );

  };

  KeenSloth.addElements = function() {

    var $formElement = this.parameters['formElement'];

    $("<input>", {
      type : "text",
      name : "command"
    }).appendTo($formElement);

    $("<input>", {
      type : "submit",
      name: "submit",
      value: "Crawl"
    }).appendTo($formElement);

  }

  KeenSloth.bindForm = function($formElement, extraParams, callback) {

    $formElement.on("submit", function(event) {

      // prevent the default submission
      event.preventDefault();

      // make sure you have an input named command in the form
      var $input = $($(this).find(".command")[0]);
      var text = $input.val(); + extraParams;

      if (text !== 'keen') {
        text = text + extraParams;
      }

      // post the command
      KeenSloth.postCommand(text, function(json) {

        callback(json);
        $input.val("");

      })

    });

  }

  // export that sloth
  context.KeenSloth = KeenSloth;

})(this);
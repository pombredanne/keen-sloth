# keen-sloth

### Embed the Keen IO command line interface on any website

![keen-sloth screenshot](http://cl.ly/image/3L0g0a1u2z0p/download/Screen%20Shot%202014-10-04%20at%202.09.10%20PM.png)

Too lazy to switch to terminal when you need to run a Keen IO query? Us too. That's why we made keen-sloth.
keen-sloth lets you run [keen-cli](https://github.com/keenlabs/keen-cli) commands right from your browser, 
the way a sloth would do it.

![Sloth pic](http://c368336.r36.cf1.rackcdn.com/673970-l-1387364465.jpg)

**keen-sloth facts**:

+ One time we took a team trip to Costa Rica, home of sloths. On that trip we had a hackathon. Alex, Andrew, and I decided to make this.
+ Sloths are awesome and cute.

How does it work? keen-sloth makes requests to a [hosted endpoint](http://keen-cli-server.herokuapp.com) that runs keen-cli commands in a safe manner.
It then calls the given callback and passes along those results.

### Installation

Just download and include `keen-sloth.js` on your site.
Currently, jQuery is a dependency, so you'll need to add that before `keen-sloth.js` if you don't have it already. (PS: Sloths LOVE jQuery.)

``` html
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript" src="keen-sloth.js" />
```

### Usage

keen-sloth is initialized by supplying an HTML form, optional project information, and a callback to pass results to. The form should contain
an input or textarea with the class `command`. The text for the command to be sent to the keen-cli will be pulled from there.

Here's a simple snippet that logs the result of any keen-cli command to the console:

``` javascript
var myForm = $("#sloth-form");
new KeenSloth({
  formElement : myForm,
  projectId   : "my-project-id",  // optional
  readKey     : "my-read-key",    // optional
  writeKey    : "my-write-key",   // optional
  apiKey      : "my-master-key",  // optional
  callback: function(slothJson) {
    console.log(slothJson);
  }
});
```

If you don't specify a project ID and API keys up front you can pass them as parameters to CLI commands:

``` shell
keen projects:describe --project my-project-id --master-key my-master-key
```

### Examples

See an [example here](http://keen.github.io/keen-sloth). You'll find a text box that you can type keen-cli commands into. Go ahead, try it out!

### Contributing

Contributors welcome! Temporarily suppress your inner sloth and send in an issue or a pull request!

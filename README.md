# keen-sloth

### Embed the Keen IO command line interface on any website

Too lazy to switch to terminal when you need to run a Keen IO query? Us too. That's why we made keen-sloth.
keen-sloth lets you run [keen-cli](https://github.com/keenlabs/keen-cli) commands right from your browser, 
the way a sloth would do it.

![Sloth pic](http://c368336.r36.cf1.rackcdn.com/673970-l-1387364465.jpg)

**keen-sloth facts**:

+ One time we took a team trip to Costa Rica, home of sloths. On that trip we had a hackathon. Alex, Andrew, and I decided to make this.
+ Sloths are awesome and cute.

How does it work? keen-sloth makes requests to a hosted endpoint that runs keen-cli commands in a safe manner.
You can also visit the hosted endpoint, [http://keen-sloth.herokuapp.com](http://keen-sloth.herokuapp.com), to see keen-cli documentation.

### Installation

Just download and include `keen-sloth.js` on your site.
Currently, jQuery is a dependency, so you'll need to add that before `keen-sloth.js` if you don't have it already.

``` html
<script type="text/javascript" src="keen-sloth.js" />
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
```

### Usage

keen-sloth is initialized by supplying an HTML element name to use as text input, optional project information, and a callback to pass results to.

Here's a simple snippet that logs the result of any keen-cli command to the console.

``` javascript
var myInput = $("#input.sloth");
var slothLineInterface = new KeenSloth({
  element   : myInput,
  projectId : "my-project-id",  // optional
  readKey   : "my-read-key",    // optional
  writeKey  : "my-write-key",   // optional
  apiKey    : "my-master-key",  // optional
  callback: function(jsonResult) {
    console.log(jsonResult);
  }
});
```

If you don't specify a project ID and API keys up front you can pass them on as CLI parameters themselves:

``` shell
keen projects:describe --project my-project-id --master-key my-master-key
```

### Examples

Clone this repository and open up the index.html page. You'll see a text box that you can type keen-cli commands into. Go ahead, try it out!

### Contributing

Contributors welcome! Temporarily suppress your inner sloth and send in an issue or a pull request!

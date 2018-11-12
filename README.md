# JCirclize

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/807123315cce4d12a7132181203cf46e)](https://www.codacy.com/app/francescovallone/jCirclize?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=francescovallone/jCirclize&amp;utm_campaign=Badge_Grade)

## Description
Percentage Circles Plugin for [jQuery](https://jquery.com/)

## Installation

Download the [repository][repo].

## Usage
### Load The Plugin

Use `<script src="dist/jquery.jCirclize.js"></script>` to load the plugin inside your HTML page.
And use `<link href="css/jCirclize.css" rel="stylesheet" type="text/css">` to load the style inside your HTML page.

*REMEMBER:* You have to load these two files and JQuery to use this plugin.

## Basic Usage

You can just call the function without any options.
~~~javascript
$(document).ready(function() {
     $('#object').circlize();
 });
~~~
Calling the function you set the element to the default parameters, it creates something like this:

![Preview](https://i.imgur.com/bqkjhDO.png)

## Default `options`

You can customize the percentage circle using some options of jCirclize. These are the defaults.

~~~javascript
$(document).ready(function() {
     $('#object').circlize({
		radius: 100, // The radius of the circle
		perc: 50, //The Percentage covered by the foreground
		background: "rgba(20,20,20,0.5)",
		foreground: "#1a1a1a",
		stroke: 20 // The width of the stroke
	 });
 });
~~~

This is my first plugin for JQuery, I hope you like it.

[repo]: https://github.com/francescovallone/jCirclize/archive/master.zip

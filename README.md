Stanford Student Space Initiative
=================================

Website for Stanford Student Space Initiative. Copyright Stanford Student Space
Initiative, Sept 17, 2013 under the MIT license.

# Running the dev server

## Local Ruby version

While the project uses JRuby, during development I encourage you to not use
JRuby. This is because it takes a long time to load, which makes linting your
code with Rubocop annoyingly slow. When you're developing, remove the line in
the `Gemfile` that starts with `ruby '1.9.3'...`, and run `bundle install`.
Then, you can restore `Gemfile` to its original form again. This will let you
use MRI, the default Ruby implementation, during development.

## Actually running the server

It's simple! Just...

1. Run `bundle install` to install dependencies, as described above if not
   using JRuby.
2. Run `./run.sh`, and point your  browser to `localhost:5000`. Good deal.

### Notes on development

Once you've started the dev server, you will need to restart it if you add any
assets that didn't exist before. You also need to restart the server if you
update the actual `app.rb` file, or configuration for Sinatra's runtime itself.
But, if you edit an existing view or asset, that will reflect immediately
without restarting the server.

# The stack

This site runs on JRuby on the Puma webserver.

JRuby is an implementation of Ruby on the JVM. I chose JRuby because it
provides true multithreading, which means that it can in theory serve pages
more efficiently than MRI (the reference Ruby interpreter) can using a
multithreaded web server like Puma.

I ultimately chose not to use Rubinius for now, although Puma was made for it,
because of its current instability in development. Once things even out a bit
more, it may be considered in place of JRuby.

# Installing Ruby 1.9.3 on your machine

## Mac and Unix distros

Choose your favorite way of installing Ruby 1.9.3. That could be using a
Ruby version manager like [rvm](http://rvm.io/), or on Mac, using
[homebrew](http://brew.sh/) to install `rbenv` and `ruby-build`, or just go to
[Ruby's website](https://www.ruby-lang.org/en/downloads/) and install from
source using their instructions.

### `rvm` instructions
1. Download `rvm` with dotfiles patching by running this command:

   ```
   \curl -L https://get.rvm.io | bash -s stable --auto-dotfiles
   ```
2. Install `ruby-1.9.3` using `rvm install ruby-1.9.3`. This will take a
   while.
3. Set it as your default ruby as so:

   ```
   rvm use --default ruby-1.9.3
   ```

## Windows

Follow the instructions at [Ruby's
website](https://www.ruby-lang.org/en/downloads/). I'm unaware of how Windows
works exactly but you should be able to do it.

# Happy developing!

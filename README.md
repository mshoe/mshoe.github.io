# mshoe.github.io

## Local development

The blog pages use Jekyll layouts, so they should be served through Jekyll instead of opened directly from the filesystem. Opening `blog/*.html` directly will show the unprocessed Liquid/front matter source rather than the final page.

1. Install the Ruby version specified in `.ruby-version`. With rbenv:

   ```sh
   rbenv install
   ```

2. Confirm that Ruby and RubyGems use the same installation:

   ```sh
   ruby -v
   which ruby
   which gem
   gem env home
   ```

   With rbenv, `ruby` and `gem` should normally resolve under `~/.rbenv/shims`,
   and `gem env home` should not be
   `/Library/Ruby/Gems/2.6.0`. If the shell still finds `/usr/bin/gem`, clear
   its command cache with `hash -r` or open a new terminal.

3. Install Bundler:

   ```sh
   gem install bundler
   ```

   If `ruby -v` is correct but `gem` still invokes the system Ruby, run the gem
   command through the selected Ruby explicitly:

   ```sh
   ruby -S gem install bundler
   ```

   Do not use `sudo gem install`; that modifies macOS's system Ruby.

   If Bundler reports permission errors under `~/.bundle`, repair files created
   by an earlier `sudo` invocation, then rerun the command without `sudo`:

   ```sh
   sudo chown -R "$(id -un)":staff ~/.bundle
   ```

4. Install the GitHub Pages/Jekyll dependencies:

   ```sh
   bundle install
   ```

5. Serve the site locally:

   ```sh
   bin/serve
   ```

6. Open <http://localhost:4000/blog/> in your browser.

   If port 4000 is already occupied, `bin/serve` automatically uses the next
   available port and prints the correct URL. Set `PORT` to request a different
   starting port, for example `PORT=8080 bin/serve`.

If dependency resolution fails on a newer Ruby version, use the Ruby version recommended by GitHub Pages for the `github-pages` gem.

The `bin/jekyll` wrapper preloads `_plugins/ruby_compat.rb`, which restores the
deprecated, no-op taint methods that Liquid 4.0.3 expects but Ruby 3.2 removed.
`bin/serve` builds the site and serves `_site` with Python, avoiding Jekyll 3's
dependency on the WEBrick gem removed from modern Ruby installations.

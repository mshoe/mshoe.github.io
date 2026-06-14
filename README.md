# mshoe.github.io

## Local development

The blog pages use Jekyll layouts, so they should be served through Jekyll instead of opened directly from the filesystem. Opening `blog/*.html` directly will show the unprocessed Liquid/front matter source rather than the final page.

1. Install Ruby 3.1 or newer.
2. Install Bundler:

   ```sh
   gem install bundler
   ```

3. Install the GitHub Pages/Jekyll dependencies:

   ```sh
   bundle install
   ```

4. Serve the site locally:

   ```sh
   bundle exec jekyll serve
   ```

5. Open <http://localhost:4000/blog/> in your browser.

If dependency resolution fails on a newer Ruby version, use the Ruby version recommended by GitHub Pages for the `github-pages` gem.

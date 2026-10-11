# Lingyi Kong — Personal Homepage

Live site: https://konglingyi11.github.io

An English academic homepage based on [Academic Pages](https://github.com/academicpages/academicpages.github.io), with a responsive custom layout, a profile, research focus, and a contact section. The original theme layouts remain available for additional pages.

## Update your content

- `_data/profile.yml`: name, affiliation, research focus, introduction, GitHub, and optional email, portrait, CV, Google Scholar, or ORCID.
- `_data/projects.yml`: optional original projects. The project section, navigation, and button stay hidden while this list is empty.
- `_data/publications.yml`: verified publications. The homepage shows this section and its navigation link when the list contains entries.
- `_config.yml`: site title, search description, GitHub repository, and site URL.
- `_pages/about.md`: homepage entry and layout, matching the Academic Pages tutorial.
- `_data/navigation.yml`: navigation titles and links. Projects and Publications stay hidden while their lists are empty.
- `assets/css/home.css`: homepage colors, typography, and responsive layout.

Blank optional profile fields stay hidden. Upload a real portrait to `images/`, then set `avatar: /images/portrait.jpg`. Upload a CV to `files/`, then set `cv: /files/cv.pdf`. No sample academic records or invented publications are included.

Publication format:

```yaml
- title: Your actual paper title
  authors: Your actual author list
  venue: Actual venue
  year: 2026
  url: https://example.com/your-paper
  code: https://github.com/your-account/your-code
```

These are format examples, not personal records. Replace them with verified details before adding entries.

## Publish updates

Changes pushed to `main` run `.github/workflows/pages.yml`, which builds the Jekyll site and deploys it to GitHub Pages. In **Settings → Pages**, the source is **GitHub Actions**. Check the **Actions** tab if an update fails.

```sh
git add .
git commit -m "Update homepage content"
git push origin main
```

## Preview locally

With Ruby 3.2 and Bundler installed (Windows RubyInstaller, WSL, Linux, or macOS):

```sh
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Open http://127.0.0.1:4000. Restart Jekyll after editing `_config.yml`. A production check uses:

```sh
JEKYLL_ENV=production bundle exec jekyll build --strict_front_matter --trace
```

## Content sources and license

The affiliation and research focus were supplied by Lingyi Kong; the English school name follows the university's [official site](https://global.cumt.edu.cn/Global_Research/Find_an_Expert/School_of_Computer_Science___Technology.htm).

Academic Pages and the underlying Minimal Mistakes theme are covered by the retained `LICENSE`. See [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) for deployment details.

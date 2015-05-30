grunt clean
grunt build
git push origin master
git push origin --delete gh-pages
git subtree push --prefix dist origin gh-pages

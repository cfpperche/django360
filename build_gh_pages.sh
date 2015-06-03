
MESSAGE=$1

grunt clean
grunt build
git add --all
git commit -m 'teste 0.0.1'
git push origin --delete gh-pages
git push origin master
git subtree push --prefix dist origin gh-pages




MESSAGE=$1

echo +++++ GRUNT CLEAN +++++
grunt clean

echo +++++ GRUNT BUILD +++++
grunt build

echo +++++ GIT ADD --ALL +++++
git add --all

echo +++++ GIT COMMIT +++++
git commit -m 'teste 0.0.2'

echo +++++ GIT DELETE GH_PAGES +++++
git push origin --delete gh-pages

echo +++++ GIT PUSH +++++
git push origin master

echo +++++ GIT PUSH GH_PAGES +++++
git subtree push --prefix dist origin gh-pages



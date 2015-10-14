test:
	node tests/basictests.js

try:
	node tools/try-it.js

concat-text-files:
	awk 'FNR==1{print "\n****\n"}{print}' * > concatenated.txt

remove-urls:
	sed 's/http.*//' data/folger-shakespeare-library.txt > data/no-http.txt

template-offsets:
	node node_modules/.bin/get-file-line-offsets-in-json data/folger-shakespeare-library.txt > data/shakeslineoffsets.json

pushall:
	git push origin master && npm publish

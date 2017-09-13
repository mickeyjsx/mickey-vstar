dir = site
tar = vstar
msg = Updated by travis: `date +'%Y-%m-%d %H:%M:%S'`

update:
	cd $(dir) && rm -rf $(tar) && mkdir $(tar) && cd ../
	cp -PR dist/* $(dir)/$(tar)
	cd $(dir) && git add -A && git commit -m "$(msg)"

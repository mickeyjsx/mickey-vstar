dir = site
tar = todo
msg = Update from travis: `date +'%Y-%m-%d %H:%M:%S'`

update:
	cd $(dir) && rm -rf $(tar) && mkdir $(tar) && cd ../
	cp -PR dist/* $(dir)/$(tar)
	cd $(dir) && git add -A && git commit -m "$(msg)"

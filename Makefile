msg  = Update from travis: `date +'%Y-%m-%d %H:%M:%S'`
repo_name  = mickeyjsx.github.com
target_dir = mickey-vstar

deploy:
	cd $(repo_name) && rm -rf $(target_dir) && mkdir $(target_dir) && cd ../
	cp -PR dist/* $(repo_name)/$(target_dir)
	cd $(repo_name) git add -A && git commit -m "$(msg)"

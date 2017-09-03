msg  = Update from travis: UTC-5 `date +'%Y-%m-%d %H:%M:%S'`

commit:
	ls
	git status
	git add -A
	git commit -m "$(msg)"

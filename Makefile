msg  = Update from travis: `date +'%Y-%m-%d %H:%M:%S'`

commit:
  ls
	git add -A && git commit -m "$(msg)"

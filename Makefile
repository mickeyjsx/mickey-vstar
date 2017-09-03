msg  = Update from travis: AMT `date +'%Y-%m-%d %H:%M:%S'`

commit:
	ls && git add -A && git commit -m "$(msg)"

msg  = Update from travis: `date +'%Y-%m-%d %H:%M:%S'`

commit:
	cd mickeyjsx.github.com && git commit -m "$(msg)"

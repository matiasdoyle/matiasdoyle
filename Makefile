dir = `pwd`
date = `date "+%Y-%m-%d-%H-%M-%S"`

create-logs:
	mkdir $(dir)/logs

forever:
	forever start -l $(dir)/logs/$(date)-forever.log \
	-o $(dir)/logs/$(date)-out.log -e $(dir)/logs/$(date)-err.log app.js
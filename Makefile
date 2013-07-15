dir = `pwd`
date = `date "+%Y-%m-%d-%H-%M-%S"`
env = NODE_ENV=production
nodefly = 

create-logs:
	mkdir $(dir)/logs

forever:
	$(env) NODEFLY_KEY=$(nodefly) \
	forever start -l $(dir)/logs/$(date)-forever.log \
	-o $(dir)/logs/$(date)-out.log -e $(dir)/logs/$(date)-err.log app.js
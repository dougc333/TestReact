#/bin/bash
docker build -t newstuff:stuff .
#verify image newstuff/stuff exists
docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true newstuff:stuff

all: run

NAME = portfolio

build:
	docker build -t ${NAME} .

run: build
	docker run -p 80:80 -p 443:443 --name ${NAME} ${NAME}

clean:
	docker stop ${NAME} && docker rm ${NAME} && docker rmi ${NAME}
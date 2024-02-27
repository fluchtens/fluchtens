all: build

build:
	docker-compose up -d --build

up: down
	docker-compose -d up

down:
	docker-compose down

clean:
	docker-compose down --rmi all

fclean:
	docker-compose down --rmi all --volumes

.PHONY: all build up down clean fclean

.SILENT:

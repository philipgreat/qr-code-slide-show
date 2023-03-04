all:
	PUBLIC_URL=./  yarn build
	ssh philip@www.7gas.cn "mkdir -p /var/www/7gas/qr-slide"
	rsync -avz build/* philip@www.7gas.cn:/var/www/7gas/qr-slide/
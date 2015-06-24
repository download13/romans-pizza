FROM download13/caddy

RUN mkdir -p /var/www/html
WORKDIR /var/www/html

ADD . /var/www/html

CMD ["caddy"]

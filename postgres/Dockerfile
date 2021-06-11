FROM postgres:latest

# COPY . .

ADD ./init-db.sh /docker-entrypoint-initdb.d/
ADD ./ecom-dump.sql /db-dumps/
# RUN createdb ecom
# RUN psql --dbname ecom -f ecom-dump.sql
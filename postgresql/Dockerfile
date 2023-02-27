FROM postgres:10.3

ENV POSTGRES_PASSWORD arturo_root
ENV POSTGRES_DB ViamaticaTest
COPY up.sql /docker-entrypoint-initdb.d/1.sql
CMD ["postgres"]

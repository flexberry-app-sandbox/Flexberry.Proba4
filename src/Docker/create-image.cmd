docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proba_4/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t proba_4/app ../..

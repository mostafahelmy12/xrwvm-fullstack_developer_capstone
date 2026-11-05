#!/bin/sh
set -e

echo "Starting Express database microservice on port 3030..."
node server/database/app.js &

echo "Starting Flask sentiment analysis microservice on port 5050..."
python server/djangoapp/microservices/app.py &

echo "Running database migrations..."
python server/manage.py migrate --noinput

echo "Seeding car catalog..."
python -c "import sys, django; sys.path.append('server'); import os; os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'djangoproj.settings'); django.setup(); from djangoapp.populate import initiate; initiate()"

echo "Starting Gunicorn on port ${PORT:-8000}..."
exec gunicorn --bind 0.0.0.0:${PORT:-8000} --chdir server djangoproj.wsgi:application --workers 2 --timeout 120

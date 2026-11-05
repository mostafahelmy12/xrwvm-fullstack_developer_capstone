FROM python:3.13-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PORT=8000
ENV CI=false

# Install Node.js, npm, curl, and build tools
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    nodejs \
    npm \
    gcc \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy project files
COPY . /app/

# Install Python requirements
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r server/requirements.txt flask nltk && \
    python -c "import nltk; nltk.download('vader_lexicon')"

# Install microservice dependencies and build frontend
RUN cd server/database && npm install && \
    cd /app/server/frontend && npm install --legacy-peer-deps && npm run build

# Collect static files for Whitenoise
RUN python server/manage.py collectstatic --noinput

# Make startup script executable
RUN chmod +x /app/start.sh

EXPOSE 8000

CMD ["/app/start.sh"]

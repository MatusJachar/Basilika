FROM python:3.11-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application
COPY server.py .
COPY uploads/ uploads/

# Create audio directory
RUN mkdir -p uploads/audio

# Expose port
EXPOSE 8001

# Run server
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8001"]

# Basilika sv. Jakuba - Backend API

FastAPI backend for the Basilika tour guide mobile app.

## Quick Start

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Add Audio Files

Place your audio files in the `uploads/audio/` directory:

```
uploads/
└── audio/
    ├── stop1_sk.mp3
    ├── stop1_en.mp3
    ├── stop1_pl.mp3
    ├── stop1_de.mp3
    ├── stop1_hu.mp3
    ├── stop2_sk.mp3
    ... (35 files total)
```

### 3. Run the Server

```bash
# Development
uvicorn server:app --reload --host 0.0.0.0 --port 8001

# Production
uvicorn server:app --host 0.0.0.0 --port 8001 --workers 4
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/languages` | List all 5 languages |
| GET | `/api/tour-stops` | List all 7 tour stops |
| GET | `/api/tour-stops/{id}` | Single tour stop |
| GET | `/api/basilica-info?language=sk` | Welcome info per language |
| GET | `/api/site-settings` | Logo, splash image, site name |
| GET | `/api/offline-package` | Full data for offline caching |
| GET | `/api/uploads/audio/{filename}` | Audio file streaming |

## Audio File Naming Convention

```
stop{N}_{lang}.mp3
```

Where:
- `N` = stop number (1-7)
- `lang` = language code (sk, en, pl, de, hu)

Examples:
- `stop1_sk.mp3` - Stop 1, Slovak
- `stop3_en.mp3` - Stop 3, English
- `stop7_hu.mp3` - Stop 7, Hungarian

## Deployment Options

### Docker

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8001
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8001"]
```

### Systemd Service

```ini
[Unit]
Description=Basilika API
After=network.target

[Service]
User=www-data
WorkingDirectory=/var/www/basilika-api
ExecStart=/usr/local/bin/uvicorn server:app --host 0.0.0.0 --port 8001
Restart=always

[Install]
WantedBy=multi-user.target
```

## Mobile App Configuration

Update your mobile app's API base URL to point to your server:

```javascript
// In your mobile app constants/api.ts
export const API_BASE_URL = 'https://your-server.com/api';
```

## Data Customization

All tour data is stored directly in `server.py`. To modify:

1. Edit the `TOUR_STOPS` list to change stop content
2. Edit `BASILICA_INFO` for welcome messages
3. Edit `SITE_SETTINGS` for branding
4. Edit `LANGUAGES` to add/remove languages

## License

Basilika sv. Jakuba Audio Guide © 2026

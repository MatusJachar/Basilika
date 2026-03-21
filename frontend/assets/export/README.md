# Bazilika sv. Jakuba - Data Export

This folder contains the complete data export for migrating the Bazilika Audio Guide to a self-hosted solution.

## Files Included

### 1. `complete_database_export.json`
Complete database dump containing:
- **Languages**: All 5 language configurations (SK, EN, PL, DE, HU)
- **Site Settings**: Logo URL, splash image, site name, welcome text
- **Basilica Info**: Welcome messages in all 5 languages
- **Tour Stops**: All 7 tour stops with:
  - Unique IDs
  - Stop numbers
  - Image URLs
  - Duration in seconds
  - Translations in all 5 languages (title, description, audio_url)

### 2. `audio_files_mapping.json`
Complete mapping of all 35 audio files:
- 7 stops × 5 languages = 35 MP3 files
- Filename pattern: `stop{N}_{lang}.mp3`
- Full download URLs

### 3. `image_assets.json`
All image assets:
- Logo image
- Splash/hero image
- 7 tour stop images

## Audio Files Download

To download all audio files, use these URLs:

```bash
# Stop 1
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop1_sk.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop1_en.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop1_pl.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop1_de.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop1_hu.mp3

# Stop 2
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop2_sk.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop2_en.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop2_pl.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop2_de.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop2_hu.mp3

# Stop 3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop3_sk.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop3_en.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop3_pl.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop3_de.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop3_hu.mp3

# Stop 4
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop4_sk.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop4_en.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop4_pl.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop4_de.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop4_hu.mp3

# Stop 5
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop5_sk.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop5_en.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop5_pl.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop5_de.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop5_hu.mp3

# Stop 6
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop6_sk.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop6_en.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop6_pl.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop6_de.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop6_hu.mp3

# Stop 7
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop7_sk.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop7_en.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop7_pl.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop7_de.mp3
wget https://basilika-tour.preview.emergentagent.com/api/uploads/audio/stop7_hu.mp3
```

## Image Assets Download

```bash
# Logo
wget "https://customer-assets.emergentagent.com/job_art-tour-gallery/artifacts/3xzc95u0_Spi%C5%A1sk%C3%A9_biskupstvo.svg.png" -O logo.png

# Splash/Hero
wget "https://customer-assets.emergentagent.com/job_art-tour-gallery/artifacts/jxtx73d9_Bazilika%20LE%20outside.jpg" -O splash.jpg

# Tour Stop Images
wget "https://customer-assets.emergentagent.com/job_2bdf76fb-d954-4619-b212-78ece4c66aa4/artifacts/98akeefs_1.Bazilika%20LE%201.jpg" -O stop1.jpg
wget "https://customer-assets.emergentagent.com/job_2bdf76fb-d954-4619-b212-78ece4c66aa4/artifacts/u98mcfsc_2.Bazilika%20LE.jpg" -O stop2.jpg
wget "https://customer-assets.emergentagent.com/job_2bdf76fb-d954-4619-b212-78ece4c66aa4/artifacts/1tujom70_3.Bazilika%20LE.jpg" -O stop3.jpg
wget "https://customer-assets.emergentagent.com/job_2bdf76fb-d954-4619-b212-78ece4c66aa4/artifacts/he3o7bmz_4.Bazilika%20LE.jpg" -O stop4.jpg
wget "https://customer-assets.emergentagent.com/job_art-tour-gallery/artifacts/6a0oa1j4_5.Bazilika.jpg" -O stop5.jpg
wget "https://customer-assets.emergentagent.com/job_art-tour-gallery/artifacts/517moqq7_6.Bazilika%20LE.jpg" -O stop6.jpg
wget "https://customer-assets.emergentagent.com/job_art-tour-gallery/artifacts/alubrfy5_7.Bazilika%20LE.jpg" -O stop7.jpg
```

## Data Summary

| Content Type | Count |
|--------------|-------|
| Languages | 5 |
| Tour Stops | 7 |
| Audio Files | 35 |
| Images | 9 (1 logo + 1 splash + 7 stops) |
| Total Duration | ~22 minutes |

## For Self-Hosted Backend

When setting up your own backend, you'll need to:

1. Import `complete_database_export.json` into your MongoDB database
2. Download and host all audio files
3. Download and host all image assets
4. Update the URLs in your database to point to your self-hosted assets

The JSON structure matches the original API schema, making it easy to import.

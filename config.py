import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

class Config:
    BASE_DIR = BASE_DIR
    SECRET_KEY = os.environ.get('SECRET_KEY', 'apex-sports-league-super-secret-key-2026-xyz!')
    # Set DATABASE_PATH to a persistent mounted volume path in production.
    DATABASE = os.environ.get(
        'DATABASE_PATH',
        os.path.join(BASE_DIR, 'instance', 'sports_league.db')
    )
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SAMESITE = 'Lax'
    MAX_CONTENT_LENGTH = 16 * 1024 * 1024  # 16 MB max upload
    LEAGUE_NAME = "APEX PREMIER LEAGUE"
    LEAGUE_TAGLINE = "The Ultimate Football Championship"
    LEAGUE_SEASON_CURRENT = 2026

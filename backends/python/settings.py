from dotenv import load_dotenv
load_dotenv()

import os
POSTGRES_URL = os.getenv("POSTGRES_URL")

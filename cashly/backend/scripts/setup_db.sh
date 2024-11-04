#!/bin/bash

echo "Setting up the database..."
mongo <<EOF
use cashly
db.createCollection("users")
db.createCollection("expenses")
db.createCollection("goals")
db.createCollection("rewards")
EOF

echo "Database setup completed."

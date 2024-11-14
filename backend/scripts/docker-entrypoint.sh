#!/bin/bash
echo "Starting server setup..."
npm install
echo "Running migrations..."
npm run migrate
echo "Starting server..."
npm start

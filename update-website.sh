#!/bin/bash

cd "$(dirname "$0")"
git fetch
sudo cp . /var/www/html/ -rf

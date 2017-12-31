#!/bin/bash

cd "$(dirname "$0")"
sudo git pull 
sudo cp . /var/www/html/ -rf

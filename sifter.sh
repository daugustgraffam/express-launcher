#!/bin/bash
echo -e "\033[1mDUST (the Direct Utility Setup Thingy) is launching your application.\033[0m"
echo "Checking to see if you use NVM"
nvm use 
echo "Getting the latest tests..."
git submodule update --recursive --remote
echo "Opening in your preferred browser..."
open http://localhost:9002 && node index

#!/bin/bash
#gets specified version of node
nvm install
#install playwright
#npm i @playwright/test@1.28.0
# install supported browsers
# npx playwright install
npm install
# git update-index --assume-unchanged ecom-playwright/tests/sifter/tools/sifter-fe/results/logs/*
git submodule init
git submodule update --recursive --remote
cd ecom-playwright
cd ./tests/siftVac/sifter-fe/
mkdir results
cd results
echo $PWD
mkdir logs
touch ./logs/existingUserLogs.txt
touch ./logs/newUserLogs.txt
touch ./logs/squareSyncLogs.txt
cd ../../
echo $PWD
mkdir data
touch ./data/branch.txt
echo 'staging.weebly.net' > ./data/branch.txt
cd ../..
echo -e "\033[1m
~~~
~~~
~~~
All good. DUST (the Direct Utility Setup Thingy) has completed initial setup.
~~~
~~~
~~~
\033[0m"
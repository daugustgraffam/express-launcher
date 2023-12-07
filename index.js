const express = require('express');
const app = express();
const fs = require('fs');
const child_process = require('child_process');

//Register View Engine
app.set('view-engine', 'ejs');

//Middleware
app.use(express.urlencoded({extended : true}));
app.use(express.static("./public"));
//Disable caching
app.set('etag', false)
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store')
  next()
})

const PORT = process.env.PORT || 9002;
app.listen(PORT, () => console.log('Server started on port 9002'));

app.get('/', (req, res) =>{
    res.render('index.ejs')
});

app.get('/results', (req, res) =>{
  function parseString(str) {
    return str.replace(/\;/g, '<br>').replace(/\✖/g, '<br>✖').replace(/\|/g, '<br> ✖')}
  var existingTest = fs.readFileSync('./ecom-playwright/tests/siftVac/sifter-fe/results/logs/existingUserLogs.txt', 'utf-8').toString();
    let existingResults = parseString(existingTest)
  var newTest = fs.readFileSync('./ecom-playwright/tests/siftVac/sifter-fe/results/logs/newUserLogs.txt', 'utf-8').toString();
    let newResults = parseString(newTest)
  var sqsyncTest = fs.readFileSync('./ecom-playwright/tests/siftVac/sifter-fe/results/logs/squareSyncLogs.txt', 'utf-8').toString();
    let sqSyncResults = parseString(sqsyncTest)

  res.render('results.ejs', {existingResults, newResults, sqSyncResults})
});

app.get('/new-user-logs', (req,res) =>{
  function parseString(str) {
    return str.replace(/\;/g, '<br>').replace(/\✖/g, '<br>✖').replace(/\|/g, '<br> ✖')}
  const readNewLogs= fs.readFileSync('./pages/utilities/newResults.txt', 'utf-8').toString();
  let newLogs= readNewLogs
  res.render('new-user-logs.ejs',{newLogs});
})

app.get('/existing-user-logs', (req,res) =>{
  function parseString(str) {
    return str.replace(/\;/g, '<br>').replace(/\✖/g, '<br>✖').replace(/\|/g, '<br> ✖')}
  const readExistingLogs= fs.readFileSync('./pages/utilities/existingResults.txt', 'utf-8').toString();
  let existingLogs=readExistingLogs;
  res.render('existing-user-logs.ejs',{existingLogs});
})

app.get('/sqsync-user-logs', (req,res) =>{
  function parseString(str) {
    return str.replace(/\;/g, '<br>').replace(/\✖/g, '<br>✖').replace(/\|/g, '<br> ✖')}
  const readSqsyncLogs= fs.readFileSync('./pages/utilities/sqsyncResults.txt', 'utf-8').toString();
  let sqSyncLogs= readSqsyncLogs;
  res.render('sqsync-user-logs.ejs',{sqSyncLogs});
})

  app.post('/', (req, res) =>{
    userInfo = req.body;
    let branch = userInfo.branchname
    let branchname = "https://" + branch + ".weebly.net/".toString()
    const consent = userInfo.accountType;

    if(consent == "agreed"){
      const initLogs = "echo '<p class=\'preparingTests\'>Preparing Tests</p>' | tee ./ecom-playwright/tests/siftVac/sifter-fe/results/logs/existingUserLogs.txt ./ecom-playwright/tests/siftVac/sifter-fe/results/logs/newUserLogs.txt ./ecom-playwright/tests/siftVac/sifter-fe/results/logs/squareSyncLogs.txt"
      //const launchTests = " npx playwright test ./ecom-playwright/tests/siftVac/sifter-fe/* --config=./ecom-playwright/playwright.config.js"
      const launchTests = "npx playwright test --project=sifterFe --config=./ecom-playwright/playwright.config.js"
      const clearReportPort = 'kill $(lsof -t -i:"9323")'

      fs.writeFile('./ecom-playwright/tests/siftVac/data/branch.txt', branchname, err =>{
        if (err)
          console.log(err);
        else {
          console.log("The tests will be ran on the branch:");
          console.log(fs.readFileSync('./ecom-playwright/tests/siftVac/data/branch.txt', "utf8"));
      }})

      //Spawning child processes for each script

      child_process.spawn(initLogs, {
        stdio: "inherit",
        shell: true,
        detached: true,
      });

      child_process.spawn(clearReportPort, {
        stdio: "inherit",
        shell: true,
        detached: true,
      });

      child_process.spawn(launchTests, {
        stdio: "inherit",
        shell: true,
      });

      console.log('Working from ' +branchname)
      res.redirect('/results')
    }
  });

    app.use((req, res) =>{
      res.status(404).render('404.ejs');
    });



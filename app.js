var express = require('express');
var app = express();
var totalSize=0;
/* SF OAuth request, redirect to SF login */
app.get('/oauth/auth', function(req, res) {
 res.redirect(oauth2.getAuthorizationUrl({scope: 'api id web'}));
});
app.get('/', function (req, res) {
 res.send('Hello World!'+totalSize);
});
var jsforce = require('jsforce');
var conn = new jsforce.Connection({
 // you can change loginUrl to connect to sandbox or prerelease env.
 loginUrl : 'https://login.salesforce.com'
});
var username='preethi.sampathrajan@cognizant.com';
var password='Pretty@nov09EeSOGZNbL8t5X48bboNjsrEBZ';
conn.login(username, password, function(err, userInfo) {
 if (err) { return console.error(err); }
 // Now you can get the access token and instance URL information.
 // Save them to establish connection next time.
 console.log(conn.accessToken);
 console.log(conn.instanceUrl);
 // logged in user property
 console.log("User ID: " + userInfo.id);
 console.log("Org ID: " + userInfo.organizationId);
var records = [];
conn.query("SELECT Id, Name FROM Account", function(err, result)
 {
 if (err) { return console.error("z"+err); }
 console.log("total : " + result.totalSize);
 totalSize=result.totalSize;
 console.log("fetched : " + result.records.length);
 conn.search("FIND {Un*} IN ALL FIELDS RETURNING Account(Id, Name), Lead(Id, Name)",
  function(err, res) 
  {
    if (err) 
{ return console.error(err); }
    console.log(res);
	conn.sobject("Contact")
  .find({ CreatedDate: jsforce.Date.TODAY }, '*') // fields in asterisk, means wildcard.
  .execute(function(err, records) {
    if (err) { return console.error(err); }
    console.log(records);
	
  conn.sobject("Case").retrieve("5007F00000FzH9lQAF", function(err, Case) {
  if (err) { return console.error(err); }
  console.log("CaseNumber : " + Case.CaseNumber);
  console.log("Origin : " + Case.Origin);
  console.log("Status : " + Case.Status);
  });
  //conn.query("SELECT Name, (SELECT Id, AccountId, CaseNumber FROM Cases) FROM Account WHERE Name ='TestAcct1' and Id IN (SELECT AccountId FROM Case)", function(err, results)
   
  //conn.sobject("Case").find({CreatedById: userInfo.id} ,'CreatedById').execute(function(err,results)

 //console.log("total : " + results.totalSize);
 //totalSize=results.totalSize;
 //console.log("fetched : " + results.records.length);
 // for (var i=0; i<results.length; i++) 
 // {
 //     var result = results[i];
      //console.log("First Name: " + Case.CaseNumber);
      //console.log("Last Name: " + Case.Origin);
      // fields in Account relationship are fetched
      //console.log("Account Name: " + results.Account.Name); 
      // 
	  
	  

conn.query("Select Case.AccountId ,Case.ContactPhone,Case.ContactId,CaseNumber ,Status , Origin from case WHERE Account.Name='Test1' and Account.Phone='(032) 145-6987'" , function(err, results)
 {
	var resp = '';
	
 if (results.records.length>0) 
{ //return console.error(err); 
//var f = new Array();

for ( var i=0;i<results.records.length;i++) 
{
  for (var j=0;j<=results.records.length;j++)
	  {
 
 
 resp = resp + "Case Number : "+results.records[i,j].CaseNumber + ", Status : " +results.records[i,j].Status +"\n";
  //console.log(" CaseNumber : " +results.records[i,j].CaseNumber , "Status : " +results.records[i,j].Status);
  console.log("Bingo : "+resp);
  
  
 }
 
}
  }
else
{
	console.log(results);
	conn.sobject("Case").create({ AccountName:Account.Name ,Status : 'New' ,Origin:'Phone' }, function(err, ret) {
 if (err || !ret.success) { return console.error(err, ret); }
 console.log("Created record id : " + ret.id);
  console.log("Created record id : " + ret.CaseNumber);
});
}

console.log("Bingo : "+resp);

//console.log(results.records[0,0].CaseNumber , results.records[0,0].Status); 
//console.log(results.records[1,1].CaseNumber,results.records[1,1].Status); 
//else
//{

 
//conn.sobject("Account").create({ Name : 'Test2' , Phone : '7894561231' }, function(err1, ret)
	//{
//var r=ret.id; console.log(r)});}
  //return("Created record id : " + ret.id)}
 
 //for(var i=0; i < results.records.totalSize; i++) {
        //console.log(results.records[i]);
   // }
  //console.log("total : " + results.records);
  //console.log(results);
  });
 conn.search("FIND {0017F00000tnPu8QAE} RETURNING Account(Id, Name),Case(Id, CaseNumber,AccountId,ContactId,Origin,Status,Subject,Type)",
  function(err, res) 
 {
 if (err) { return console.error("z" +err); }
  console.log(res);
  
	
  //conn.sobject("Case").create({ Status : 'New' ,Origin:'Phone' }, function(err, ret) {
 //if (err || !ret.success) { return console.error(err, ret); }
 //console.log("Created record id : " + ret.id);
  
//});
  // ...
 
});
});
	//conn.sobject("Account").create({ Name : 'My Account #1' }, function(err, ret) {
 //if (err || !ret.success) 
// { return console.error(err, ret); }
 // console.log("Created record id : " + ret.id);
  
//});
  });
});

});
app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});
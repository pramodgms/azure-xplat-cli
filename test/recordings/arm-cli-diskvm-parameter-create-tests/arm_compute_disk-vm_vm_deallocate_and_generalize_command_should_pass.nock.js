// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '24fb23e3-6ba3-41f0-9b6e-e41131d5d61e',
    name: 'AzureRT Powershell and SDK Testing',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/resourceGroups/xplatTstPvmGCreate6110/providers/Microsoft.Compute/virtualMachines/vm16864?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"bf78e09d-d67f-4268-b189-ed1900c07648\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/resourceGroups/xplatTstPvmGCreate6110/providers/Microsoft.Compute/availabilitySets/XPLATTESTAVS6\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"CoreOS\",\r\n        \"offer\": \"CoreOS\",\r\n        \"sku\": \"Stable\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"test\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage15950.blob.core.windows.net/vm16864/xplattestvhd.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"diskvm1\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/resourceGroups/xplatTstPvmGCreate6110/providers/Microsoft.Network/networkInterfaces/xplattestnic8153\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"westus\",\r\n  \"id\": \"/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/resourceGroups/xplatTstPvmGCreate6110/providers/Microsoft.Compute/virtualMachines/vm16864\",\r\n  \"name\": \"vm16864\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1533',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b222a86a-df33-4ff8-8c54-43df6e2d24f5_131282082832526719',
  'x-ms-request-id': '90bd314e-b512-41fb-b205-4b8bf24aa1a4',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '54c0fac3-ad83-4d7a-b637-5e1672522bdc',
  'x-ms-routing-request-id': 'WESTUS2:20170208T000252Z:54c0fac3-ad83-4d7a-b637-5e1672522bdc',
  date: 'Wed, 08 Feb 2017 00:02:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/resourceGroups/xplatTstPvmGCreate6110/providers/Microsoft.Compute/virtualMachines/vm16864?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"bf78e09d-d67f-4268-b189-ed1900c07648\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/resourceGroups/xplatTstPvmGCreate6110/providers/Microsoft.Compute/availabilitySets/XPLATTESTAVS6\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"CoreOS\",\r\n        \"offer\": \"CoreOS\",\r\n        \"sku\": \"Stable\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"test\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage15950.blob.core.windows.net/vm16864/xplattestvhd.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"diskvm1\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/resourceGroups/xplatTstPvmGCreate6110/providers/Microsoft.Network/networkInterfaces/xplattestnic8153\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"westus\",\r\n  \"id\": \"/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/resourceGroups/xplatTstPvmGCreate6110/providers/Microsoft.Compute/virtualMachines/vm16864\",\r\n  \"name\": \"vm16864\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1533',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b222a86a-df33-4ff8-8c54-43df6e2d24f5_131282082832526719',
  'x-ms-request-id': '90bd314e-b512-41fb-b205-4b8bf24aa1a4',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '54c0fac3-ad83-4d7a-b637-5e1672522bdc',
  'x-ms-routing-request-id': 'WESTUS2:20170208T000252Z:54c0fac3-ad83-4d7a-b637-5e1672522bdc',
  date: 'Wed, 08 Feb 2017 00:02:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/resourceGroups/xplatTstPvmGCreate6110/providers/Microsoft.Compute/virtualMachines/vm16864/deallocate?api-version=2016-04-30-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/providers/Microsoft.Compute/locations/westus/operations/c25cd4a9-28f3-46bd-bae8-b84ee89bde5e?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/providers/Microsoft.Compute/locations/westus/operations/c25cd4a9-28f3-46bd-bae8-b84ee89bde5e?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b222a86a-df33-4ff8-8c54-43df6e2d24f5_131282082832526719',
  'x-ms-request-id': 'c25cd4a9-28f3-46bd-bae8-b84ee89bde5e',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'a946b1b8-6361-4ab2-bd24-a4f25c5b4fab',
  'x-ms-routing-request-id': 'WESTUS2:20170208T000252Z:a946b1b8-6361-4ab2-bd24-a4f25c5b4fab',
  date: 'Wed, 08 Feb 2017 00:02:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/resourceGroups/xplatTstPvmGCreate6110/providers/Microsoft.Compute/virtualMachines/vm16864/deallocate?api-version=2016-04-30-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/providers/Microsoft.Compute/locations/westus/operations/c25cd4a9-28f3-46bd-bae8-b84ee89bde5e?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/providers/Microsoft.Compute/locations/westus/operations/c25cd4a9-28f3-46bd-bae8-b84ee89bde5e?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b222a86a-df33-4ff8-8c54-43df6e2d24f5_131282082832526719',
  'x-ms-request-id': 'c25cd4a9-28f3-46bd-bae8-b84ee89bde5e',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'a946b1b8-6361-4ab2-bd24-a4f25c5b4fab',
  'x-ms-routing-request-id': 'WESTUS2:20170208T000252Z:a946b1b8-6361-4ab2-bd24-a4f25c5b4fab',
  date: 'Wed, 08 Feb 2017 00:02:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/providers/Microsoft.Compute/locations/westus/operations/c25cd4a9-28f3-46bd-bae8-b84ee89bde5e?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:02:52.7237325+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"c25cd4a9-28f3-46bd-bae8-b84ee89bde5e\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b222a86a-df33-4ff8-8c54-43df6e2d24f5_131282082832526719',
  'x-ms-request-id': '3b3a6d4c-f58e-41a8-89ab-93870a9a6483',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '891de32c-fb8a-4004-9728-1983c23803a6',
  'x-ms-routing-request-id': 'WESTUS2:20170208T000322Z:891de32c-fb8a-4004-9728-1983c23803a6',
  date: 'Wed, 08 Feb 2017 00:03:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/providers/Microsoft.Compute/locations/westus/operations/c25cd4a9-28f3-46bd-bae8-b84ee89bde5e?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:02:52.7237325+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"c25cd4a9-28f3-46bd-bae8-b84ee89bde5e\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b222a86a-df33-4ff8-8c54-43df6e2d24f5_131282082832526719',
  'x-ms-request-id': '3b3a6d4c-f58e-41a8-89ab-93870a9a6483',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '891de32c-fb8a-4004-9728-1983c23803a6',
  'x-ms-routing-request-id': 'WESTUS2:20170208T000322Z:891de32c-fb8a-4004-9728-1983c23803a6',
  date: 'Wed, 08 Feb 2017 00:03:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/providers/Microsoft.Compute/locations/westus/operations/c25cd4a9-28f3-46bd-bae8-b84ee89bde5e?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:02:52.7237325+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"c25cd4a9-28f3-46bd-bae8-b84ee89bde5e\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b222a86a-df33-4ff8-8c54-43df6e2d24f5_131282082832526719',
  'x-ms-request-id': '61aa0d9c-ab59-4d62-84d5-29cd5fd47688',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'c14e3a61-10b8-4f7a-a87e-06a1915e4224',
  'x-ms-routing-request-id': 'CENTRALUS:20170208T000354Z:c14e3a61-10b8-4f7a-a87e-06a1915e4224',
  date: 'Wed, 08 Feb 2017 00:03:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/providers/Microsoft.Compute/locations/westus/operations/c25cd4a9-28f3-46bd-bae8-b84ee89bde5e?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:02:52.7237325+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"c25cd4a9-28f3-46bd-bae8-b84ee89bde5e\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b222a86a-df33-4ff8-8c54-43df6e2d24f5_131282082832526719',
  'x-ms-request-id': '61aa0d9c-ab59-4d62-84d5-29cd5fd47688',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'c14e3a61-10b8-4f7a-a87e-06a1915e4224',
  'x-ms-routing-request-id': 'CENTRALUS:20170208T000354Z:c14e3a61-10b8-4f7a-a87e-06a1915e4224',
  date: 'Wed, 08 Feb 2017 00:03:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/providers/Microsoft.Compute/locations/westus/operations/c25cd4a9-28f3-46bd-bae8-b84ee89bde5e?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:02:52.7237325+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"c25cd4a9-28f3-46bd-bae8-b84ee89bde5e\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b222a86a-df33-4ff8-8c54-43df6e2d24f5_131282082832526719',
  'x-ms-request-id': 'ff502ec1-25a0-4aad-b260-7583aa57f5ec',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'abbe06d0-ab05-4db4-9f57-2a359f6f5981',
  'x-ms-routing-request-id': 'CENTRALUS:20170208T000425Z:abbe06d0-ab05-4db4-9f57-2a359f6f5981',
  date: 'Wed, 08 Feb 2017 00:04:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/providers/Microsoft.Compute/locations/westus/operations/c25cd4a9-28f3-46bd-bae8-b84ee89bde5e?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:02:52.7237325+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"c25cd4a9-28f3-46bd-bae8-b84ee89bde5e\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b222a86a-df33-4ff8-8c54-43df6e2d24f5_131282082832526719',
  'x-ms-request-id': 'ff502ec1-25a0-4aad-b260-7583aa57f5ec',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'abbe06d0-ab05-4db4-9f57-2a359f6f5981',
  'x-ms-routing-request-id': 'CENTRALUS:20170208T000425Z:abbe06d0-ab05-4db4-9f57-2a359f6f5981',
  date: 'Wed, 08 Feb 2017 00:04:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/providers/Microsoft.Compute/locations/westus/operations/c25cd4a9-28f3-46bd-bae8-b84ee89bde5e?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:02:52.7237325+00:00\",\r\n  \"endTime\": \"2017-02-08T00:04:54.9464928+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"c25cd4a9-28f3-46bd-bae8-b84ee89bde5e\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b222a86a-df33-4ff8-8c54-43df6e2d24f5_131282082832526719',
  'x-ms-request-id': 'a01aa1dc-8a09-4f33-b7fb-c1f71346e1e0',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '62e44abe-64e3-466b-baac-a928ef8891db',
  'x-ms-routing-request-id': 'WESTUS2:20170208T000458Z:62e44abe-64e3-466b-baac-a928ef8891db',
  date: 'Wed, 08 Feb 2017 00:04:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/providers/Microsoft.Compute/locations/westus/operations/c25cd4a9-28f3-46bd-bae8-b84ee89bde5e?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:02:52.7237325+00:00\",\r\n  \"endTime\": \"2017-02-08T00:04:54.9464928+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"c25cd4a9-28f3-46bd-bae8-b84ee89bde5e\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b222a86a-df33-4ff8-8c54-43df6e2d24f5_131282082832526719',
  'x-ms-request-id': 'a01aa1dc-8a09-4f33-b7fb-c1f71346e1e0',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '62e44abe-64e3-466b-baac-a928ef8891db',
  'x-ms-routing-request-id': 'WESTUS2:20170208T000458Z:62e44abe-64e3-466b-baac-a928ef8891db',
  date: 'Wed, 08 Feb 2017 00:04:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/resourceGroups/xplatTstPvmGCreate6110/providers/Microsoft.Compute/virtualMachines/vm16864?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"bf78e09d-d67f-4268-b189-ed1900c07648\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/resourceGroups/xplatTstPvmGCreate6110/providers/Microsoft.Compute/availabilitySets/XPLATTESTAVS6\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"CoreOS\",\r\n        \"offer\": \"CoreOS\",\r\n        \"sku\": \"Stable\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"test\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage15950.blob.core.windows.net/vm16864/xplattestvhd.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"diskvm1\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/resourceGroups/xplatTstPvmGCreate6110/providers/Microsoft.Network/networkInterfaces/xplattestnic8153\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"westus\",\r\n  \"id\": \"/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/resourceGroups/xplatTstPvmGCreate6110/providers/Microsoft.Compute/virtualMachines/vm16864\",\r\n  \"name\": \"vm16864\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1533',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b222a86a-df33-4ff8-8c54-43df6e2d24f5_131282082832526719',
  'x-ms-request-id': '41b0efa4-08a9-4646-83ec-45a74f2eacc1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '83c58a93-b812-4b02-9431-6071a7bf9d3a',
  'x-ms-routing-request-id': 'WESTUS2:20170208T000459Z:83c58a93-b812-4b02-9431-6071a7bf9d3a',
  date: 'Wed, 08 Feb 2017 00:04:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/resourceGroups/xplatTstPvmGCreate6110/providers/Microsoft.Compute/virtualMachines/vm16864?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"bf78e09d-d67f-4268-b189-ed1900c07648\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/resourceGroups/xplatTstPvmGCreate6110/providers/Microsoft.Compute/availabilitySets/XPLATTESTAVS6\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"CoreOS\",\r\n        \"offer\": \"CoreOS\",\r\n        \"sku\": \"Stable\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"test\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage15950.blob.core.windows.net/vm16864/xplattestvhd.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"diskvm1\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/resourceGroups/xplatTstPvmGCreate6110/providers/Microsoft.Network/networkInterfaces/xplattestnic8153\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"westus\",\r\n  \"id\": \"/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/resourceGroups/xplatTstPvmGCreate6110/providers/Microsoft.Compute/virtualMachines/vm16864\",\r\n  \"name\": \"vm16864\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1533',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b222a86a-df33-4ff8-8c54-43df6e2d24f5_131282082832526719',
  'x-ms-request-id': '41b0efa4-08a9-4646-83ec-45a74f2eacc1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '83c58a93-b812-4b02-9431-6071a7bf9d3a',
  'x-ms-routing-request-id': 'WESTUS2:20170208T000459Z:83c58a93-b812-4b02-9431-6071a7bf9d3a',
  date: 'Wed, 08 Feb 2017 00:04:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/resourceGroups/xplatTstPvmGCreate6110/providers/Microsoft.Compute/virtualMachines/vm16864/generalize?api-version=2016-04-30-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b222a86a-df33-4ff8-8c54-43df6e2d24f5_131282082832526719',
  'x-ms-request-id': '2cc2ff0e-bfef-4ab8-afd6-b13cd79ecbd2',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'd0638166-701a-44ff-8c79-4790114b9780',
  'x-ms-routing-request-id': 'WESTUS2:20170208T000459Z:d0638166-701a-44ff-8c79-4790114b9780',
  date: 'Wed, 08 Feb 2017 00:04:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/24fb23e3-6ba3-41f0-9b6e-e41131d5d61e/resourceGroups/xplatTstPvmGCreate6110/providers/Microsoft.Compute/virtualMachines/vm16864/generalize?api-version=2016-04-30-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b222a86a-df33-4ff8-8c54-43df6e2d24f5_131282082832526719',
  'x-ms-request-id': '2cc2ff0e-bfef-4ab8-afd6-b13cd79ecbd2',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'd0638166-701a-44ff-8c79-4790114b9780',
  'x-ms-routing-request-id': 'WESTUS2:20170208T000459Z:d0638166-701a-44ff-8c79-4790114b9780',
  date: 'Wed, 08 Feb 2017 00:04:59 GMT',
  connection: 'close' });
 return result; }]];
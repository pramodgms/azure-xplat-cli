// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2915bbd6-1252-405f-8173-6c00428146d9',
    name: 'Batch-MatthChr',
    user: {
      name: 'user@domain.example',
      type: 'user'
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .delete('/jobschedules/xplatJobSchedule?api-version=2016-07-01.3.1&timeout=30')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'ae6e72fb-82c6-4ea5-980a-84aba6240867',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '1f4a3305-e2ea-4d69-81a0-c4b768e94aab',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:00:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .delete('/jobschedules/xplatJobSchedule?api-version=2016-07-01.3.1&timeout=30')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'ae6e72fb-82c6-4ea5-980a-84aba6240867',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '1f4a3305-e2ea-4d69-81a0-c4b768e94aab',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:00:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/jobschedules/xplatJobSchedule?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#jobschedules/@Element\",\"id\":\"xplatJobSchedule\",\"displayName\":\"displayName\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/jobschedules/xplatJobSchedule\",\"eTag\":\"0x8D3BBFA5F3BB1C7\",\"lastModified\":\"2016-08-04T00:00:40.3337671Z\",\"creationTime\":\"2016-08-04T00:00:32.3481667Z\",\"state\":\"deleting\",\"stateTransitionTime\":\"2016-08-04T00:00:41.4312961Z\",\"previousState\":\"completed\",\"previousStateTransitionTime\":\"2016-08-04T00:00:40.3437583Z\",\"schedule\":{\r\n    \"startWindow\":\"P2D\",\"recurrenceInterval\":\"P1D\"\r\n  },\"jobSpecification\":{\r\n    \"displayName\":\"jobSpecDisplayName2\",\"priority\":1,\"usesTaskDependencies\":false,\"constraints\":{\r\n      \"maxWallClockTime\":\"P1D\",\"maxTaskRetryCount\":5\r\n    },\"jobManagerTask\":{\r\n      \"id\":\"jobManager2\",\"displayName\":\"jobManagerDisplay\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n        {\r\n          \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"filePath\"\r\n        }\r\n      ],\"constraints\":{\r\n        \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n      },\"runElevated\":false,\"runExclusive\":true,\"killJobOnCompletion\":false\r\n    },\"poolInfo\":{\r\n      \"autoPoolSpecification\":{\r\n        \"autoPoolIdPrefix\":\"TestSpecPrefix\",\"poolLifetimeOption\":\"jobschedule\",\"keepAlive\":false,\"pool\":{\r\n          \"vmSize\":\"small\",\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n            \"nodeFillType\":\"Spread\"\r\n          },\"resizeTimeout\":\"PT15M\",\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n            \"commandLine\":\"cmd /c dir /s\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n          },\"cloudServiceConfiguration\":{\r\n            \"osFamily\":\"4\",\"targetOSVersion\":\"*\"\r\n          }\r\n        }\r\n      }\r\n    }\r\n  },\"executionInfo\":{\r\n    \"nextRunTime\":\"2016-08-05T00:00:32.3481667Z\",\"recentJob\":{\r\n      \"url\":\"https://matthchreastus2.eastus2.batch.azure.com/jobs/xplatJobSchedule:job-1\",\"id\":\"xplatJobSchedule:job-1\"\r\n    }\r\n  },\"metadata\":[\r\n    {\r\n      \"name\":\"meta3\",\"value\":\"value3\"\r\n    },{\r\n      \"name\":\"meta4\",\"value\":\"value4\"\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 04 Aug 2016 00:00:40 GMT',
  etag: '0x8D3BBFA5F3BB1C7',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd909b85f-b5c0-4b65-82c4-be6de17e7420',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '2c3ecc61-c694-44cf-8888-bf2d74b9481b',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:00:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/jobschedules/xplatJobSchedule?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#jobschedules/@Element\",\"id\":\"xplatJobSchedule\",\"displayName\":\"displayName\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/jobschedules/xplatJobSchedule\",\"eTag\":\"0x8D3BBFA5F3BB1C7\",\"lastModified\":\"2016-08-04T00:00:40.3337671Z\",\"creationTime\":\"2016-08-04T00:00:32.3481667Z\",\"state\":\"deleting\",\"stateTransitionTime\":\"2016-08-04T00:00:41.4312961Z\",\"previousState\":\"completed\",\"previousStateTransitionTime\":\"2016-08-04T00:00:40.3437583Z\",\"schedule\":{\r\n    \"startWindow\":\"P2D\",\"recurrenceInterval\":\"P1D\"\r\n  },\"jobSpecification\":{\r\n    \"displayName\":\"jobSpecDisplayName2\",\"priority\":1,\"usesTaskDependencies\":false,\"constraints\":{\r\n      \"maxWallClockTime\":\"P1D\",\"maxTaskRetryCount\":5\r\n    },\"jobManagerTask\":{\r\n      \"id\":\"jobManager2\",\"displayName\":\"jobManagerDisplay\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n        {\r\n          \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"filePath\"\r\n        }\r\n      ],\"constraints\":{\r\n        \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n      },\"runElevated\":false,\"runExclusive\":true,\"killJobOnCompletion\":false\r\n    },\"poolInfo\":{\r\n      \"autoPoolSpecification\":{\r\n        \"autoPoolIdPrefix\":\"TestSpecPrefix\",\"poolLifetimeOption\":\"jobschedule\",\"keepAlive\":false,\"pool\":{\r\n          \"vmSize\":\"small\",\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n            \"nodeFillType\":\"Spread\"\r\n          },\"resizeTimeout\":\"PT15M\",\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n            \"commandLine\":\"cmd /c dir /s\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n          },\"cloudServiceConfiguration\":{\r\n            \"osFamily\":\"4\",\"targetOSVersion\":\"*\"\r\n          }\r\n        }\r\n      }\r\n    }\r\n  },\"executionInfo\":{\r\n    \"nextRunTime\":\"2016-08-05T00:00:32.3481667Z\",\"recentJob\":{\r\n      \"url\":\"https://matthchreastus2.eastus2.batch.azure.com/jobs/xplatJobSchedule:job-1\",\"id\":\"xplatJobSchedule:job-1\"\r\n    }\r\n  },\"metadata\":[\r\n    {\r\n      \"name\":\"meta3\",\"value\":\"value3\"\r\n    },{\r\n      \"name\":\"meta4\",\"value\":\"value4\"\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 04 Aug 2016 00:00:40 GMT',
  etag: '0x8D3BBFA5F3BB1C7',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd909b85f-b5c0-4b65-82c4-be6de17e7420',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '2c3ecc61-c694-44cf-8888-bf2d74b9481b',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:00:40 GMT',
  connection: 'close' });
 return result; }]];
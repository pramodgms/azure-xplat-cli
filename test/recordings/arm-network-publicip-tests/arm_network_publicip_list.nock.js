// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"armpublicip2751\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip2751\",\r\n      \"etag\": \"W/\\\"0e97a2a2-ee50-48f9-9920-681005d854dc\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"ipAddress\": \"23.101.132.202\",\r\n        \"publicIPAllocationMethod\": \"Static\",\r\n        \"idleTimeoutInMinutes\": 6,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"dnstestpubip\",\r\n          \"fqdn\": \"dnstestpubip.eastus.cloudapp.azure.com.\",\r\n          \"reverseFqdn\": \"dnstestpubip19272.eastus.cloudapp.azure.com.\"\r\n        }\r\n      },\r\n      \"location\": \"eastus\"\r\n    },\r\n    {\r\n      \"name\": \"armpublicipnew7314\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7314\",\r\n      \"etag\": \"W/\\\"c592fdff-6fad-4808-9fcd-3e0ecba80a7d\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 4,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"dnstestpubip19272\",\r\n          \"fqdn\": \"dnstestpubip19272.eastus.cloudapp.azure.com.\",\r\n          \"reverseFqdn\": \"dnstestpubip9501.eastus.cloudapp.azure.com.\"\r\n        }\r\n      },\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1457',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '63c7ba54-afdb-42d8-a7cd-3b4115e2df05',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31986',
  'x-ms-correlation-request-id': '32d6f565-c210-4f75-8daf-27dff762752b',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173457Z:32d6f565-c210-4f75-8daf-27dff762752b',
  date: 'Wed, 22 Apr 2015 17:34:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"armpublicip2751\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip2751\",\r\n      \"etag\": \"W/\\\"0e97a2a2-ee50-48f9-9920-681005d854dc\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"ipAddress\": \"23.101.132.202\",\r\n        \"publicIPAllocationMethod\": \"Static\",\r\n        \"idleTimeoutInMinutes\": 6,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"dnstestpubip\",\r\n          \"fqdn\": \"dnstestpubip.eastus.cloudapp.azure.com.\",\r\n          \"reverseFqdn\": \"dnstestpubip19272.eastus.cloudapp.azure.com.\"\r\n        }\r\n      },\r\n      \"location\": \"eastus\"\r\n    },\r\n    {\r\n      \"name\": \"armpublicipnew7314\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7314\",\r\n      \"etag\": \"W/\\\"c592fdff-6fad-4808-9fcd-3e0ecba80a7d\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 4,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"dnstestpubip19272\",\r\n          \"fqdn\": \"dnstestpubip19272.eastus.cloudapp.azure.com.\",\r\n          \"reverseFqdn\": \"dnstestpubip9501.eastus.cloudapp.azure.com.\"\r\n        }\r\n      },\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1457',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '63c7ba54-afdb-42d8-a7cd-3b4115e2df05',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31986',
  'x-ms-correlation-request-id': '32d6f565-c210-4f75-8daf-27dff762752b',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173457Z:32d6f565-c210-4f75-8daf-27dff762752b',
  date: 'Wed, 22 Apr 2015 17:34:57 GMT',
  connection: 'close' });
 return result; }]];
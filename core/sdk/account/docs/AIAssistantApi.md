# AIAssistantApi

All URIs are relative to *https://infra-venille.livestocx.xyz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accountControllerReportAIResponse**](#accountcontrollerreportairesponse) | **POST** /v1/account/me/report-ai-response | |

# **accountControllerReportAIResponse**
> accountControllerReportAIResponse(reportAIResponseDTO)


### Example

```typescript
import {
    AIAssistantApi,
    Configuration,
    ReportAIResponseDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new AIAssistantApi(configuration);

let reportAIResponseDTO: ReportAIResponseDTO; //

const { status, data } = await apiInstance.accountControllerReportAIResponse(
    reportAIResponseDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportAIResponseDTO** | **ReportAIResponseDTO**|  | |


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


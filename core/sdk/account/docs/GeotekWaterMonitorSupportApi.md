# GeotekWaterMonitorSupportApi

All URIs are relative to *https://infra-venille.livestocx.xyz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**supportControllerGeotekWaterMonitorContactUs**](#supportcontrollergeotekwatermonitorcontactus) | **POST** /v1/account/support/geotek-water-monitor-contact-us | |

# **supportControllerGeotekWaterMonitorContactUs**
> supportControllerGeotekWaterMonitorContactUs(geotekWaterMonitorContactUsDTO)


### Example

```typescript
import {
    GeotekWaterMonitorSupportApi,
    Configuration,
    GeotekWaterMonitorContactUsDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new GeotekWaterMonitorSupportApi(configuration);

let geotekWaterMonitorContactUsDTO: GeotekWaterMonitorContactUsDTO; //

const { status, data } = await apiInstance.supportControllerGeotekWaterMonitorContactUs(
    geotekWaterMonitorContactUsDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **geotekWaterMonitorContactUsDTO** | **GeotekWaterMonitorContactUsDTO**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


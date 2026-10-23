# GirlifiedSupportApi

All URIs are relative to *https://infra-venille.livestocx.xyz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**supportControllerGirlifiedBioContactUs**](#supportcontrollergirlifiedbiocontactus) | **POST** /v1/account/support/girlified-bio-contact-us | |

# **supportControllerGirlifiedBioContactUs**
> supportControllerGirlifiedBioContactUs(girlifiedBioContactUsDTO)


### Example

```typescript
import {
    GirlifiedSupportApi,
    Configuration,
    GirlifiedBioContactUsDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new GirlifiedSupportApi(configuration);

let girlifiedBioContactUsDTO: GirlifiedBioContactUsDTO; //

const { status, data } = await apiInstance.supportControllerGirlifiedBioContactUs(
    girlifiedBioContactUsDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **girlifiedBioContactUsDTO** | **GirlifiedBioContactUsDTO**|  | |


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


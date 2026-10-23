# OnboardingApi

All URIs are relative to *https://infra-venille.livestocx.xyz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**onboardingControllerGetOnboardingQuestions**](#onboardingcontrollergetonboardingquestions) | **GET** /v1/account/onboarding/questions | |
|[**onboardingControllerRegisterPeriodTracker**](#onboardingcontrollerregisterperiodtracker) | **POST** /v1/account/onboarding/period-tracker | |

# **onboardingControllerGetOnboardingQuestions**
> Array<OnboardingQuestionInfo> onboardingControllerGetOnboardingQuestions()


### Example

```typescript
import {
    OnboardingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OnboardingApi(configuration);

const { status, data } = await apiInstance.onboardingControllerGetOnboardingQuestions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<OnboardingQuestionInfo>**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **onboardingControllerRegisterPeriodTracker**
> AccountInfo onboardingControllerRegisterPeriodTracker(registerPeriodTrackerDTO)


### Example

```typescript
import {
    OnboardingApi,
    Configuration,
    RegisterPeriodTrackerDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new OnboardingApi(configuration);

let registerPeriodTrackerDTO: RegisterPeriodTrackerDTO; //

const { status, data } = await apiInstance.onboardingControllerRegisterPeriodTracker(
    registerPeriodTrackerDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerPeriodTrackerDTO** | **RegisterPeriodTrackerDTO**|  | |


### Return type

**AccountInfo**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


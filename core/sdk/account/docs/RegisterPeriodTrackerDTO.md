# RegisterPeriodTrackerDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastPeriodStartDate** | **string** | Date of first period. | [default to undefined]
**periodLengthDays** | **number** | Length of period in days. | [default to undefined]
**cycleLengthDays** | **number** | Length of cycle in days. | [default to undefined]
**irregularPeriods** | **boolean** | Is the period irregular? | [default to undefined]
**periodSymptoms** | **string** | Period symptoms. | [default to undefined]
**trackingOvulation** | **boolean** | Is the user tracking ovulation? | [default to undefined]
**age** | **number** | Age of the user. | [default to undefined]
**birthControlMethods** | **string** | Birth control method. | [default to undefined]
**healthConditions** | **string** | Health condition. | [default to undefined]

## Example

```typescript
import { RegisterPeriodTrackerDTO } from './api';

const instance: RegisterPeriodTrackerDTO = {
    lastPeriodStartDate,
    periodLengthDays,
    cycleLengthDays,
    irregularPeriods,
    periodSymptoms,
    trackingOvulation,
    age,
    birthControlMethods,
    healthConditions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# Migrate to V2

{% hint style="info" %}

This page concerns projects created with data protector prior or equal to version 0.5.1

{% endhint %}

## 1.  Constructor

When instantiating the IExecDataProtector object, reference the *dataProtector* property to use core methods. Newer versions allow the use extended methods using the *dataProtectorSharing* property.

```javascript
// 0.5.1 and before
const dataProtector = new IExecDataProtector(web3Provider);

// after 0.5.1
const dataProtector = new IExecDataProtector(web3Provider).dataProtector;
```

## 2.  Methods

### **2.1.  Method renaming**

Some methods were renamed in order to standardize the SDK, they still provide the same functionalities as before

|Previous name|New name|
|--|--|
|fetchProtectedData|getProtectedData|
|fetchGrantedAccess|getGrantedAccess|

### **2.2.  Additional parameters**

getProtectedData now takes a parameter *creationTimestampGte* to filter elements created after a certain date

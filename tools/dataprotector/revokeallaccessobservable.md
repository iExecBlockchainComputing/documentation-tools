# revokeAllAccessObservable

Method to revoke all access related to a protected data.

### Usage

```js
const revokeAllAccessObservable = dataProtector
  .revokeAllAccessObservable({
    protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  })
  .subscribe({
    next: (data) => {
      console.log("next", data);
    },
    error: (error) => {
      console.log("error", error);
    },
    complete: () => {
      console.log("revokeAllAccess complete");
    },
  });
```

⚠️ You need to explicitly subscribe to the observable for `dataProtector` to actually revoke all access.

### Parameters

### protectedData

Protected data address on which you want to revoke all access.

```js
const revokeAllAccessObservable = await dataProtector.revokeAllAccessObservable(
  {
    protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e", // [!code focus]
  }
);
```

### authorizedApp (optional)

Application address on which you want to revoke all access from.

```js
const revokeAllAccessObservable = await dataProtector.revokeAllAccessObservable(
  {
    protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
    authorizedApp: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e", // [!code focus]
  }
);
```

### authorizedUser (optional)

User address on which you want to revoke all access.

```js
const revokeAllAccessObservable = await dataProtector.revokeAllAccessObservable(
  {
    protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
    authorizedUser: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1", // [!code focus]
  }
);
```

### Return value example

<table><thead><tr><th width="310">Message</th><th>Return value</th></tr></thead><tbody><tr><td>GRANTED_ACCESS_RETRIEVED</td><td><pre class="language-javascript"><code class="lang-javascript">access: GrantedAccess[]
</code></pre></td></tr><tr><td>REVOKE_ONE_ACCESS_REQUEST</td><td><pre class="language-javascript"><code class="lang-javascript">access: GrantedAccess
</code></pre></td></tr><tr><td>REVOKE_ONE_ACCESS_SUCCESS</td><td><pre class="language-javascript"><code class="lang-javascript">txHash: '0x9f7e76a220aba21c6a9c79bd1680eaf33b10afc2127593fd7e9a9e2b03c2c9fd',
access: GrantedAccess
</code></pre></td></tr></tbody></table>

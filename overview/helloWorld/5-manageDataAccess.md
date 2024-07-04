<script setup>
import GrantAccess from '../../components/GrantAccess.vue';
</script>

# Manage Data Access

> Reading 🕒 4 mins

What do you mean by **grant access**?, you may ask. Well, it's simple. When you
protect your data, you can authorize users and specific applications to access
it. Like that an authorized user will be able to use an authorized iExec
Application to access your protected data and compute it.

## 🧩 The authorization diagram

Here is a simple diagram to explain the process:

![alt text](/assets/hello-world/process.png)

1. **Protect Data** : You protect your data using the DataProtector SDK.
2. **Grant Access** : You authorize a user (wallet address) to access your
   protected data.
3. **Grant Access** : You authorize your iExec Application to access your
   protected data.
4. **Compute Data** : The authorized user can now run your iExec Application to
   process your protected data.

## 🧩 Let's grant access

I asked you to save your iExec App address at the end of the last chapter. If
you did, you can now use it to grant access to your protected data.

<GrantAccess />

**But you told us that we can also grant access to a user, right?** You're
right! let's check the code snippet we used to grant access to the iExec App and
the user.

```typescript
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: protectedData?.value?.address,
  authorizedApp: authorizedApp.value,
  authorizedUser: '0x0000000000000000000000000000000000000000',
});
```

As you can see in the code snippet, we used three parameters:

- `protectedData` : The address of the protected data (we stored it in local
  storage during the protect data process).
- `authorizedApp` : The address of the iExec App you want to authorize; it means
  the iExec App address you saved at the end of the last chapter.
- `authorizedUser` : The wallet address of the user you want to authorize, by
  default it's the 0x, it means that you authorize all users.

## 🧩 Drum rolls, please! 🥁

You're now ready to run your iExec Application and process your protected data.
By running the command below, you will be able to run your iExec Application in
a trusted execution environment and process your protected data.

```sh
idapp run <my-idapp-address> [--protectedData <protectedData-address>] [--debug | --prod]
```

Tadada! 🎉

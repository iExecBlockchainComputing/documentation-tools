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

Authorize your iExec Application to access your protected data using the button
below.here is a simple diagram to explain the process:

<GrantAccess />

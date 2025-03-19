# ⚙ Step 2: Configure  

You'll set up:

- **Arguments (Args)** – Public parameters passed to the iApp.
- **Input Files** – Files dynamically downloaded during execution.
- **Requester Secrets** – Confidential authentication strings.
- **Protected Data** – Encrypted data accessible only inside the TEE.
- **App Secret** – Immutable secret provisioned by the iApp owner.
⚠ **Warning:** App secrets cannot be updated once set.

> **TIP:**  
>
> - The **Secret Management Service (SMS)** securely stores application developer secrets.  
> - The **App Secret** is **immutable** once set and **cannot be updated** once pushed. Use with caution.  
> - More info: [Confidential Computing Developer Guide](https://protocol.docs.iex.ec/for-developers/confidential-computing/access-confidential-assets)

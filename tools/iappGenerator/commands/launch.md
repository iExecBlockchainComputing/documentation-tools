# 🚀 Launching your iApp

After initialization, the following essential files are generated:

- `iapp.config.json`
- `src/app.js` (JavaScript) or `src/app.py` (Python)
- `Dockerfile`
- Directories:  
  - `input/`
  - `output/`
  - `cache/`

## 📝 Updating your iApp  

Modify your main application logic inside:

```sh
src/app.js  # For JavaScript
src/app.py  # For Python
```

## 🧪 Testing and Deploying Your iApp

Run the following commands:

```sh
iapp test               # Runs a basic test locally.
iapp deploy             # Sconifies and registers the iApp on iExec.
iapp run <iApp-address> # Executes the deployed iApp on a worker node.
iapp --help             # Displays available commands.
iapp debug <iApp-address> # Retrieves logs and output files.
iexec mock              # Creates a mocked input for testing.
```

Once deployed, your iApp will run **securely in a TEE-enabled workerpool** within the iExec network.

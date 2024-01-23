# processProtectedData

Allows processing a protected dataset through use of a specified iExec application.

## Usage

```javascript
const taskid = await dataProtector.processProtectedData({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    app: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    maxPrice: 10,
    args: 'arg1 arg2',
    inputFiles: ['https://example.com/file1', 'https://example.com/file2'],
    secrets: ['secret1', 'secret2'],
});
```

## Return value example

```javascript
0xabcd1234...
```

## Configuration

### protectedData (required)

The ETH address or Ethereum Name Service (ENS) reference for the protected data tool.

<pre class="language-javascript"><code class="lang-javascript">const taskid = await dataProtector.processProtectedData({
    <strong>protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',</strong>
    app: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    maxPrice: 10,
    args: 'arg1 arg2',
    inputFiles: ['https://example.com/file1', 'https://example.com/file2'],
    secrets: ['secret1', 'secret2'],
});
</code></pre>

### app (required)

The ETH address or Ethereum Name Service (ENS) address for the dataProtector application to process the protected data.

<pre class="language-javascript"><code class="lang-javascript">const taskid = await dataProtector.processProtectedData({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    <strong>app: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',</strong>
    maxPrice: 10,
    args: 'arg1 arg2',
    inputFiles: ['https://example.com/file1', 'https://example.com/file2'],
    secrets: ['secret1', 'secret2'],
});
</code></pre>

### maxPrice (optional)

The maximum price (in nRLC) that a requester is willing to pay for each task related to processing the protected data. It is the sum of the application price, dataset price, and workerpool price per task.

<pre class="language-javascript"><code class="lang-javascript">const taskid = await dataProtector.processProtectedData({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    app: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    <strong>maxPrice: 10,</strong>
    args: 'arg1 arg2',
    inputFiles: ['https://example.com/file1', 'https://example.com/file2'],
    secrets: ['secret1', 'secret2'],
});
</code></pre>

### args (optional)

Set of execution arguments for the dataProtector application.

<pre class="language-javascript"><code class="lang-javascript">const taskid = await dataProtector.processProtectedData({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    app: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    maxPrice: 10,
    <strong>args: 'arg1 arg2',</strong>
    inputFiles: ['https://example.com/file1', 'https://example.com/file2'],
    secrets: ['secret1', 'secret2'],
});
</code></pre>

### inputFiles (optional)

A set of URLs representing the input files required for application execution.

<pre class="language-javascript"><code class="lang-javascript">const taskid = await dataProtector.processProtectedData({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    app: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    maxPrice: 10,
    args: 'arg1 arg2',
    <strong>inputFiles: ['https://example.com/file1', 'https://example.com/file2'],</strong>
    secrets: ['secret1', 'secret2'],
});
</code></pre>

### secrets (optional)

A set of requester secrets necessary for the application's execution. This is represented as a mapping of numerical identifiers to corresponding secrets stored in the secrets manager needed for the application's execution.

<pre class="language-javascript"><code class="lang-javascript">const taskid = await dataProtector.processProtectedData({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    app: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    maxPrice: 10,
    args: 'arg1 arg2',
    inputFiles: ['https://example.com/file1', 'https://example.com/file2'],
    <strong>secrets: ['secret1', 'secret2'],</strong>
});
</code></pre>

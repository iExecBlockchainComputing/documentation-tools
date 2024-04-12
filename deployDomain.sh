npm install --global vercel@latest
vercel pull --yes --environment=preview --scope i-exec --token=${VERCEL_TOKEN}
vercel build --scope i-exec --token=${VERCEL_TOKEN}
vercel deploy --prebuilt --scope i-exec --token=${VERCEL_TOKEN} >deployment-url.txt 2>error.txt

# check the exit code
code=$?
if [ $code -eq 0 ]; then
    # Now you can use the deployment url from stdout for the next step of your workflow
    deploymentUrl=`cat deployment-url.txt`
    vercel alias $deploymentUrl tools-v2-dfl5elc60.docs.iex.ec --scope i-exec --token=${VERCEL_TOKEN}
else
    # Handle the error
    errorMessage=`cat error.txt`
    echo "There was an error: $errorMessage"
fi

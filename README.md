# kudu-yarn
A sample demonstrating how to use the Yarn package manager with Azure websites / Kudu.

# To use Yarn in your Azure App Services NodeJS application
Simply copy the `deploy.cmd` and `.deployment` files from this repository to yours.  Kudu will use this deployment script instead of the built-in default.

# How it works
The `deploy.cmd` in this repository is the default NodeJS installation script used by Kudu to install applications in Azure App Services, with a small modification to install Yarn and call `yarn install` instead of `npm install`

# To run this sample
If you'd prefer to test using this sample instead of your own application, simply clone the repository and `yarn install` then `yarn start` to run.

# To modify your existing deployment script
Find your existing call to `npm install` and replace it with `yarn install`.  Prior to that step, leverage the built in npm to verify yarn is installed globally with `npm install yarn -g`.  This might look like this in a default Kudu node deployment script.

```
:: 3. Install Yarn
echo Verifying Yarn Install.
call :ExecuteCmd !NPM_CMD! install yarn -g

:: 4. Install Yarn packages
echo Installing Yarn Packages.
IF EXIST "%DEPLOYMENT_TARGET%\package.json" (
  pushd "%DEPLOYMENT_TARGET%"
  call :ExecuteCmd yarn install --production
  IF !ERRORLEVEL! NEQ 0 goto error
  popd
)
```


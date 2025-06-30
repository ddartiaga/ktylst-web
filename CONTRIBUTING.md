

ECR
```pwsh
# NOTE: make sure you have katadev file with profile 'ktdev'.
$env:AWS_SHARED_CREDENTIALS_FILE="$HOME\.aws\katadev"

aws sts get-caller-identity --profile ktdev

aws ecr get-login-password --region ap-southeast-1 --profile ktdev | docker login --username AWS --password-stdin 339566799640.dkr.ecr.ap-southeast-1.amazonaws.com
```
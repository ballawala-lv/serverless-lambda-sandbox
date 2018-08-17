serverless invoke --function hello
serverless invoke --function hello --data 'To the Cloud' --log

YAML
http://yaml-online-parser.appspot.com/
JSON works in Yaml
Serverless YML reference:
https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/
https://http.cat/ for status codes

get info about the path etc
>sls info 

https://12factor.net/


Stages:
for each stage a whole new copy of your infrastructure, new cloud formation, gateways, new IAM, lambda fns etc
>sls deploy --stage dev
>sls invoke -f hello --stage dev
>sls logs -f hello --stage dev

Cloudformation:
declarative configuration language 

IAM
Five parts
C ondition - when can this happen
A ction - colon separate service e.g. logs:PutLogsEvents
R esource - which items can this happen to arn:service:region:acccountId:resource
P rincipal - who can do it
E ffect - will they allowed or denied 

https://iam.cloudonaut.io/
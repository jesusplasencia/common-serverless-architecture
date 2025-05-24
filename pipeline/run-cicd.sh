#!/bin/bash
RED=$(tput setaf 1)
RESET=$(tput sgr0)
REGION="us-east-1"

name=$1
type=$2
env=$3

if [[ -n "$env" ]]; then
    echo "CI/CD BUILD NAME: ${name} && STAGE: ${env}"
    aws cloudformation ${type}-stack --stack-name "${name}-${env}-cicd" --template-body file://./pipeline/template.yml \
        --parameters ParameterKey=GitHubRepo,ParamaterValue="${name}" ParameterKey=GitHubBranch,ParameterValue="${env}" \
        --region "${REGION}" --capabilities CAPABILITIES_NAMED_IAM CAPABILITY_AUTO_EXPAND
else
    echo "${RED} Missing argument --stage={env}${RESET}"
fi

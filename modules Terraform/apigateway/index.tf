data "aws_region" "current" {}

locals {
  stage_name = "v1"
}

data "aws_caller_identity" "current" {}

resource "aws_api_gateway_rest_api" "api" {
  name = "${var.stack_name}-form-submissions"
}

resource "aws_lambda_permission" "apigw_lambda" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = "${var.function_arn}"
  principal     = "apigateway.amazonaws.com"

  # More: http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-control-access-using-iam-policies-to-invoke-api.html
  source_arn = "arn:aws:execute-api:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:${aws_api_gateway_rest_api.api.id}/*/*/*"
}

resource "aws_api_gateway_method" "method" {
  rest_api_id      = "${aws_api_gateway_rest_api.api.id}"
  resource_id      = "${aws_api_gateway_rest_api.api.root_resource_id}"
  http_method      = "POST"
  authorization    = "NONE"
  api_key_required = false
}

resource "aws_api_gateway_integration" "api_method_integration" {
  rest_api_id             = "${aws_api_gateway_rest_api.api.id}"
  resource_id             = "${aws_api_gateway_rest_api.api.root_resource_id}"
  http_method             = "${aws_api_gateway_method.method.http_method}"
  type                    = "AWS_PROXY"
  uri                     = "arn:aws:apigateway:${data.aws_region.current.name}:lambda:path/2015-03-31/functions/arn:aws:lambda:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:function:${var.function_name}/invocations"
  integration_http_method = "POST"
}

resource "aws_api_gateway_method_response" "200" {
  rest_api_id = "${aws_api_gateway_rest_api.api.id}"
  resource_id = "${aws_api_gateway_rest_api.api.root_resource_id}"
  http_method = "${aws_api_gateway_method.method.http_method}"
  status_code = "200"

  response_models {
    "application/json" = "Empty"
  }
}

resource "aws_api_gateway_integration_response" "integration_response" {
  depends_on = ["aws_api_gateway_integration.api_method_integration"]

  rest_api_id = "${aws_api_gateway_rest_api.api.id}"
  resource_id = "${aws_api_gateway_rest_api.api.root_resource_id}"
  http_method = "${aws_api_gateway_method.method.http_method}"
  status_code = "${aws_api_gateway_method_response.200.status_code}"
}

resource "aws_api_gateway_method_settings" "settings" {
  depends_on = ["aws_api_gateway_integration.api_method_integration"]

  rest_api_id = "${aws_api_gateway_rest_api.api.id}"
  stage_name  = "${aws_api_gateway_stage.stage.stage_name}"
  method_path = "/*/${aws_api_gateway_method.method.http_method}"

  settings {
    metrics_enabled    = true
    logging_level      = "INFO"
    data_trace_enabled = true
//    caching_enabled = false
  }
}

resource "aws_api_gateway_deployment" "deployment" {
  depends_on = ["aws_api_gateway_account.settings"]

  rest_api_id = "${aws_api_gateway_rest_api.api.id}"
  stage_name  = "dev"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_api_gateway_stage" "stage" {
  stage_name    = "${local.stage_name}"
  rest_api_id   = "${aws_api_gateway_rest_api.api.id}"
  deployment_id = "${aws_api_gateway_deployment.deployment.id}"

  variables {}

  provisioner "local-exec" {
    command = "aws --region ${var.aws_region} --profile ${var.aws_profile} apigateway update-stage --rest-api-id ${aws_api_gateway_rest_api.api.id} --stage-name '${local.stage_name}' --patch-operations op=replace,path=/*/*/logging/dataTrace,value=true op=replace,path=/*/*/logging/loglevel,value=INFO op=replace,path=/*/*/metrics/enabled,value=true"
  }
}

resource "aws_api_gateway_account" "settings" {
  cloudwatch_role_arn = "${aws_iam_role.cloudwatch.arn}"
}

resource "aws_iam_role" "cloudwatch" {
  name = "api_gateway_cloudwatch_role_${var.stack_name}"

    assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "",
      "Effect": "Allow",
      "Principal": {
        "Service": "apigateway.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "cloudwatch" {
  name = "default"
  role = "${aws_iam_role.cloudwatch.id}"

  policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "logs:CreateLogGroup",
                "logs:CreateLogStream",
                "logs:DescribeLogGroups",
                "logs:DescribeLogStreams",
                "logs:PutLogEvents",
                "logs:GetLogEvents",
                "logs:FilterLogEvents"
            ],
            "Resource": "*"
        }
    ]
}
EOF
}


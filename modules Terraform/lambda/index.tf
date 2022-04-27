data "aws_region" "current" {}
data "aws_caller_identity" "current" {}

data "archive_file" "lambda" {
  type        = "zip"
  source_dir  = "${path.module}/code"
  output_path = "${path.module}/lambda.zip"
}

resource "aws_iam_role" "lambda_role" {
  name = "lambda_role_${var.stack_name}"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": [
          "lambda.amazonaws.com",
          "apigateway.amazonaws.com"
        ]
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "lambda_role_policy" {
  name = "lambda-policy-sms-${var.stack_name}"
  role = "${aws_iam_role.lambda_role.id}"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
      {
         "Effect": "Allow",
         "Action": [
            "logs:*"
         ],
         "Resource": [
            "*"
         ]
      },
      {
         "Effect": "Allow",
         "Action": [
            "dynamodb:*"
         ],
         "Resource": [
            "${var.table_arn}"
         ]
      }
  ]
}
EOF
}

resource "aws_lambda_function" "post" {
  filename         = "${data.archive_file.lambda.output_path}"
  function_name    = "${var.stack_name}-form-submissions"
  role             = "${aws_iam_role.lambda_role.arn}"
  handler          = "index.handler"
  runtime          = "nodejs8.10"
  source_code_hash = "${base64sha256(file("${data.archive_file.lambda.output_path}"))}"
  publish          = true
  timeout          = 5

  environment {
    variables = {
      TABLE_NAME = "${var.table_name}"
    }
  }
}

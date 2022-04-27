output "table_name" {
  value = "${aws_dynamodb_table.form_submissions.name}"
}

output "table_arn" {
  value = "${aws_dynamodb_table.form_submissions.arn}"
}

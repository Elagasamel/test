resource "aws_dynamodb_table" "form_submissions" {
  name           = "${var.stack_name}-form-submissions"
  read_capacity  = 1
  write_capacity = 1
  hash_key       = "id"
  range_key      = "created_at"

  attribute {
    name = "id"
    type = "S"
  }

  attribute {
    name = "created_at"
    type = "N"
  }
}
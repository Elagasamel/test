output "api_regional_uri" {
  value = "https://${aws_api_gateway_rest_api.api.id}.execute-api.${data.aws_region.current.name}.amazonaws.com/${local.stage_name}"
}

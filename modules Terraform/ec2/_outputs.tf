output "instance-id" {
  description = "The EC2 instance ID"
  value       = "${aws_instance.instance.id}"
}



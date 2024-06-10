import boto3
from flask import current_app as app

def upload_to_s3(file_name, bucket_name, object_name=None):
    s3_client = boto3.client('s3',
                             aws_access_key_id=app.config['AWS_ACCESS_KEY_ID'],
                             aws_secret_access_key=app.config['AWS_SECRET_ACCESS_KEY'])
    try:
        s3_client.upload_file(file_name, bucket_name, object_name or file_name)
        return True
    except Exception as e:
        print(e)
        return False


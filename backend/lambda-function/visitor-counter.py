import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('fayzerCRCDDBTable')

def lambda_handler(event, context):
    newCount = table.update_item(
        Key={
            'visitorData': 'visitorCount'
        },
        UpdateExpression='SET quantity = quantity + :val1',
        ExpressionAttributeValues={
            ':val1':1
        },
        ReturnValues="UPDATED_NEW"
    )
    responsebody = json.dumps({"Site visitors": int(newCount["Attributes"]["quantity"])})
    apiResponse = {
        "isBase64Encoded": False,
        "statusCode": 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST'
        },
        "body": responsebody
    }
    return apiResponse

'use strict';
var AWS = require('aws-sdk')
AWS.config.update({region: 'eu-west-2'})

var ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'})

exports.handler = function (event, context, callback) {
    const message = event.body ? JSON.parse(event.body).message : ''
    const now = new Date().getTime()

    const object = {
        'id': event.requestContext.requestId,
        'message': message,
        'created_at': now.toString()
    }

    ddb.putItem({
        TableName: process.env.TABLE_NAME,
        Item: {
            'id': { S: object.id },
            'message': { S: object.message },
            'created_at': { N: object.created_at }
        }
    }, function (err, data) {
        if (err) {
            console.log("Error", err);
            callback( null, {

                statusCode: 500,
                headers: {},
                body: {
                    message: err.message
                }
            });
        } else {
            callback(null, {
                statusCode: 201,
                headers: {},
                body: JSON.stringify(object)
            })
        }
    })
}
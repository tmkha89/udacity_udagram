import AWS = require('aws-sdk');
import {config} from './config/config';


// Configure AWS
const credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = credentials;
// AWS.config.update({
//   region: config.aws_region  // e.g., 'us-west-2'
// });

console.log({"AWS.config": AWS.config})

// const sts = new AWS.STS({
//   accessKeyId: 'ASIAQLEYDHPRS4HLPE5R',
//   secretAccessKey: 'vEa0LFQGtNTVOTIUaenU/EV8zGby0RO4v0aLC/wr',
//   region: config.aws_region
// });

// sts.getSessionToken({DurationSeconds: 3600}, (err, data) => {
//   if (err) {
//     console.log('Error', err);
//   } else {
//     // console.log('AccessKeyId:', data.Credentials.AccessKeyId);
//     // console.log('SecretAccessKey:', data.Credentials.SecretAccessKey);
//     // console.log('SessionToken:', data.Credentials.SessionToken);

//     AWS.config.update({
//       accessKeyId: data.Credentials.AccessKeyId,
//       sessionToken: data.Credentials.SessionToken
//     });
//   }
// });

export const s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: config.aws_region,
  params: {Bucket: config.aws_media_bucket},
});

// Generates an AWS signed URL for retrieving objects
export function getGetSignedUrl( key: string ): string {
  console.log("excuting:  getGetSignedUrl.................");
  const listBuckets = () => {
    s3.listBuckets((err, data) => {
      if (err) {
        console.error('Error listing buckets:', err);
      } else {
        console.log('S3 Buckets:', data.Buckets);
      }
    });
  };

  const signedUrlExpireSeconds = 60 * 5;

  return s3.getSignedUrl('getObject', {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}

// Generates an AWS signed URL for uploading objects
export function getPutSignedUrl( key: string ): string {
  console.log({"AWS.config": AWS.config });

  const signedUrlExpireSeconds = 60 * 5;

  return s3.getSignedUrl('putObject', {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}

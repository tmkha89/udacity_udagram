export const config = {
  'username': process.env.POSTGRES_USERNAME,
  'password': process.env.POSTGRES_PASSWORD,
  'database': process.env.POSTGRES_DB,
  'host': process.env.POSTGRES_HOST,
  'dialect': 'postgres',
  'dialectOptions': {
    'ssl': {
      require: true,
      rejectUnauthorized: false
    }
  },
  'aws_region': process.env.AWS_REGION,
  'aws_access_key': process.env.AWS_ACCESS_ID,
  'aws_secret_key': process.env.AWS_SECRET,
  'aws_profile': process.env.AWS_PROFILE,
  'aws_media_bucket': process.env.AWS_BUCKET,
  'url': process.env.URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};

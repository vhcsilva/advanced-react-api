module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '714d131aff1c92c23b808d303d30860f'),
  },
});

export const paths = {
  home: '/',
  auth: {
    signIn: '/auth/sign-in',
    signUp: '/auth/sign-up',
    resetPassword: '/auth/reset-password',
    forgetPassword: '/auth/forget-password',
  },
  dashboard: {
    overview: '/dashboard',
    account: '/dashboard/account',
    customers: '/dashboard/customers',
    products: '/dashboard/products',
    orders: '/dashboard/orders',
    pricing: '/dashboard/pricing',
    communication: '/dashboard/communication',
    settings: '/dashboard/settings',
  },
  errors: { notFound: '/errors/not-found' },
} as const;

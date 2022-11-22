type User = {
  uid: string;
  stripe_customer_id?: string;
  name: string;
  email: string;
  plan: 'free' | 'pro';
};
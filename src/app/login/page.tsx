import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import Login from '@/components/ui/Login';
// import React, { useEffect, useState } from 'react';
// import { signInGoogle } from '@/lib/signInGoogle';
// import { Button, ConfigProvider } from 'antd';
// import { GoogleCircleFilled, MailFilled } from '@ant-design/icons';
// import { useRouter } from 'next/navigation';
// import { useSupabase } from '../supabase-context';
// import { createClient } from '@supabase/supabase-js';
// import { Auth } from '@supabase/auth-ui-react';
// import { ThemeSupa } from '@supabase/auth-ui-shared';
// import * as fr from './fr.json';

export default async function Page() {
  const supabase = createClientComponentClient();
  const { data } = await supabase.auth.getSession();

  if (data?.session) {
    redirect('/');
  }

  return <Login />;
}

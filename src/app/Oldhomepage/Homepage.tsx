'use client';
import Picture306 from './Picture306';
import { BlogSection } from './BlogSection';
import { Partners } from '../partners/Partners';
import { Presentation } from './Presentation';
import { ArticlesProps } from '../types/Components';
import Alert from '@/components/Alert';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { checkForStartSession } from '@/lib/supabase';

export const Homepage = ({ articles }: ArticlesProps) => {
  const { data: session } = useSession();
  const [registeredMember, setRegisteredMember] = useState(false);
  const [displayBox, setDisplayBox] = useState(true);

  useEffect(() => {
    if (session?.user !== undefined) {
      if (Object.keys(session?.user).length !== 0) {
        checkForStartSession(session).then((response) => {
          setRegisteredMember(response);
        });
      } else {
        setRegisteredMember(true);
      }
    }
  }, [session]);

  return (
    <div>
      {registeredMember && displayBox && (
        <Alert setDisplayBox={setDisplayBox} />
      )}
      <div className="hidden md:block">
        <Picture306 />
      </div>
      <Presentation />
      <BlogSection articles={articles} />
      <Partners />
    </div>
  );
};

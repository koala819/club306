'use client';
import Picture306 from './Picture306';
import { BlogSection } from './BlogSection';
import { Partners } from '../partners/Partners';
import { Presentation } from './Presentation';
import { ArticlesProps } from '../types/Components';
import Alert from '@/components/Alert';
import { useState } from 'react';

export const Homepage = ({ articles }: ArticlesProps) => {
  const [registeredMember, setRegisteredMember] = useState(false);
  const [displayBox, setDisplayBox] = useState(true);

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

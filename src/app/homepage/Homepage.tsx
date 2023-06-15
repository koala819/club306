'use client';
import Picture306 from './Picture306';
import { BlogSection } from './BlogSection';
import { Partners } from '../partners/Partners';
import { Presentation } from './Presentation';
import { ArticlesProps } from '../types/Components';

export const Homepage = ({ articles }: ArticlesProps) => {
  return (
    <div>
      <div className="hidden md:block">
        <Picture306 />
      </div>
      <Presentation />
      <BlogSection articles={articles} />
      <Partners />
    </div>
  );
};

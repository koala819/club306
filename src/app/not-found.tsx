'use client';

export const NotFoundPage = ({ someThing }: any) => {
  console.log('someThing\n\n', someThing);
  return (
    <div>
      <h1>when stop Error ?</h1>
      <div>{someThing}</div>
    </div>
  );
};

export default NotFoundPage;

'use client';
import { createContext, useState } from 'react';

export const MemberContext = createContext<MemberContextType>({
  member: undefined,
  updateMember: () => {},
});

export function MemberContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [member, setMember] = useState(null);

  const updateMember = (newMember: any) => {
    setMember(newMember);
  };

  return (
    <MemberContext.Provider value={{ member, updateMember }}>
      {children}
    </MemberContext.Provider>
  );
}

interface MemberContextType {
  member: any; // Remplacez 'any' par le type approprié de member
  updateMember: (newMember: any) => void; // Remplacez 'any' par le type approprié de member
}

'use client';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import React, { ReactNode } from 'react';
import { useTheme } from 'next-themes';
import { ConfigProvider, theme } from 'antd';

interface Props {
  children: ReactNode;
}

// export function AntdConfigProvider({ children }: Props) {
//   const { theme: nowTheme } = useTheme();

//   return (
//     <ConfigProvider
//       theme={{
//         algorithm:
//           nowTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
//       }}
//     >
//       {children}
//     </ConfigProvider>
//   );
// }

const Providers = (props: Props) => {
  // const [mounted, setMounted] = useState(false);

  const { theme: nowTheme } = useTheme();

  // // useEffect only runs on the client, so now we can safely show the UI
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) {
  //   // use your loading page
  //   return <div className="hidden">{props.children}</div>;
  // }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      // disableTransitionOnChange
    >
      <SessionProvider>
        <ConfigProvider
          theme={{
            algorithm:
              nowTheme === 'dark'
                ? theme.darkAlgorithm
                : theme.defaultAlgorithm,
          }}
        >
          {props.children}
        </ConfigProvider>
        {/* {props.children} */}
      </SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;

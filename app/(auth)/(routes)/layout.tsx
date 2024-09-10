import { ReactNode } from 'react';


const AuthLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className='h-full flex items-center justify-center'>
        {children}
    </main>
  );
};

export default AuthLayout;

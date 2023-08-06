import { ReactNode } from 'react';

const Center = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-200 text-slate-600">
      <div className=" mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-5">
        {children}
      </div>
    </div>
  );
};

export default Center;

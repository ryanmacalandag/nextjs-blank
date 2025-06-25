import React, { ReactNode } from "react";

function getAlertVariantsClasses() {
  const icon: string = "bg-background ";
  const iconbg: string = "bg-success";
  const bg: string = "bg-success/5";
  const border: string = "border border-success/20";

  return { icon, iconbg, bg, border };
}

export const AlertIcon: React.FC<{
  children: ReactNode;
  variant?: "success" | "info" | "warning" | "danger" | "muted";
}> = ({ children }) => {
  // retrieve classes for specified variant
  const { icon, iconbg } = getAlertVariantsClasses();

  return (
    <div
      className={`alert-icon 
        ${icon} ${iconbg} 
        w-fit flex justify-center items-center text-xl text-background px-6 py-6`}
    >
      {children}
    </div>
  );
};

export const AlertMessage: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div
      className={`alert-message  
        w-full h-full flex flex-wrap items-center gap-1 px-4 py-6`}
    >
      {children}
    </div>
  );
};

export const AlertTitle: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className={`alert-title w-full text-2xl tracking-tighter font-bold`}>
      {children}
    </div>
  );
};

export const AlertDescription: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className={`alert-description leading-5 opacity-80`}>{children}</div>
  );
};

const Alert: React.FC<{
  children: ReactNode;
  variant?: "success" | "info" | "warning" | "danger" | "muted";
}> = ({ children }) => {
  // retrieve classes for specified variant
  const { bg, border } = getAlertVariantsClasses();

  return (
    <div
      className={`alert 
        ${bg} ${border}
        w-fit flex items-stretch rounded-lg divide-x overflow-hidden`}
    >
      {children}
    </div>
  );
};

export default Alert;

import React from "react";
/*import Header from "./Header/Header";*/

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props): JSX.Element {
  
  return (
    <div>    
      <main >
        {children}
      </main>   
    </div>
  );
}
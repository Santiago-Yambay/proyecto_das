import React from 'react';

export const Main = (props: any) => (
  <main className="w-full bg-gray-50">
    <section className="relative px-8 py-3 bg-white">
      {props.navigation}
    </section>
    <section className={`w-full overflow-y-auto p-3 ${props.className}`}>
      {props.children}
    </section>
  </main>
);
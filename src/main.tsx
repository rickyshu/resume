import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// recoil
import { RecoilRoot } from "recoil";

// react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 1000 * 25 } } });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);

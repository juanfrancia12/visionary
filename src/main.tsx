import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "react-query"
import App from "./App"
import { ReactQueryDevtools } from "react-query/devtools"
import "@styles/style.scss"
import "react-toastify/dist/ReactToastify.css"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>
)

import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

import "./i18n";
import { Spinner } from "./common/components/Spinner/Spinner";

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<Spinner fullscreen={true} />}>
        <App />
      </Suspense>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

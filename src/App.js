import i18next from "i18next";
import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <p>{t("app_title")}</p>
      <p>{t("language")}</p>
      <p>{t("welcome_message")}</p>
      <p>
        {t("days_since_release", {
          number_of_days: 5,
        })}
      </p>

      <button onClick={() => i18next.changeLanguage("en")}>
        Change EN Language
      </button>
    </div>
  );
}

export default App;

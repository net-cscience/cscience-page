(() => {
  const root = document.documentElement;
  const buttons = Array.from(document.querySelectorAll("[data-theme-option]"));
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const allowedThemes = new Set(["calm", "studio", "future"]);
  const colors = {
    calm: "#F7F8FA",
    studio: "#101218",
    future: "#070B12",
  };

  const getInitialTheme = () => {
    try {
      const saved = window.localStorage.getItem("cscience-theme");
      if (saved && allowedThemes.has(saved)) {
        return saved;
      }
    } catch {
      // The site remains usable when storage is unavailable.
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "studio"
      : "calm";
  };

  const applyTheme = (theme, persist = true) => {
    if (!allowedThemes.has(theme)) {
      return;
    }

    root.dataset.theme = theme;
    buttons.forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.themeOption === theme),
      );
    });

    if (themeColor) {
      themeColor.setAttribute("content", colors[theme]);
    }

    if (persist) {
      try {
        window.localStorage.setItem("cscience-theme", theme);
      } catch {
        // Ignore storage restrictions without affecting the preview.
      }
    }
  };

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      applyTheme(button.dataset.themeOption);
    });

    button.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
        return;
      }

      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (index + direction + buttons.length) % buttons.length;
      buttons[nextIndex].focus();
      buttons[nextIndex].click();
    });
  });

  applyTheme(getInitialTheme(), false);
})();

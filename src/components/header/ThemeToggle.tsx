export const ThemeToggle = () => {
  const setTheme = (color: string) => {
    if (color === "default") color = "#08e608";
    document.documentElement.style.setProperty("--main-color", color);
  };

  return (
    <div className="main">
      <button onClick={() => setTheme("red")}>Set Theme(Red)</button>
      <button onClick={() => setTheme("default")}>Reset Theme Default</button>
    </div>
  );
};

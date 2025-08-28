export const useScrollToSection = () => {
  const scrollToSection = (elementRef: React.RefObject<HTMLElement>) => {
    window.scrollTo({
      top: elementRef.current?.offsetTop,
      behavior: "smooth",
    });
  };

  return { scrollToSection };
};

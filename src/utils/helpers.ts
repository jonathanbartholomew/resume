// src/utils/helpers.ts

/**
 * Adds a delay before executing a function
 * @param fn Function to debounce
 * @param delay Delay in milliseconds
 */
export const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number
) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

/**
 * Scroll to element with smooth behavior
 * @param elementId Target element id
 * @param offset Offset from the top in pixels
 */
export const scrollToElement = (elementId: string, offset: number = 0) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

/**
 * Get random number between min and max (inclusive)
 */
export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Format date string to readable format
 * @param dateString Date string (e.g. "2021-01-01")
 * @param format Format type ('short', 'medium', or 'long')
 */
export const formatDate = (
  dateString: string,
  format: "short" | "medium" | "long" = "medium"
) => {
  const date = new Date(dateString);

  switch (format) {
    case "short":
      return date.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      });
    case "long":
      return date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
        day: "numeric",
      });
    case "medium":
    default:
      return date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
  }
};

/**
 * Truncate a string if it exceeds max length
 * @param str String to truncate
 * @param maxLength Maximum string length
 * @param suffix Suffix to add to truncated string
 */
export const truncateString = (
  str: string,
  maxLength: number,
  suffix: string = "..."
) => {
  if (str.length <= maxLength) return str;
  return str.substring(0, maxLength - suffix.length) + suffix;
};

/**
 * Get color from the theme based on skill name or other factor
 * Useful for dynamically selecting colors for skills or tags
 */
export const getColorForSkill = (skillName: string) => {
  // Simple hash function to determine color
  const hash = Array.from(skillName).reduce(
    (acc, char) => char.charCodeAt(0) + acc,
    0
  );

  const colors = [
    { bg: "bg-secondary/20", text: "text-secondary-light" },
    { bg: "bg-highlight/20", text: "text-highlight-light" },
    { bg: "bg-accent/20", text: "text-accent-light" },
  ];

  return colors[hash % colors.length];
};

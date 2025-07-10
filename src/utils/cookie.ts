// Cookie əlavə etmək (default: 1 günlük)
export const setCookie = (name: string, value: string, seconds: number = 86400) => {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${seconds}`;
};

// Cookie oxumaq
export const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return decodeURIComponent(parts.pop()!.split(";").shift()!);
  }
  return null;
};

// Cookie silmək
export const deleteCookie = (name: string) => {
  document.cookie = `${name}=; path=/; max-age=0`;
};

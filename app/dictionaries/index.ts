import "server only"

const dictionaries: any = {
  en: () => import("./en.json").then(module => module.default),
  es: () => import("./es.json").then(module => module.default),
}

export const getDictionary = async (locale: any) => dictionaries[locale]()

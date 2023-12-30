'"server only"'

const dictionaries: { [key: string]: () => Promise<any> } = {
  en: () => import("./en.json").then(module => module.default),
  es: () => import("./es.json").then(module => module.default),
}

export const getDictionary = async (locale: string) => dictionaries[locale]()

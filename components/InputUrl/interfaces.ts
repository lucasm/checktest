export interface PropsCategory {
  category: string
}

export interface Service {
  name: string
  url: string
  protocol?: boolean
  unavailable?: boolean
}

export interface Subcategory {
  title?: string
  services: Service[]
}

export interface Category {
  title: string
  url: string
  active: boolean
  image?: React.ReactNode
  subcategories?: Subcategory[]
}

export interface SourceFile {
  categories: Category[]
}

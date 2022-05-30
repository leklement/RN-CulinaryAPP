export interface ICreations {
  [key: string]: {
    visits: number
  }
}

export interface ApplicationState {
  isLoading: boolean;
  creations: ICreations | undefined
}

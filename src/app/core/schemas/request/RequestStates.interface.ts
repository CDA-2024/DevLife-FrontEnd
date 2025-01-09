export interface RequestStates {
  [key: string]: RequestState;
}

interface RequestState {
  loading: boolean;
  error: string | null;
}
export interface LoginState {
  isLoading: boolean;
  hasError: boolean;
  error: {
    message: string;
  };
}

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["auth/login/rejected", "auth/register/rejected", "auth/resetPassword/rejected"],
        ignoredPaths: ["auth.errorMessage"],
      },
    }),
});

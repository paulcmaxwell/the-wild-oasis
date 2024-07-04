import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated"); // Sends success notification
      //   queryClient.setQueryData("user", user); // Update cache in React Query
      queryClient.invalidateQueries({ queryKey: ["user"] }); // Re-fetch data from API
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isUpdating, updateUser };
}

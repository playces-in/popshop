import type { FC } from "react";
import { Inertia } from "@inertiajs/inertia";

import { PasswordInput } from "@mantine/core";

import { createApolloLink } from "~/helpers/apollo/link";

export type AccountSignInFormValues = {
  readonly email: string;
  readonly password: string;
};

export type AccountSignInFormProps = {};

const AccountSignInForm: FC<AccountSignInFormProps> = () => {
  const removeInvalidResponseCallback = useRef<VoidFunction>();
  const router = useRouter();
  const client = useApolloClient();
  const { getInputProps, onSubmit, reset } = useForm<AccountSignInFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
  });
  return (
    <form
      onSubmit={onSubmit(({ email, password }) => {
        const data = { user: { email, password } };
        router.post("/account/sign_in", data, {
          onBefore: () => {
            // Navigate to non-Inertia pages.
            removeInvalidResponseCallback.current = Inertia.on(
              "invalid",
              event => {
                const { status, request } = event.detail.response;
                if (status === 200 && request instanceof XMLHttpRequest) {
                  event.preventDefault();
                  window.location.href = request.responseURL;
                }
              },
            );
          },
          onSuccess: ({
            props: {
              csrf: { token: csrfToken },
            },
          }: any) => {
            const link = createApolloLink({ csrfToken });
            client.setLink(link);
            client.resetStore();
          },
          onFinish: () => {
            if (removeInvalidResponseCallback.current) {
              removeInvalidResponseCallback.current();
            }
            reset();
          },
        });
      })}
    >
      <Stack spacing="xs">
        <TextInput
          label="Email"
          placeholder="email@example.com"
          required
          {...getInputProps("email")}
        />
        <PasswordInput
          label="Password"
          placeholder="password"
          required
          {...getInputProps("password")}
        />
        <Button type="submit">Sign In</Button>
      </Stack>
    </form>
  );
};

export default AccountSignInForm;

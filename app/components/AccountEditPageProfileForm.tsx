import type { FC } from "react";

import { AccountUpdateMutationDocument } from "~/queries";
import type { AccountEditPageViewerFragment } from "~/queries";

export type AccountEditPageProfileFormValues = {
  readonly name: string;
};

export type AccountEditPageProfileFormProps = {
  readonly viewer: AccountEditPageViewerFragment;
};

const AccountEditPageProfileForm: FC<AccountEditPageProfileFormProps> = ({
  viewer,
}) => {
  const router = useRouter();
  const initialValues = useMemo<AccountEditPageProfileFormValues>(
    () => pick(viewer, "name"),
    [viewer],
  );
  const { getInputProps, onSubmit, setErrors } =
    useForm<AccountEditPageProfileFormValues>({
      initialValues,
    });
  const onError = useApolloErrorCallback("Failed to update account");
  const [runMutation, { loading }] = useMutation(
    AccountUpdateMutationDocument,
    {
      onCompleted: ({ payload: { user, errors } }) => {
        if (user) {
          router.reload();
          showNotice({ message: "Profile updated!" });
        } else {
          invariant(errors);
          setErrors(formErrors(errors));
          showAlert({ message: "Failed to update profile." });
        }
      },
      onError,
    },
  );
  return (
    <form
      onSubmit={onSubmit(values => {
        runMutation({
          variables: {
            input: { ...values },
          },
        });
      })}
    >
      <Stack spacing="xs">
        <TextInput
          label="Name"
          placeholder="A Friend"
          required
          {...getInputProps("name")}
        />
        <Button type="submit" {...{ loading }}>
          Save
        </Button>
      </Stack>
    </form>
  );
};

export default AccountEditPageProfileForm;

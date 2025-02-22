import { PageComponent } from "~/helpers/inertia";
import { Text } from "@mantine/core";

import UserLoginPageForm from "~/components/UserLoginPageForm";

import { UserLoginPageQuery } from "~/queries";

export type UserLoginPageProps = {
  readonly data: UserLoginPageQuery;
};

const UserLoginPage: PageComponent<UserLoginPageProps> = () => (
  <Card w={380} radius="md" withBorder>
    <Stack spacing="xs">
      <Stack align="center" spacing={0}>
        <Title size="h3">Sign In</Title>
        <Text size="sm" color="dimmed">
          Welcome back to{" "}
          <Text color="dark.3" weight={600} span>
            Popshop
          </Text>
        </Text>
      </Stack>
      <UserLoginPageForm />
      <Text size="xs" color="gray">
        Don&apos;t have an account?{" "}
        <Anchor component={Link} href="/user/register" color="indigo">
          Sign up instead.
        </Anchor>
      </Text>
      <Divider />
      <Stack spacing={0} sx={({ fontSizes }) => ({ fontSize: fontSizes.xs })}>
        <Anchor component={Link} href="/user/password/reset" color="indigo">
          Forgot your password?
        </Anchor>
        <Anchor
          component={Link}
          href="/user/verification/resend"
          color="indigo"
        >
          Didn&apos;t get a verification email?
        </Anchor>
      </Stack>
    </Stack>
  </Card>
);

UserLoginPage.layout = buildLayout<UserLoginPageProps>(
  (page, { data: { viewer } }) => (
    <AppLayout title="Sign In" {...{ viewer }}>
      <Center h="100%">{page}</Center>
    </AppLayout>
  ),
);

export default UserLoginPage;

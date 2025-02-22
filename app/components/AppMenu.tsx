import type { FC } from "react";
import type { BadgeProps } from "@mantine/core";
import { createApolloLink } from "~/helpers/apollo/link";

import CogIcon from "~icons/heroicons/cog-6-tooth-20-solid";
import SignOutIcon from "~icons/heroicons/arrow-left-on-rectangle-20-solid";
import DashboardIcon from "~icons/heroicons/rectangle-stack-20-solid";

import type { Maybe } from "~/queries";
import type { AppViewerFragment } from "~/queries";

export type AppMenuProps = {
  readonly viewer: Maybe<AppViewerFragment>;
};

const AppMenu: FC<AppMenuProps> = ({ viewer }) => {
  const router = useRouter();
  const client = useApolloClient();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const badgeActiveColor = theme.colors.gray[5];
  const badgeProps = useMemo<BadgeProps>(
    () => ({
      variant: "dot",
      sx: {
        cursor: "pointer",
        borderColor: opened ? badgeActiveColor : undefined,
        "&:hover": {
          borderColor: badgeActiveColor,
        },
      },
    }),
    [opened],
  );
  return viewer ? (
    <Menu
      trigger="hover"
      position="bottom-end"
      offset={4}
      width={160}
      onChange={setOpened}
      styles={({ colors }) => ({
        dropdown: { padding: "0 !important" },
        item: {
          padding: "8px 10px",
        },
        itemIcon: {
          width: 16,
          height: 16,
          color: colors.black,
        },
        itemLabel: {
          color: colors.gray[7],
          fontWeight: 500,
        },
      })}
    >
      <Menu.Target>
        <Badge variant="dot" color="indigo" {...badgeProps}>
          {viewer.name}
        </Badge>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item component={Link} href="/user/settings" icon={<CogIcon />}>
          Settings
        </Menu.Item>
        <Menu.Item component={Link} href="/dashboard" icon={<DashboardIcon />}>
          Dashboard
        </Menu.Item>
        <Menu.Item
          icon={<SignOutIcon />}
          onClick={() => {
            router.post("/user/logout", {
              onSuccess: ({
                props: {
                  csrf: { token: csrfToken },
                },
              }: any) => {
                const link = createApolloLink({ csrfToken });
                client.setLink(link);
                client.resetStore();
              },
            });
          }}
        >
          Sign Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ) : (
    <Badge component={Link} href="/login" color="gray.4" {...badgeProps}>
      Sign In
    </Badge>
  );
};

export default AppMenu;
